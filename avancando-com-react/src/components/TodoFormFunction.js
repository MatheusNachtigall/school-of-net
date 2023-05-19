import React, { Component, useState } from "react";

export const TodoFormFunction = (props) => {
  const [todo, setTodo] = useState("");

  const saveInputToState = (event) => {
    setTodo(event.target.value);
  };

  const onAdd = (event) => {
    event.preventDefault();
    console.log("todo:", todo);
    if (todo) {
      console.log("yes");
      props.pushToItems(todo);
      setTodo("");
    }
  };

  return (
    <>
      <div className="form-group mb-2">
        FORM COM HOOKS
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          placeholder="Enter new task"
          className="form-control"
          onChange={(e) => saveInputToState(e)}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" onClick={(e) => onAdd(e)}>
          Enviar
        </button>
      </div>
    </>
  );
};
