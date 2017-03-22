
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import App from './components/App';
import counterApp from './reducers';


// import DevTools from './reduxDevtools/DevTools';

 import { Router, Route, browserHistory} from 'react-router';


import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/sb-admin.css';
import test from './components/test';

const store = createStore(counterApp);
const appElement = document.getElementById('app');



ReactDOM.render(
    <Provider store = {store}>
      <Router history={browserHistory} >
         <Route path="/" component={App}>
            <Route path="dashboard" component={test} title="About Us"/>
         </Route>
      </Router>
    </Provider>,
    appElement
);

// function component(){
//   var element = document.createElement("div");
//
//   element.innerHTML = "Hello World";
//
//   return element;
// }
//
// document.body.appendChild(component());
