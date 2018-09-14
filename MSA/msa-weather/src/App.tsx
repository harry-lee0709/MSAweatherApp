import * as React from "react";
import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";

const API_KEY = "bc38319498005976b61e350222231bda";
class App extends React.Component {
  public state = {
    city: undefined,
    country: undefined,
    datetime12: undefined,
    datetime24: undefined,
    datetime48: undefined,
    datetime6: undefined,
    description: undefined,
    description12: undefined,
    description24: undefined,
    description48: undefined,
    description6: undefined,
    error: undefined,
    humidity: undefined,
    humidity12: undefined,
    humidity24: undefined,
    humidity48: undefined,
    humidity6: undefined,
    icon: undefined,
    icon12: undefined,
    icon24: undefined,
    icon48: undefined,
    icon6: undefined,
    temperature: undefined,
    temperature12: undefined,
    temperature24: undefined,
    temperature48: undefined,
    temperature6: undefined,
    wind: undefined,
    wind12: undefined,
    wind24: undefined,
    wind48: undefined,
    wind6: undefined
  };
  public getWeather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const Apicall = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await Apicall.json();
    if (data.list) {
      this.setState({
        city: data.city.name,
        country: data.city.country,
        datetime12: data.list[4].dt_txt,
        datetime24: data.list[8].dt_txt,
        datetime48: data.list[16].dt_txt,
        datetime6: data.list[2].dt_txt,
        description: data.list[0].weather[0].description,
        description12: data.list[4].weather[0].description,
        description24: data.list[8].weather[0].description,
        description48: data.list[16].weather[0].description,
        description6: data.list[2].weather[0].description,
        error: "",
        humidity: data.list[0].main.humidity,
        humidity12: data.list[4].main.humidity,
        humidity24: data.list[8].main.humidity,
        humidity48: data.list[16].main.humidity,
        humidity6: data.list[2].main.humidity,
        icon:
          "http://openweathermap.org/img/w/" +
          data.list[0].weather[0].icon +
          ".png",
        icon12:
          "http://openweathermap.org/img/w/" +
          data.list[4].weather[0].icon +
          ".png",
        icon24:
          "http://openweathermap.org/img/w/" +
          data.list[8].weather[0].icon +
          ".png",
        icon48:
          "http://openweathermap.org/img/w/" +
          data.list[16].weather[0].icon +
          ".png",
        icon6:
          "http://openweathermap.org/img/w/" +
          data.list[2].weather[0].icon +
          ".png",
        temperature: data.list[0].main.temp,
        temperature12: data.list[4].main.temp,
        temperature24: data.list[8].main.temp,
        temperature48: data.list[16].main.temp,
        temperature6: data.list[2].main.temp,
        wind: data.list[0].wind.speed,
        wind12: data.list[4].wind.speed,
        wind24: data.list[8].wind.speed,
        wind48: data.list[16].wind.speed,
        wind6: data.list[2].wind.speed
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        datetime12: undefined,
        datetime24: undefined,
        datetime48: undefined,
        datetime6: undefined,
        description: undefined,
        error: "please enter a valid city name.",
        humidity: undefined,
        icon: undefined,
        temperature: undefined,
        wind: undefined
      });
    }
  };
  public render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles text="" />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    temperature6={this.state.temperature6}
                    temperature12={this.state.temperature12}
                    temperature24={this.state.temperature24}
                    temperature48={this.state.temperature48}
                    city={this.state.city}
                    country={this.state.country}
                    datetime6={this.state.datetime6}
                    datetime12={this.state.datetime12}
                    datetime24={this.state.datetime24}
                    datetime48={this.state.datetime48}
                    description={this.state.description}
                    description6={this.state.description6}
                    description12={this.state.description12}
                    description24={this.state.description24}
                    description48={this.state.description48}
                    humidity={this.state.humidity}
                    humidity6={this.state.humidity6}
                    humidity12={this.state.humidity12}
                    humidity24={this.state.humidity24}
                    humidity48={this.state.humidity48}
                    icon={this.state.icon}
                    icon6={this.state.icon6}
                    icon12={this.state.icon12}
                    icon24={this.state.icon24}
                    icon48={this.state.icon48}
                    wind={this.state.wind}
                    wind6={this.state.wind6}
                    wind12={this.state.wind12}
                    wind24={this.state.wind24}
                    wind48={this.state.wind48}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
