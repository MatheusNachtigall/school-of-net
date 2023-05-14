import React, { Component } from "react";
import { ContainerApp } from "../components/ContainerApp";
import WeatherForm from "../components/WeatherForm";
import WeatherStatistics from "../components/WeatherStatistics";
import Toast from "../components/Toast";

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      weatherData: {},
    };
  }

  pushToStatistics = (objectData) => {
    this.setState({
      weatherData: objectData,
    });
  };

  render() {
    return (
      <ContainerApp>
        <div className="col-xs-12 col-md-12">
          <WeatherForm pushToStatistics={this.pushToStatistics}></WeatherForm>
        </div>
        <div className="col-xs-12 col-md-12">
          <WeatherStatistics
            weatherData={this.state.weatherData}
          ></WeatherStatistics>
        </div>
        <div className="col-xs-12 col-md-12">
          <Toast message="Ola"></Toast>
        </div>
      </ContainerApp>
    );
  }
}
