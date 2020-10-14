import React from 'react';
import * as axios from 'axios';
import Weather from './Weather';
import './WeatherDisplay.css'


class WeatherDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: '',
      error: false,
      value: ''

    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  calCelsius = (temp) => {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = (event) => {
    event.preventDefault();
    const city = this.state.value
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a4db6dbe4adcde98df0f75f43df7572`).then
        (response => {
          let data = { ...response.data }
          console.log(data);
          this.setState({
            city: `${city}`,
            country: data.sys.country,
            celsius: this.calCelsius(data.main.temp),
            temp_max: this.calCelsius(data.main.temp_max),
            temp_min: this.calCelsius(data.main.temp_min),
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            value: '',
            error: false
          })
        });
    } else {
      this.setState({
        error: true,
        city: undefined,
        country: undefined,
        icon: undefined,
        main: undefined,
        celsius: undefined,
        temp_max: undefined,
        temp_min: undefined,
        description: '',
        value: ''
      })
      console.log(this.state.error)
    }
  }

  render() {

    return <div>
      <form action="" method="get">
        <button type="submit" onClick={this.getWeather}></button>
        <input name="s" placeholder="City..." type="search" onChange={this.handleChange}
          value={this.state.value} />
      </form>
      <Weather city={this.state.city}
        country={this.state.country}
        celsius={this.state.celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        Onchange={this.OnInputChange}
        inputText={this.inputText}
        error={this.state.error}
        onSubmit={this.getWeather}
        icon={this.state.icon} />
    </div>
  }
}

export default WeatherDisplay;