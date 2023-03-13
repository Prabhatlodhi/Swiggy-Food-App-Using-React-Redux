import { IMAGE_LINK_CDN } from "./confige"

const RestrauntCard = ()=>{
    return(
        <div className="card">
            <img src={IMAGE_LINK_CDN + "kmjxpwf1obnibka2euhj"} alt="restraurantcard" className="restraurentImage" />
            <h2>Bur</h2>
            <h3>Bubbu bubu asas</h3>
            <h4>4.2 stars</h4>
        </div>
    )
 }

 export default RestrauntCard;