import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Nav from "../Components/Shared/Nav";

const Main = () => {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
