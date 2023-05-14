import React, { Component } from "react";
import { getWeather } from "../API";

export default class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  saveInputToState = (event) => {
    this.setState({ city: event.target.value });
  };

  onClickButton = async (event) => {
    event.preventDefault();
    const { city } = this.state;
    if (city) {
      let obj = await getWeather(city);
      this.props.pushToStatistics(obj);
      this.setState({ city: "" });
    }
  };

  render() {
    const { city } = this.state;
    return (
      <>
        <div className="form-group mb-2">
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            placeholder="Insira uma cidade"
            className="form-control"
            onChange={this.saveInputToState}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success" onClick={this.onClickButton}>
            Enviar
          </button>
        </div>
      </>
    );
  }
}
