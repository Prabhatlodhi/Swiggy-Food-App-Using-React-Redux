import React from "react";
import ReactDOM,{ createRoot } from "react-dom/client";
import "../index.css"
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";

 

 

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