/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function OrderSummery() {
  const navigate = useNavigate();
  return (
    <div>
      Order is Confirmed
      <div>
        <button className="btn-1">
          <Link to={"/"}>Go Back</Link>
        </button>
      </div>
    </div>
  );
}

export default OrderSummery;
