import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "../index.css";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/NavComponent/About";
import ContactUs from "./components/NavComponent/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestrauntDetails from "./components/RestrauntDetails";
import ProfileClassComponent from "./components/ProfileClassComponent";
import { lazy,Suspense } from "react";
import Shimmer from "./components/Shimmer";


const Instamart = lazy(()=> import("./components/Instamart") );
const About = lazy(()=> import("./components/NavComponent/About") );

const AppLayout = () => {

  
const [ user, setUser] = useState({
  name: "Prabhat",
  email: "@gmail.com",
})



  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

//ALways right below so that Applayout load first and then the ROUTER
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading about us</h1> } ><About /></Suspense> ,
        children: [
          {
          path: "profileclasscomponent",
          element: <ProfileClassComponent/>,
        },
      ],
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        // path: "/restaurant/:id",
        path: "/restaurant/:resid",
        element: <RestrauntDetails />,
      },
      { 
        path: "/instamart",
        element: <Suspense fallback={<Shimmer/>} > <Instamart /></Suspense>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
