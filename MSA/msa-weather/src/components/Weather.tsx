import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";

export interface IMyProps {
  city: undefined;
  country: undefined;
  temperature: undefined;
  temperature6: undefined;
  temperature12: undefined;
  temperature24: undefined;
  temperature48: undefined;
  datetime6: undefined;
  datetime12: undefined;
  datetime24: undefined;
  datetime48: undefined;
  description: undefined;
  description6: undefined;
  description12: undefined;
  description24: undefined;
  description48: undefined;
  humidity: undefined;
  humidity6: undefined;
  humidity12: undefined;
  humidity24: undefined;
  humidity48: undefined;
  icon: undefined;
  icon6: undefined;
  icon12: undefined;
  icon24: undefined;
  icon48: undefined;
  error: undefined;
  wind: undefined;
  wind6: undefined;
  wind12: undefined;
  wind24: undefined;
  wind48: undefined;
}

class Weather extends React.Component<IMyProps> {
  public render() {
    return (
      <div className="result">
        <div>
          {this.props.city &&
            this.props.country && (
              <p id="todayMain">
                <img src={this.props.icon} />
                It is {this.props.temperature}
                °C in {this.props.city}, {this.props.country} right now.
              </p>
            )}
          {this.props.city &&
            this.props.country && (
              <p id="todaySub">
                {this.props.description}, there is {this.props.humidity}%
                humidity and {this.props.wind}
                (m/s) wind speed.
              </p>
            )}
          {this.props.error && (
            <p className="weather__error">{this.props.error}</p>
          )}
        </div>
        <div className="forecast">
          {this.props.city &&
            this.props.country && (
              <p>
                <img src={this.props.icon6} />
                <br />
                {this.props.datetime6}
                <br />
                {this.props.temperature6}
                °C
                <br />
                {this.props.description6}
                <br />
                Humidity: {this.props.humidity6}
                <br />
                Wind: {this.props.wind6}
                (m/s)
              </p>
            )}
        </div>
        <div className="forecast">
          {this.props.city &&
            this.props.country && (
              <p>
                <img src={this.props.icon12} />
                <br />
                {this.props.datetime12}
                <br />
                {this.props.temperature12}
                °C
                <br />
                {this.props.description12}
                <br />
                Humidity: {this.props.humidity12}
                <br />
                Wind: {this.props.wind12}
                (m/s)
              </p>
            )}
        </div>
        <div className="forecast">
          {this.props.city &&
            this.props.country && (
              <p>
                <img src={this.props.icon24} />
                <br />
                {this.props.datetime24}
                <br />
                {this.props.temperature24}
                °C
                <br />
                {this.props.description24}
                <br />
                Humidity: {this.props.humidity24}
                <br />
                Wind: {this.props.wind24}
                (m/s)
              </p>
            )}
        </div>
        <div className="forecast">
          {this.props.city &&
            this.props.country && (
              <p>
                <img src={this.props.icon48} />
                <br />
                {this.props.datetime48}
                <br />
                {this.props.temperature48}
                °C
                <br />
                {this.props.description48}
                <br />
                Humidity: {this.props.humidity48}
                <br />
                Wind: {this.props.wind48}
                (m/s)
              </p>
            )}
        </div>
      </div>
    );
  }
}

export default Weather;
