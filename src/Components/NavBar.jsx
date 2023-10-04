/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

function NavBar() {
  const [nav, setNav] = useState(false);

  const menuItem = () => {
    setNav(!nav);
  };
  return (
    <div className=" w-screen p-4 bg-transparent items-center text-red-600">
      {/* Large Device NavBar */}
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <div>
          <h2 className="text-2xl font-semibold">Routing</h2>
        </div>
        <div>
          <ul className=" hidden md:flex md:space-x-5 lg:space-x-8 text-xl font-semibold">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"about"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"products"}>
              <li>Products</li>
            </NavLink>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={menuItem}
            className="transition-all duration-300 hover:scale-110"
          >
            {nav ? <MdClose size={25} /> : <AiOutlineMenu size={25} />}
          </button>
        </div>
      </div>
      {/* Mobile Device Menu */}
      <div
        className={`flex justify-center items-center  bg-red-600 h-[200px]  text-white text-xl font-semibold rounded-md shadow-lg ${
          nav ? "transition-all duration-300 md:hidden" : "hidden"
        }`}
      >
        <div>
          <ul>
            <NavLink to={"/"}>
              <li className="m-5">Home</li>
            </NavLink>
            <NavLink to={"about"}>
              <li className="m-5">About</li>
            </NavLink>
            <NavLink to={"products"}>
              <li className="m-5">Products</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
