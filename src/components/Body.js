import RestrauntCard from "./RestrurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "./confige";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { filterData } from "../Utils/Helper";
import useOnline from "../Utils/useOnline";

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchDatafromAPI();
  }, []);

  async function fetchDatafromAPI() {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>OFFLINE</h1>;
  }

  //below we have early return
  //no restraureant no CanvasRenderingContext2D

  if (!allrestaurants) return null;

  //to show if all empty

  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search-input"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allrestaurants);

            setSearchText("");
            setFilteredRestaurants(data);
          }}
        >
          <SearchIcon />
        </button>
      </div>
      <div className="body_wrapper">
        {filteredrestaurants?.length === 0 ? (
          <h1>No rest FOUND</h1>
        ) : (
          filteredrestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
                className="LinkforCard"
              >
                <RestrauntCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
