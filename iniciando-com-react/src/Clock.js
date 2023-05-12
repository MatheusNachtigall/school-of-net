import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString("pt-BR", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }),
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>{time}</h1>
      </div>
    );
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleString("pt-BR", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }),
    });
  }
}

export default Clock;
