import React, { Component, PropTypes } from 'react';
import Nav from './Nav';


class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    )

  }
}

  export default Main;