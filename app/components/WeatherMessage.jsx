import React, { Component, PropTypes } from 'react';


const WeatherMessage = ({city, temp}) => {
    return (
      <div>
        The current temperature is {temp} in {city}.
      </div>
    );
}

WeatherMessage.propTypes = {
    city: PropTypes.string.isRequired,
    temp: PropTypes.number
}

export default WeatherMessage;