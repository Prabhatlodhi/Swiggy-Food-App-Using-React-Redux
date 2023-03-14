import { useRouteError } from "react-router-dom"; 
import ErrorPageGif from "../../ImagesGif/Black Typography Error T-Shirt.gif"



const ErrorPage = ()=>{
    const err = useRouteError();
    return(
        <div className="errorWrapper"> 
            <img src={ErrorPageGif} alt="" className="errorImage"/>
        </div>
    )
}
export default ErrorPage;