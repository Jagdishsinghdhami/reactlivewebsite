import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to="/">About Us</Link>
      <Link to="/Contact">Contact Us</Link>
      <br />
      <a href="/">AboutUs</a>
      <a href="/Contact">contactUs</a>
    </>
  );
};

export default Menu;
