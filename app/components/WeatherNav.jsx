import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Menu, MenuItem } from 'react-foundation-components/lib/menu';
import { TopBar, TopBarContent, TopBarItem, TopBarTitle } from 'react-foundation-components/lib/top-bar';

//https://github.com/aruberto/react-foundation-components
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
    return (<TopBar>
      <TopBarTitle>
        <Menu>
          <MenuItem horzital text>Weather</MenuItem>
        </Menu>
      </TopBarTitle>
             </TopBar>
      //  <Nav>

      //     <IndexLinkContainer to="/" activeClassName="active"
      //                         activeStyle={{ fontWeight: 'bold' }}><NavItem>Weather</NavItem></IndexLinkContainer>
      //     <LinkContainer to="/about" activeClassName="active"
      //                    activeStyle={{ fontWeight: 'bold' }}><NavItem>About</NavItem></LinkContainer>
      //     <LinkContainer to="/examples" activeClassName="active"
      //                    activeStyle={{ fontWeight: 'bold' }}><NavItem>Examples</NavItem></LinkContainer>

      //   </Nav>
      //   <Nav  pullRight={true}>

      //     <NavItem>
      //       <form inline onSubmit={this.onFormSubmit} >

      //         <FormControl type="text" bgSize="small" placeholder="Search Weather"/>

      //         <Button type="submit">Get Weather</Button>

      //       </form>
      //       </NavItem>
      // </Nav>
      // </Navbar >

    );
  }
}

export default WeatherNav;
