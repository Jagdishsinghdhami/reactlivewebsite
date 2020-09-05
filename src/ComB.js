import React, { useContext } from "react";
import ComC from "./ComC";

import { FirstName } from "./App";

const comB = () => {
  const fname = useContext(FirstName);
  return <h1>my name is {fname}</h1>;
};

export default ComB;
