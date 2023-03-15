import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "../index.css";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/NavComponent/About";
import ContactUs from "./components/NavComponent/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestrauntDetails from "./components/RestrauntDetails";
import ProfileClassComponent from "./components/ProfileClassComponent";

const AppLayout = () => {
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
        element: <About />,
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
