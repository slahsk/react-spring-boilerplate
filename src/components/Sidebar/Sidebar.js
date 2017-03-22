import React, { Component } from 'react';


class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
        <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
           <div className="sidebar-nav navbar-collapse collapse">
             <ul className="nav in" id="side-menu">
               <li className="sidebar-search">
                 <div className="input-group custom-search-form">
                   <input type="text" className="form-control" placeholder="Search..." />
                   <span className="input-group-btn">
                     <button className="btn btn-default" type="button">
                       <i className="fa fa-search" />
                     </button>
                   </span>
                 </div>
               </li>

               <li>

                  <a href="" onClick={(e) => { e.preventDefault(); }} >
                   <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
                 </a>
               </li>

               <li>
                 <a
                   href=""
                   onClick={(e) => {
                     e.preventDefault();
                     this.setState({ chartsElementsCollapsed: !this.state.chartsElementsCollapsed });
                     return false;
                   }}
                 >
                   <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Charts
                   <span className="fa arrow" />
                 </a>
                 <ul>
                   <li>
                     <a href="" onClick={(e) => { e.preventDefault(); }} >
                       FlotCharts
                     </a>
                   </li>
                   <li>
                     <a
                       href=""
                       onClick={(e) => { e.preventDefault();}}
                     >
                       Morrisjs Charts
                     </a>
                   </li>
                 </ul>
               </li>


               <li>
                 <a href="" onClick={(e) => { e.preventDefault(); }} >
                   <i className="fa fa-table fa-fw" /> &nbsp;Tables
                 </a>
               </li>

               <li>
                 <a href="" onClick={(e) => { e.preventDefault(); }} >
                   <i className="fa fa-table fa-fw" /> &nbsp;Forms
                 </a>
               </li>

               <li>
                 <a
                   href=""
                   onClick={(e) => {
                     e.preventDefault();
                     this.setState({ uiElementsCollapsed: !this.state.uiElementsCollapsed,
                   }); return false;
                   }}
                 >
                   <i className="fa fa-edit fa-fw" /> UI Elements<span className="fa arrow" />
                 </a>

                 <ul>
                   <li>
                     <a href="" onClick={(e) => { e.preventDefault();  }} >
                       Panels And Wells
                     </a>
                   </li>
                   <li>
                     <a href="" onClick={(e) => { e.preventDefault();  }} >
                       Buttons
                     </a>
                   </li>
                   <li>
                     <a
                       href=""
                       onClick={(e) => { e.preventDefault();  }}
                     >
                       Notification
                     </a>
                   </li>
                   <li>
                     <a href="" onClick={(e) => { e.preventDefault();  }} >
                       Typography
                     </a>
                   </li>
                   <li>
                     <a href="" onClick={(e) => { e.preventDefault();  }} >
                       Icons
                     </a>
                   </li>
                   <li>
                     <a href="" onClick={(e) => { e.preventDefault();  }} >
                       Grid
                     </a>
                   </li>
                 </ul>
               </li>

               <li>
                 <a
                   href=""
                   onClick={(e) => {
                     e.preventDefault();
                     this.setState({
                       multiLevelDropdownCollapsed: !this.state.multiLevelDropdownCollapsed,
                     });
                     return false;
                   }}
                 >
                   <i className="fa fa-sitemap fa-fw" />
                   &nbsp;Multi-Level Dropdown
                   <span className="fa arrow" />
                 </a>
                 <ul>
                   <li>
                     <a href="" onClick={(e) => { e.preventDefault(); }}>Second Level Item</a>
                   </li>
                   <li>
                     <a href="" onClick={(e) => { e.preventDefault(); }}>Second Level Item</a>
                   </li>
                   <li>
                     <a
                       href=""
                       onClick={(e) => {
                         e.preventDefault();
                         this.setState({
                           thirdLevelDropdownCollapsed: !this.state.thirdLevelDropdownCollapsed,
                         });
                         return false;
                       }}
                     >
                       Third Level<span className="fa arrow" />
                     </a>
                     <ul>
                       <li>
                         <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                       </li>
                       <li>
                         <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                       </li>
                       <li>
                         <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                       </li>
                       <li>
                         <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                       </li>
                     </ul>
                   </li>
                 </ul>
               </li>

               <li>
                 <a
                   href=""
                   onClick={(e) => {
                     e.preventDefault();
                     this.setState({
                       samplePagesCollapsed: !this.state.samplePagesCollapsed,
                     });
                     return false;
                   }}
                 >
                   <i className="fa fa-files-o fa-fw" />
                   &nbsp;Sample Pages
                   <span className="fa arrow" />
                 </a>
                 <ul>
                   <li>
                     <a href="" onClick={(e) => { e.preventDefault();  }} >
                       Blank
                     </a>
                   </li>
                   <li>
                     <a href="" onClick={(e) => { e.preventDefault();  }} >
                       Login
                     </a>
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


export default Sidebar;
