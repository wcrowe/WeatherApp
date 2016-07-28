import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';

 const rootEl = document.getElementById('app');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
   <App />,
  rootEl
);
