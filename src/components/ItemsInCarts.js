import { IMAGE_LINK_CDN } from "./confige";
import StarRateIcon from "@mui/icons-material/StarRate";

const ItemsInCarts = ({
  name,
  cuisines,
  rating,
  imageId,
  costForTwoString,
  maxDeliveryTime,
  ratings,
  description,
  user,
  price,
}) => {
  return (
    <div className="cardofCheckout">
      <div className="restrocardDescription">
        <div>
          <h1 className="">
            <b>{name}</b>
          </h1>
         
          {/* <h3>{itemAttribute.vegClassifier} </h3>  */}
         
          <h1 className="">₹ {price / 100}</h1>
          <p className=" "> {description}</p>
        </div>
        <div>
        <h2>{ratings.aggregatedRating.rating} </h2>
          <h3>{ratings.aggregatedRating.ratingCount} </h3> 
        </div>
         
      </div>
      <div>
        <img
          src={IMAGE_LINK_CDN + imageId}
          alt="restraurantcard"
          className="restraurentImageofCheck"
        />
      </div>
    </div>
  );
};

export default ItemsInCarts;
