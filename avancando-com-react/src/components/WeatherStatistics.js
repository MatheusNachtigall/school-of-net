import React, { Component } from "react";

export default class WeatherStatistics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { weatherData } = this.props;
    return (
      <>
        {weatherData && weatherData.current ? (
          <div className="details">
            <h1 className="temp">{weatherData.current?.temperature}ºC</h1>
            <h1 className="status">
              {weatherData.current?.weather_descriptions}
            </h1>
            <div className="more-info">
              <p>Humidity - {weatherData.current?.humidity}%</p>
              <p>Wind Speed - {weatherData.current?.wind_speed}km/h</p>
              <p>Wind Dir - {weatherData.current?.wind_dir}</p>
              <p>Pressure - {weatherData.current?.pressure}MB</p>
            </div>
            <div className="query">{weatherData.request?.query}</div>
          </div>
        ) : (
          <div className="details"> Aguardando </div>
        )}
      </>
    );
  }
}
