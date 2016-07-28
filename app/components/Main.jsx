import React, { Component, PropTypes } from 'react';
import WeatherNav from './WeatherNav';


class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div>
        <WeatherNav/>
        {this.props.children}
      </div>
    )

  }
}

  export default Main;