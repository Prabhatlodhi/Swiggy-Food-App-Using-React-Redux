import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "../index.css";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/NavComponent/About";
import ContactUs from "./components/NavComponent/ContactUs";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

//ALways right below so that Applayout load first and then the ROUTER
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contactus",
    element: <ContactUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
