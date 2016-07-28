import React, { Component, PropTypes } from 'react';
import {
  Row,
  Column,
  TopBar,
  TopBarTitle,
  TopBarRight,
  Menu,
  MenuItem
} from 'react-foundation';

const WeatherMessage = ({city, temp}) => {
    return (
      <h3>
          
        It is {temp}° in {city}.
      </h3>
    );
}

WeatherMessage.propTypes = {
    city: PropTypes.string.isRequired,
    temp: PropTypes.number
}

export default WeatherMessage;