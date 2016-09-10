import React, { PropTypes } from 'react';

const WeatherMessage = ({ city, temp }) => {
  return (
    <div>
    <h3>
       It is {temp}° in {city}.
    </h3>
      </div>
  );
};

WeatherMessage.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number
};

export default WeatherMessage;