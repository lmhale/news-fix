import React from "react";
import { Link, useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  return (
    <div>
      {userId ? (
        <div>
          <a style={{ margin: "10px" }} href="/">
            Home
          </a>
          <a href="favorites">Favorites</a>
          <a href="/logout">Logout</a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
