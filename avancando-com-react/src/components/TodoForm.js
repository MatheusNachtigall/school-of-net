import React, { Component } from "react";

export default class TodoForm extends Component {
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

  onAdd = (event) => {
    event.preventDefault();
    const { todo } = this.state;
    if (todo) {
      this.props.pushToItems(this.state.todo);
      this.setState({ todo: "" });
    }
  };

  render() {
    const { todo } = this.state;
    return (
      <>
        <div className="form-group mb-2">
          <input
            type="text"
            name="todo"
            id="todo"
            value={todo}
            placeholder="Enter new task"
            className="form-control"
            onChange={this.saveInputToState}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success" onClick={this.onAdd}>
            Enviar
          </button>
        </div>
      </>
    );
  }
}
