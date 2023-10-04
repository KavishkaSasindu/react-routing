/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();
  return <div>UserDetails Page {userId}</div>;
}

export default UserDetails;
