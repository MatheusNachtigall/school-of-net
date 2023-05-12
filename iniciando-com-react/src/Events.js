import React, { Component } from "react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: [],
    };
  }

  clickMethod = () => {
    let arr = this.state.data;
    arr.push(this.state.name);
    this.setState({
      name: "",
      data: arr,
    });
    console.log(this.state);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={this.handleChange}
        ></input>

        <button type="button" onClick={this.clickMethod}>
          Send
        </button>

        <ul>
          {this.state.data.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Events;
