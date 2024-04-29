import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex space-x-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="todo">Todo</NavLink>
      <NavLink to="doing">Doing</NavLink>
      <NavLink to="done">Done</NavLink>
    </div>
  );
};

export default Nav;
