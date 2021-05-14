import React, { Component } from "react";

class Town extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      isCelsius: true
    };

    this.fetchData = this.fetchData.bind(this);
  }

  //fetches data from openweatherAPI
  fetchData() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?id={API_KEY}&units=metric"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          temp: response.main.temp
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="my_town">
        <img id="town_img" src="halifax.jpg" alt="Halifax town" />
        <p>
          I currently live in <span>Halifax, Canada.</span>
        </p>
        <p>Current weather :</p>
        <div id="temp_change">
          <input
            type="radio"
            id="celsius"
            name="temp_value"
            value="c"
            onClick={() => this.setState({ isCelsius: true })}
            defaultChecked
          />
          <label>
            <sup>o</sup>C
          </label>
          <input
            type="radio"
            id="farenheit"
            name="temp_value"
            value="f"
            onClick={() => this.setState({ isCelsius: false })}
          />
          <label>
            <sup>o</sup>F
          </label>
        </div>
        <div id="weather">
          {this.state.temp < 10 ? (
            <img className="icon" src="cold.png" alt="Cold" />
          ) : this.state.temp > 10 && this.state.temp < 20 ? (
            <img className="icon" src="mild.png" alt="Mild" />
          ) : (
            <img className="icon" src="sunny.png" alt="Sunny" />
          )}
          <p id="temp">
            {this.state.isCelsius === true ? (
              <span>
                {this.state.temp} <sup>o</sup>C
              </span>
            ) : (
              <span>
                {Math.floor(this.state.temp * (9 / 5) + 32)} <sup>o</sup>F
              </span>
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default Town;
