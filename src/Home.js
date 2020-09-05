import React from "react";
import web from "../src/images/img11.jfif";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your bussiness with"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
    </>
  );
};

export default Home;
