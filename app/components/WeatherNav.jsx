import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

// https://github.com/aruberto/react-foundation-components
class WeatherNav extends Component {
  constructor(props, context) {
    super(props, context);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit = (event) => {
    // debugger;
    event.preventDefault();
  };


// Indexroute and IndexLink
// https://github.com/reactjs/react-router/blob/master/docs/guides/IndexRoutes.md

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Weather App" />
          <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
            <MenuItem primaryText="Weather" />
          </IndexLink>
          <Link to="about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
            <MenuItem primaryText="About" />
          </Link>
          <Link to="examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
            <MenuItem primaryText="Examples" />
          </Link>
        </ToolbarGroup>
        <ToolbarGroup>
          <Formsy.Form onValidSubmit={this.onFormSubmit}>
            <FormsyText
              name="topBarSearch"
              validationError="Required"
              required
              hintText="Search Weather" type="text"
            />
            <RaisedButton type="submit" label="Get Weather" primary={ true } />
          </Formsy.Form>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default WeatherNav;
