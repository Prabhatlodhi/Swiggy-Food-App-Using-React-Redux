import React from "react";
import ReactDOM,{ createRoot } from "react-dom/client";
import "./index.css"
import image from "./ImagesGif/Bright Colorful Playful Funny Donuts Food Circle Logo.gif"


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

 const RestrauntCard = ()=>{
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + "kmjxpwf1obnibka2euhj"} alt="restraurantcard" className="restraurentImage" />
            <h2>Bur</h2>
            <h3>Bubbu bubu asas</h3>
            <h4>4.2 stars</h4>
        </div>
    )
 }

 const Body = ()=>{
    return(
      <div className="body_wrapper">
         <RestrauntCard/>
       <RestrauntCard/>
       <RestrauntCard/>
       <RestrauntCard/>
      </div>
    )
 }

 const Footer = ()=>{
    return(
        <h4>Footer</h4>
    )
 }

const AppLayout = ()=>{
    return (
       <>
         <HeaderComponent/>
        <Body/>
        <Footer/>
       </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>
 )