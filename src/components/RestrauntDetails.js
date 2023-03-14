import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { LINK_FOR_RES_MENU } from "./confige";
import { IMAGE_LINK_CDN } from "./confige"; 

const RestrauntDetails = () => {
  const [specificRestraurant, setSpecificRestraurant] = useState(null);

  // const params = useParams();
  // const {resid} = params;
  //or

  const { resid } = useParams();

  useEffect(() => {
    getSpecificRestrauMenu();
  }, []);

  //cards[0].card.card.info.name
  async function getSpecificRestrauMenu() {
    const data = await fetch( LINK_FOR_RES_MENU + resid );
    const json = await data.json();
    setSpecificRestraurant(json.data);
  }

  // console.log(params);json?.data?.cards[2]?.data?.data?.cards

  if (!specificRestraurant) {
    return <Shimmer />;
  }

  return (
    <div className="restraruntDetails">
      <div className="resWrapper">
        <div>
          <h1>Menu id : {resid} </h1>
          <h2>{specificRestraurant.name}</h2>
          <img
            src={IMAGE_LINK_CDN +
              specificRestraurant.cloudinaryImageId
            }
            alt=""
          />
        </div>
        <div>
          <h2>{specificRestraurant.area}</h2>
          <h2>{specificRestraurant.city}</h2>
          <h2>{specificRestraurant.avgRatingString}</h2>
          <h2>{specificRestraurant.costForTwoMsg}</h2>
          <h2>{specificRestraurant?.cuisines?.join(", ")}</h2>
        </div>
      </div>

      <div className="List_wrapper">
        <h1>Menu</h1>
        <ul>
          {Object.values(specificRestraurant?.menu?.items)?.map((item) => (
            <li key={item.id}>

                <div className="individualItem">
                   <div className="menudes">
                   <p> <b>{item.name} </b></p>
                   <p > {item.category}</p> 
                   <p> ₹ {item.price / 100}</p>
                   </div>
                   <div>
                   <img src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              item.cloudinaryImageId
            } alt=""  className="menuImage"/>
                   </div>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntDetails;