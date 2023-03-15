 
import { Link } from "react-router-dom";
import ProfileClassComponent from "../ProfileClassComponent";
import ProfileUsingFunction from "../ProfileUsingFunction";

const About = () => {
  return (
    <div>
      <h1>Hello From About Us</h1>
      <Link to="/about">
        
        <p>ABOUT</p>
      </Link>
      <Link to="profileclasscomponent">
         
        <p>CLick</p>
      </Link>
      <ProfileClassComponent name={"4545"} />
      <ProfileUsingFunction name={"prabhat"} />
    </div>
  );
};
export default About;
