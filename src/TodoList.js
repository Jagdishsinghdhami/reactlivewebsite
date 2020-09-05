import React, { useState } from "react";
import "./F:\reactabcawesomeapp\node_modules\bootstrapdistcss\bootstrap.min.css";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listofItems = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo list</h1>
          <br />
          <input type="text" placeholder="add an item" onChange={itemEvent} />
          <Button className="newBtn" onClick={listofItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((val) => {
              return <ListCom text={val} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};
export default TodoList;
