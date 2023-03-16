import { IMAGE_LINK_CDN } from "./confige"; 
import StarRateIcon from '@mui/icons-material/StarRate';

const RestrauntCard = ({ name, cuisines, rating, cloudinaryImageId, costForTwoString, maxDeliveryTime, avgRating, user })=>{
    return(
        <div className="card">
            <img src={IMAGE_LINK_CDN + cloudinaryImageId} alt="restraurantcard" className="restraurentImage" />
            <p className="restName"><b>{name}</b></p>
             <p className="cuisines"> {cuisines?.join(", ")}</p>
             <div className="restrocardDescription">
             <span className="avgRating"> <StarRateIcon fontSize="very-small" /> {avgRating}</span>
             <span>{maxDeliveryTime} mins</span>
             <span>{costForTwoString}</span>
             </div>
             <p>{user.name}</p>
        </div>
    )
 }

 export default RestrauntCard;