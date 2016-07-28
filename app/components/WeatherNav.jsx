import React, {Component, PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';


class WeatherNav extends Component {
  constructor(props, context) {
    super(props, context);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit = (event) => {
    debugger;
    event.preventDefault();
    alert('here');
  }

// <Col sm={3} md={3} pullRight>
// <form onSubmit={this.onSearch}>
// <input type="search" placeholder="Search Weather"/>
// <button type="submit">Get Weather</button>
// </form>
// </Col>


  render() {
    return (

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Weather
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>

          <IndexLinkContainer to="/" activeClassName="active"
                              activeStyle={{ fontWeight: 'bold' }}><NavItem>Weather</NavItem></IndexLinkContainer>
          <LinkContainer to="/about" activeClassName="active"
                         activeStyle={{ fontWeight: 'bold' }}><NavItem>About</NavItem></LinkContainer>
          <LinkContainer to="/examples" activeClassName="active"
                         activeStyle={{ fontWeight: 'bold' }}><NavItem>Examples</NavItem></LinkContainer>

        </Nav>
        <Nav  pullRight={true}>

          <NavItem>
            <form inline onSubmit={this.onFormSubmit} >

              <FormControl type="text" bgSize="small" placeholder="Search Weather"/>

              <Button type="submit">Get Weather</Button>

            </form>
            </NavItem>
      </Nav>
      </Navbar >

    );
  }
}

export default WeatherNav;
