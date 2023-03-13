import { IMAGE_LINK_CDN } from "./confige"; 

const RestrauntCard = ({ name, cuisines, rating, cloudinaryImageId, costForTwoString, maxDeliveryTime, avgRating })=>{
    return(
        <div className="card">
            <img src={IMAGE_LINK_CDN + cloudinaryImageId} alt="restraurantcard" className="restraurentImage" />
            <p className="restName"><b>{name}</b></p>
             <p className="cuisines"> {cuisines?.join(", ")}</p>
             <div className="restrocardDescription">
             <span className="avgRating">{avgRating}</span>
             <span>{maxDeliveryTime} mins</span>
             <span>{costForTwoString}</span>
             </div>
        </div>
    )
 }

 export default RestrauntCard;