/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Home page</h1>
      <div>
        <button className="btn-1" onClick={() => navigate("orderSum")}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Home;
