import React from "react";
import { Outlet } from "react-router-dom";
import Navmenu from "../Navmenu/Navmenu";

const Mainlayout = () => {
  return (
    <div>
      <Navmenu></Navmenu>
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;
