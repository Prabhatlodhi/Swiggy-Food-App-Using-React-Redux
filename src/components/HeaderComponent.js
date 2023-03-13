import { useState } from "react";
import image from "../../ImagesGif/Bright Colorful Playful Funny Donuts Food Circle Logo.gif";



const Title = () => {
  return (
    <a href="/">
      <img src={image} alt="foodlogo" className="imageclass" />
    </a>
  );
};

const HeaderComponent = () => {
    const [isloggedIn, setIsloggedIn] = useState(true);
    
  return (
    <div className="nav_wrapper  ">
      <Title />
      <ul className="nav_item  ">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
        <li>
          {
            isloggedIn ? <button onClick={()=>setIsloggedIn(!isloggedIn)} className="btnlog" > Login</button> :<button className="btnlog" onClick={()=>setIsloggedIn(!isloggedIn)}>Logout</button>
          }
        </li>
      </ul>
    </div>
  );
};
export default HeaderComponent;
