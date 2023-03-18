// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMAGE_LINK_CDN } from "./confige";
import useCustomHook from "../Utils/useCustomHook";
import { additem } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

const RestrauntDetails = () => {
  const { resid } = useParams();

  const specificRestraurant = useCustomHook(Number(resid));

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(additem("huhu"))
  };

  const addFoodItem = (item)=>{
    // console.log({...item[0]})
    dispatch(additem(item))
  }

  let restData = specificRestraurant?.cards[0]?.card?.card?.info;

  {
    // console.log(specificRestraurant);
    //cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name
    //cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[0].card.info.category

    // cards[0].card.card.info.sla.slaString

    //cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    //groupedCard.cardGroupMap.REGULAR.cards[2]
    //cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[1].card.info.offerTags[0].subTitle
  }

  if (!specificRestraurant) {
    return <Shimmer />;
  }
 

  let ITEMS =
    specificRestraurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards; 
  // let OFFERS =
  //   specificRestraurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
  //     ?.card?.itemCards[1]?.card?.info?.offerTags;
 
  return (
    <div className="restraruntDetails">
      <div className="resWrapper">
        <div className=" ">
          <img
            src={IMAGE_LINK_CDN + restData.cloudinaryImageId}
            alt=""
            className="restraImage"
          />
        </div>
        <div className="restradetails">
          <div className="wrapperdetails">
            <div>
              <span>
                <b>{restData.name}</b> ,{" "}
              </span>
              <span>{restData.city}</span>
            </div>
            <div className="ratingdetails">
              <h6>{restData.avgRatingString}</h6>
              <hr></hr>
              <h6>{restData.totalRatingsString}</h6>
            </div>
          </div>
          <h5>{restData?.cuisines?.join(", ")}</h5>
          <h5>Cost for two : {restData.costForTwoMessage}</h5>
        </div>
      </div>

      <div className="List_wrapper">
        <h1>Menu</h1>
        <ul>
          {ITEMS?.map((item) => (
            <li key={item.card.info.id}>
              <div className="individualItem">
                <div className="menudes">
                  <p>
                    <b>{item.card.info.name}</b>
                  </p>
                  <p>₹ {item.card.info.price / 100}</p>
                  {/* {OFFERS?.map((offers) => (
                    <>
                      <p className="swiggyoffers">{offers.subTitle}</p>
                      <p className="swiggyoffers">{offers.header}</p>
                    </>
                  ))} */}
                  {/* <p className="swiggycat">{item.card.info.category}</p> */}
                  <p className="menudescription">
                    {item.card.info.description}
                  </p>
                </div>
                <div className="wwrpaerImage">
                  <ul className="listWrapper">
                    <li><img
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                      item.card.info.imageId
                    }
                    alt=""
                    className="menuImage"
                  /> </li>
                  <li>
                  <button onClick={() => addFoodItem(item)} className="css-button-sliding-to-left--sand" >Add Item</button></li>
                  </ul>
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
