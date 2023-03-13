import RestrauntCard from "./RestrurantCard";
import { useEffect, useState } from "react";  
import { SWIGGY_API } from "./confige";
import Shimmer from "./Shimmer";

function filterData(searchText, allrestaurants) {
   const filterDatax =  allrestaurants.filter((restaurant)=> restaurant.data.name.includes(searchText))
   
   return filterDatax;
}

 

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchDatafromAPI()
  },[])

  async function fetchDatafromAPI(){
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
     
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

  return (allrestaurants.length === 0) ? <Shimmer/> : (
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
           const data =  filterData(searchText, allrestaurants);
           setFilteredRestaurants(data)
          }}
        >
          Search
        </button>
      </div>
      <div className="body_wrapper">
        {
            filteredrestaurants.map((restaurant)=>{
                return <RestrauntCard {...restaurant.data}  />
            })
        }
      </div>
    </>
  );
};
export default Body;
