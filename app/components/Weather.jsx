import React, {Component, PropTypes} from 'react';
import Nav from './Nav';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherApi from '../api/openWeatherMap';
import 'react-foundation-components/lib/_typography.scss';
import {TextAlignment} from 'react-foundation-components/lib/text-alignment';

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
        return (<TextAlignment alignment="center"><h3>Fetching Weather...</h3></TextAlignment>);
      }
      else if (city && temp) {
        return <WeatherMessage city={this.state.city} temp={this.state.temp}/>;
      }
    }
    return (
      <div>
        <TextAlignment alignment="center">
          <h1>Weather App</h1>
        </TextAlignment>
        <WeatherForm onSearch={this.handleSearch}/>
        <TextAlignment alignment="center">
          {renderMessage()}
        </TextAlignment>
      </div>
    )

  }
}


export default Weather;