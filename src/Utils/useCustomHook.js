import { useState,useEffect } from "react";
// import { REST_MENU } from "../components/confige";
 

const useCustomHook = (resid) => {
  const [specificRestraurant, setSpecificRestraurant] = useState(null);
  useEffect(() => {
    getSpecificRestrauMenu();
  }, []);

  //cards[0].card.card.info.name
  async function getSpecificRestrauMenu() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6105073&lng=77.1145653&restaurantId="+ {resid})
    const json = await data.json();
    setSpecificRestraurant(json.data);
  }

  // console.log(params);json?.data?.cards[2]?.data?.data?.cards
  return specificRestraurant;
};
export default useCustomHook;
