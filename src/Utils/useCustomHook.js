import { useState,useEffect } from "react";

import { LINK_FOR_RES_MENU } from "../components/confige";

const useCustomHook = (resid) => {
  const [specificRestraurant, setSpecificRestraurant] = useState(null);
  useEffect(() => {
    getSpecificRestrauMenu();
  }, []);

  //cards[0].card.card.info.name
  async function getSpecificRestrauMenu() {
    const data = await fetch(LINK_FOR_RES_MENU + resid);
    const json = await data.json();
    setSpecificRestraurant(json.data);
  }

  // console.log(params);json?.data?.cards[2]?.data?.data?.cards
  return specificRestraurant;
};
export default useCustomHook;
