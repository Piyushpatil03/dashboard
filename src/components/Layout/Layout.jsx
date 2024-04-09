import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="outlet_div">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
