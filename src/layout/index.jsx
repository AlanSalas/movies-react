// Components
import Navbar from "../components/Navbar";
// Hooks
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/login" ? null : <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
