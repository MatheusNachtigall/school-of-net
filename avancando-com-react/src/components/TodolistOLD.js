import React, { Component } from "react";
import TodoForm from "./TodoForm";

export default class TodolistOld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todo: "",
    };
  }

  saveInputToState = (event) => {
    this.setState({ todo: event.target.value });
  };

  submitButtonHandler = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, document.querySelector("#todo").value],
      todo: "",
    });
    console.log(this.state);
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <TodoForm></TodoForm>
        <hr />
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
