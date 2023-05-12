import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { clickHelloAction } from "./actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { text } = this.state;
    const { msg, clickHelloAction } = this.props;

    return (
      <div className="App">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="text"
          onChange={this.handleInputChange}
        ></input>
        <button type="button" onClick={() => clickHelloAction(text)}>
          Click to Dispatch Action
        </button>
        <h1>{msg}</h1>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log("STORE APP: ", store);
  return {
    msg: store.clickReducer.msg,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ clickHelloAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
