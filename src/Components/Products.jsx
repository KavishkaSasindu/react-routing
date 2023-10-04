/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useReducer } from "react";

function Products() {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 space-x-5">
        <input
          type="text"
          placeholder={`Search Here`}
          className="p-2 bg-slate-300 rounded-md shadow-md ml-5 outline-none "
        />
        <FiSearch />

        <div className="flex justify-center items-center">
          <ul className="space-x-5">
            <Link to="featured">
              <button className="btn-1">Features</button>
            </Link>
            <Link to="new">
              <button className="btn-1">New</button>
            </Link>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Products;
