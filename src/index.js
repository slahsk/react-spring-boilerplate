
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import App from './components/App';
import counterApp from './reducers';


// import DevTools from './reduxDevtools/DevTools';

import { Router, Route, browserHistory} from 'react-router';
import test from './components/test';
import Table from './routes/table/Table';



const store = createStore(counterApp);
const appElement = document.getElementById('app');



ReactDOM.render(
    <Provider store = {store}>
      <Router history={browserHistory} >
         <Route path="/" component={App}>
            <Route path="dashboard" component={test} title="dashboard"/>
            <Route path="table" component={Table} title="table"/>
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
