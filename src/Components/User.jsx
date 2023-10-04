/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function User() {
  const [searchParams, setSearchParams] = useSearchParams();

  const showACtiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>

      <div className="flex space-x-4">
        <button
          className="btn-1"
          onClick={() => {
            setSearchParams({
              filter: "active",
            });
          }}
        >
          Active Users
        </button>
        <button className="btn-1" onClick={() => setSearchParams({})}>
          Reset Users
        </button>
      </div>
      {showACtiveUsers ? (
        <h1>Showing Active Users</h1>
      ) : (
        <h1>Showing All Users</h1>
      )}
      <Outlet />
    </div>
  );
}

export default User;
