import { useContext, useState } from "react";
import image from "../../ImagesGif/Bright Colorful Playful Funny Donuts Food Circle Logo.gif";
import { Link } from "react-router-dom";
import UserContexte from "../Utils/LearningContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Link to="/">
      <img src={image} alt="foodlogo" className="imageclass" />
    </Link>
  );
};

const HeaderComponent = () => {
  const [isloggedIn, setIsloggedIn] = useState(true);

  const { user } = useContext(UserContexte);

  const cartItems = useSelector(store => store.cart.items);
  


  return (
    <div className="nav_wrapper  ">
      <Title />
      <ul className="nav_item">
        <Link to="/" className="Link">
          <li>Home</li>
        </Link>
        <Link to="/about" className="Link">
          <li>About Us</li>
        </Link>
        <Link to="/contactus" className="Link">
          <li>Contact</li>
        </Link>
        <Link to="/cartpage" className="Link">
          <li>Cart - { cartItems.length }</li>
        </Link>
        <Link to="/instamart" className="Link">
          <li>Instamart</li>
        </Link>

        <li>
          {isloggedIn ? (
            <button
              onClick={() => setIsloggedIn(!isloggedIn)}
              className="btnlog"
            >
              {" "}
              Login
            </button>
          ) : (
            <button
              className="btnlog"
              onClick={() => setIsloggedIn(!isloggedIn)}
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
export default HeaderComponent;
