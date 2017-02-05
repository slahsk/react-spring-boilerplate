/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
// import $ from "jquery";
// import Sidebar from '../Sidebar';

const logo = require('./logo.png');
export default class Header extends React.Component {
  render(){
    return (
        <div id="wrapper" className="content">
            <Navbar fluid={true}  style={ {margin: 0} }>
              <Brand>
                <span>
                  <img src={logo} alt="Start React" title="Start React" />
                  <span>&nbsp;SB Admin React - </span>
                  <a href="http://startreact.com/" title="Start React" rel="home">StartReact.com</a>
                  <button type="button" className="navbar-toggle" style={{position: 'absolute', right: 0, top: 0}}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </span>
              </Brand>
              <ul className="nav navbar-top-links navbar-right">
                <NavDropdown bsClass="dropdown" title={<span><i className="fa fa-envelope fa-fw"></i></span>} id="navDropdown1">
                  <MenuItem style={ {width: 300} } eventKey="1">
                    <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
                    <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">
                    <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="3">
                    <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4" className="text-center">
                    <strong>Read All Messages</strong> <i className="fa fa-angle-right"></i>
                  </MenuItem>
                </NavDropdown>
              </ul>
            </Navbar>
        </div>
      );
  }
}
