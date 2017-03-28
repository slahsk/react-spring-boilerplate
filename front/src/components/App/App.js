/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import Header from '../Header/Header';
import CSSModules from 'react-css-modules';
import styles from './App.css';
// import Footer from '../Footer';

class App extends React.Component {


  render(){
    return(<div>
      <Header />
    <div styleName="page-wrapper" className="page-wrapper">
        {this.props.children}
      </div>
      {/* <DevTools /> */}


      </div>

    );
  }


}

export default CSSModules(App, styles,{allowMultiple : true});
