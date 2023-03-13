import image from "../../ImagesGif/Bright Colorful Playful Funny Donuts Food Circle Logo.gif"


const Title = ()=>{
    return(
        <a href="/">
            <img src={image} alt="foodlogo" className="imageclass" />
        </a>
    )
}

const HeaderComponent = ()=>{

    return(
        <div className="nav_wrapper  ">
            <Title/>
            <ul className="nav_item  ">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    );
 };
export default HeaderComponent;