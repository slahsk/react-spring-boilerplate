import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './Sidebar.css';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uiElementsCollapsed: true,
            chartsElementsCollapsed: true,
            multiLevelDropdownCollapsed: true,
            thirdLevelDropdownCollapsed: true,
            samplePagesCollapsed: true
        };
    }

    render() {

        return (
            <div className="navbar-default" styleName="sidebar" style={{
                marginLeft: '-20px'
            }} role="navigation">
                <div className="collapse navbar-collapse" styleName="sidebar-nav navbar-collapse">
                    <ul className="nav in" id="side-menu">
                        <li styleName="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <i className="fa fa-search"/>
                                    </button>
                                </span>
                            </div>
                        </li>

                        <li>
                            <Link to="/dashboard" activeClassName="">
                                <i className="fa fa-dashboard fa-fw"/>&nbsp;Dashboard
                            </Link>
                        </li>

                        <li styleName={classNames({
                            active: !this.state.chartsElementsCollapsed
                        })}>
                            <a href="" onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                    chartsElementsCollapsed: !this.state.chartsElementsCollapsed
                                });
                                return false;
                            }}>
                                <i className="fa fa-bar-chart-o fa-fw"/>
                                &nbsp;Charts
                                <span className="fa" styleName="fa arrow"/>
                            </a>
                            <ul className={classNames({'nav': true, collapse: this.state.chartsElementsCollapsed})} styleName="nav-second-level">
                                <li>
                                    <Link to="/chart/float">
                                      FlotCharts
                                    </Link>
                                </li>
                                <li>
                                  <Link to="/chart/morrisjs">
                                    Morrisjs Charts
                                  </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/table">
                                <i className="fa fa-table fa-fw"/>
                                &nbsp;Tables
                            </Link>
                        </li>

                        <li>
                            <Link to="/forms">
                                <i className="fa fa-table fa-fw"/>
                                &nbsp;Forms
                            </Link>
                        </li>

                        <li styleName={classNames({
                            active: !this.state.uiElementsCollapsed
                        })}>
                            <a href="" onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                    uiElementsCollapsed: !this.state.uiElementsCollapsed
                                });
                                return false;
                            }}>
                                <i className="fa fa-edit fa-fw"/>
                                UI Elements
                                <span className="fa" styleName="fa arrow"/>
                            </a>

                            <ul className={classNames({'nav': true, collapse: this.state.uiElementsCollapsed})} styleName="nav-second-level">
                                <li>
                                  <Link to="/ui/panels">
                                    Panels And Wells
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/ui/buttons">
                                    Buttons
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/ui/notification">
                                    Notification
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/ui/typography">
                                    Typography
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/ui/icons">
                                    Icons
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/ui/grid">
                                    Grid
                                  </Link>
                                </li>
                            </ul>
                        </li>

                        <li styleName={classNames({
                            active: !this.state.multiLevelDropdownCollapsed
                        })}>
                            <a href="" onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                    multiLevelDropdownCollapsed: !this.state.multiLevelDropdownCollapsed
                                });
                                return false;
                            }}>
                                <i className="fa fa-sitemap fa-fw"/>
                                &nbsp;Multi-Level Dropdown
                                <span className="fa" styleName="fa arrow"/>
                            </a>
                            <ul className={classNames({'nav': true, collapse: this.state.multiLevelDropdownCollapsed})} styleName="nav-second-level">
                                <li>
                                    <Link to="/ml/second">
                                      Second Level Item
                                    </Link>
                                </li>

                                <li styleName={classNames({
                                    active: !this.state.thirdLevelDropdownCollapsed
                                })}>
                                    <a href="" onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({
                                            thirdLevelDropdownCollapsed: !this.state.thirdLevelDropdownCollapsed
                                        });
                                        return false;
                                    }}>
                                        Third Level<span className="fa" styleName="fa arrow"/>
                                    </a>
                                    <ul className={classNames({'nav': true, collapse: this.state.thirdLevelDropdownCollapsed})} styleName="nav-second-level">
                                        <li>
                                            <a>Third Level Item</a>
                                        </li>
                                        <li>
                                            <a>Third Level Item</a>
                                        </li>
                                        <li>
                                            <a>Third Level Item</a>
                                        </li>
                                        <li>
                                            <a>Third Level Item</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li styleName={classNames({
                            active: !this.state.samplePagesCollapsed
                        })}>
                            <a href="" onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                    samplePagesCollapsed: !this.state.samplePagesCollapsed
                                });
                                return false;
                            }}>
                                <i className="fa fa-files-o fa-fw"/>
                                &nbsp;Sample Pages
                                <span className="fa" styleName="fa arrow"/>
                            </a>
                            <ul className={classNames({'nav': true, collapse: this.state.samplePagesCollapsed})} styleName="nav-second-level">
                                <li>
                                  <Link to="/samplepages/blank">
                                    Blank
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/samplepages/login">
                                    Login
                                  </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="http://www.strapui.com/">Premium React Themes</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CSSModules(Sidebar, styles, {allowMultiple: true});
