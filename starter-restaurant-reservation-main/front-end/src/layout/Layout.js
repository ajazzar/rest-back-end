import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import "./Layout.css";
/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */

function handleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("-translate-x-full");
}

function Layout() {
  return (
    <div className="container-fluid">
      {/* mobile menu bar */}
      <div className="row h-100">
        <button
          type="button"
          onClick={() => handleSidebar()}
          className="p-4 focus:outline-none focus:bg-gray-700"
        ></button>
      </div>
      {/* sidebar */}
      <div className="col-md-2 side-bar">
        <Menu />
      </div>
      {/* main content */}
      <div className="col">
        <Routes />
      </div>
    </div>
  );
}

export default Layout;
