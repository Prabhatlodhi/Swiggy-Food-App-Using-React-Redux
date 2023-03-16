import { Link } from "react-router-dom";
import ProfileClassComponent from "../ProfileClassComponent";
import ProfileUsingFunction from "../ProfileUsingFunction";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log('p const')
  }

    componentDidMount() {
    console.log('From pp cdm')
  }
  componentDidUpdate(){
    console.log("p up")
  }

  componentWillUnmount(){
    
    // console.log("p unmount")
  }


  render() {
    
  console.log('From pp render')
    return (
      <div>
        <h1>Hello From About Us</h1>
        <Link to="/about">
          <p>ABOUT</p>
        </Link>
        <Link to="profileclasscomponent">
          <p>CLick</p>
        </Link>
        <ProfileUsingFunction name={"4545"} /> 
      </div>
    );
  }
}
export default About;
