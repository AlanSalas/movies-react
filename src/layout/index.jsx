import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/login" ? null : (<Navbar />)}
      <Outlet />
    </div>
  );
};

export default Layout;
