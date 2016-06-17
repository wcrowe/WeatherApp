import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import 'react-foundation-components/lib/_typography.scss';
import { Menu, MenuItem } from 'react-foundation-components/lib/menu';
import { ShowForScreenSize, HideForScreenSize } from 'react-foundation-components/lib/visibility';
import { TopBar, TopBarContent, TopBarItem, TopBarTitle } from 'react-foundation-components/lib/top-bar';
import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldInline,
  FormFieldButton
} from 'react-foundation-components/lib/forms';

class Nav extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>

        <TopBar>

          <TopBarTitle>
            <Menu>
              <MenuItem text>Weather</MenuItem>
            </Menu>
          </TopBarTitle>
          <TopBarContent>
            <TopBarItem position="left">
              <Menu>
                <MenuItem>
                  <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Weather</IndexLink>
                </MenuItem>
                <MenuItem>
                  <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
                </MenuItem>
              </Menu>
            </TopBarItem>
            <TopBarItem position="right">
              <form onSubmit={this.onSearch}>
                <Menu>
                  <MenuItem>
                    <FormField>
                      <FormFieldInline>
                        <FormFieldInput type="search" placeholder="Search Weather" />
                        <FormFieldButton type="submit">Get Weather</FormFieldButton>
                      </FormFieldInline>
                    </FormField>
                  </MenuItem>
                </Menu>
              </form>
            </TopBarItem>
          </TopBarContent>
        </TopBar>
      </div>
    );
  }
}

export default Nav;
