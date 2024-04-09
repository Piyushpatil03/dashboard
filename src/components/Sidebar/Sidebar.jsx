import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`col ${isOpen ? "open" : ""}`}>
        <div className="sidebar">
          <div className="top_head">
            <img className="logo" src="./logo2.png" alt="Carbon Cell"/>
            <button className="toggle-btn" onClick={toggleSidebar}>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </button>
          </div>
        </div>

        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="organization">
                Organization
              </NavLink>
            </li>
            <li>
              <NavLink to="assets">
                Assets
              </NavLink>
            </li>
            <li>
              <NavLink to="Trade">
                Trade
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <div className="icon-2"></div>
        <div className="icon-2"></div>
        <div className="icon-2"></div>
      </button>
    </>
  );
};

export default Sidebar;
