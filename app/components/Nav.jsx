import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {TopBar, TopBarContent, TopBarItem, TopBarTitle} from 'react-foundation-components/lib/top-bar';
import 'react-foundation-components/lib/_typography.scss';
import {Menu, MenuItem} from 'react-foundation-components/lib/menu';
import { ShowForScreenSize, HideForScreenSize } from 'react-foundation-components/lib/visibility';

function Nav(props, context) {
  return (
    <TopBar>
      <div>
        <TopBarTitle>
          <Menu>
            <MenuItem text>Weather</MenuItem>
          </Menu>
        </TopBarTitle>
        <Menu>
          <MenuItem>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
          </MenuItem>
          <MenuItem>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
          </MenuItem>
        </Menu>
      </div>
    </TopBar>
  );
}

export default Nav;
