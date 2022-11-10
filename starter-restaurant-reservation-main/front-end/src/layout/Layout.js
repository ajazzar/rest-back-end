import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import { Link } from "react-router-dom";
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
      <div className="row h-100">
        {/* mobile menu bar */}
        <div className="mobile-menu-button top-0 bg-gray-800 w-full z-10 flex justify-between md:hidden">
          <Link
            className="navbar-brand block p-4 text-2xl text-white font-bold"
            to="/"
          >
            <div>
              <span>Periodic Tables</span>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => handleSidebar()}
            className="p-4 focus:outline-none focus:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
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
    </div>
  );
}

export default Layout;
