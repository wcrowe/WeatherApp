import React, { Component } from 'react';
import { Grid, Row, Cell } from 'react-inline-grid';
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
        });
      }, errorMessage => {
        this.setState({
          isLoading: false
        })
        alert(errorMessage);
      }
    );
  };
  // if this doesn't work react-inline-grid
  // try
  //http://roylee0704.github.io/react-flexbox-grid/

  render() {
    const {isLoading, city, temp} = this.state;
    const renderMessage = () => {
      if (isLoading) {
        return (<h3>Fetching Weather...</h3>);
      }
      else if (city && temp) {
        return <WeatherMessage city={this.state.city} temp={this.state.temp}/>;
      }
    }
    return (
      <div>
        <Grid>
          <Row is="center">
          <Row>
            <Cell is="middle tablet-4 phone-4">
              <div><h1>Weather App</h1></div>
            </Cell>

            <Cell is="middle tablet-4 phone-4">
              <WeatherForm onSearch={this.handleSearch}/>
            </Cell>

            <Cell is="middle tablet-4 phone-4">
              {renderMessage()}
            </Cell>
          </Row>
            </Row>
        </Grid>
      </div>
    );
  }
}


export default Weather;
