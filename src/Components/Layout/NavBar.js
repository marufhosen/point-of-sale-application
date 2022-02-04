import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user } = useContext(userContext);
  const [loggedInuser, setLoggedInUser] = user;
  const [isActive, setIsActive] = useState(false);

  const handleLogOut = () => {
    setLoggedInUser({});
    setIsActive(!isActive);
  };
  return (
    <nav className="bg-gray-100 shadow-lg dark:bg-gray-800 block">
      <div className="container px-6 py-2 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                className="text-xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/home"
              >
                Point of Sale
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={"items-center md:flex" + (navbarOpen ? "" : " hidden")}
          >
            {loggedInuser.success && (
              <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                <Link
                  to="/dashboard"
                  className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  Dashboard
                </Link>
                <Link
                  to="/products"
                  className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  Products
                </Link>
                <Link
                  to="/customers"
                  className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  Customers
                </Link>
                <Link
                  to="/invoice"
                  className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  Invoice
                </Link>
              </div>
            )}
            {loggedInuser.success && (
              <div className="ml-0 md:ml-2">
                <button
                  onClick={() => setIsActive(!isActive)}
                  className="w-9 h-9 overflow-hidden border-2 border-gray-500 rounded-full mt-1"
                >
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </button>
              </div>
            )}
            <nav className={`${isActive ? "" : "hidden"}`}>
              <div className="absolute right-0 z-20 w-full md:w-48 py-2 md:mt-5 mt-3 bg-white rounded-md shadow-xl dark:bg-gray-800">
                <Link
                  to="/profile"
                  onClick={() => setIsActive(!isActive)}
                  className="block px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {" "}
                  Your Profile
                </Link>
                <button
                  className="block px-4 py-3 w-full text-left text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </div>
            </nav>
            <div className="flex items-center py-2 -mx-1 md:mx-0">
              {!loggedInuser.success && (
                <Link
                  className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
