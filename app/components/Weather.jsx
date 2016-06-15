import React, {Component, PropTypes} from 'react';
import Nav from './Nav';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherApi from '../api/openWeatherMap';


class Weather extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {isLoading: false};
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillReceiveProps(props) {
    // Do something with props...
  }

  handleSearch = (city) => {
    this.setState({isLoading: true});
    openWeatherApi.getTemp(city).then(obj => {
        this.setState({
          ...obj, isLoading: false
        })
      }, errorMessage => {
        this.setState({
          isLoading: false
        })
        alert(errorMessage);
      }
    )
  }

  render() {
    const {isLoading, city, temp} = this.state;
    const renderMessage = () => {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>
      }
      else if (city && temp) {
        return <WeatherMessage city={this.state.city} temp={this.state.temp}/>;
      }
    }
    return (
      <div>
        <h2>Weather App</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )

  }
}


export default Weather;