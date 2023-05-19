import React, { Component } from "react";

export default class TodoListItem extends Component {
  clickRemoveButton = () => {
    this.props.removeFromItems(this.props.index);
  };

  render() {
    const { item, index } = this.props;

    return (
      <li key={index} className="list-group-item">
        {item}
        <button
          className="btn btn-danger"
          type="button"
          onClick={this.clickRemoveButton}
        >
          X
        </button>
      </li>
    );
  }
}
// onClick={removeFromItems(index)}
