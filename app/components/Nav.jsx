import React, { PropTypes } from 'react';
import {Link, IndexLink} from 'react-router';


function Nav(props, context) {
  return (
    <div>
      <IndexLink to="/" activeClassName="active">Weather</IndexLink>
      <Link to="/about" activeClassName="active">About</Link>
      <Link to="/examples" activeClassName="active">Examples</Link>
    </div>
  );
}

export default Nav;
