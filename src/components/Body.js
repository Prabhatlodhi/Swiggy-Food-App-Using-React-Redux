import RestrauntCard from "./RestrurantCard";
import { useEffect, useState } from "react"; 
import {REST_LIST} from "./confige";
import { SWIGGY_API } from "./confige";

function filterData(searchText, restaurants) {
   const filterDatax =  restaurants.filter((restaurant)=> restaurant.name.includes(searchText))
   
   return filterDatax;
}

 

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchDatafromAPI()
  },[])

  async function fetchDatafromAPI(){
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json)
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

  return (
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
           const data =  filterData(searchText, restaurants);
           setRestaurants(data)
          }}
        >
          Search
        </button>
      </div>
      <div className="body_wrapper">
        {
            restaurants.map((restaurant)=>{
                return <RestrauntCard {...restaurant.data}  />
            })
        }
      </div>
    </>
  );
};
export default Body;
