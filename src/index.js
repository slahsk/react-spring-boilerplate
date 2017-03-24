
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import App from './components/App';
import counterApp from './reducers';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';


import Table from './routes/table/Table';
import Forms from './routes/forms/Forms';
import PanelWells from './routes/ui/PanelWells'
import Buttons from './routes/ui/Buttons'

// import DevTools from './reduxDevtools/DevTools';




const store = createStore(counterApp);
const appElement = document.getElementById('app');



ReactDOM.render(
  <Provider store = {store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <IndexRoute component={Table} />
        <Route path="dashboard" component={Table} title="dashboard"/>
        <Route path="table" component={Table} title="table"/>
        <Route path="forms" component={Forms} title="forms"/>
        <Route path="ui">
          <Route path="panels" component={PanelWells} title="panelWells"/>
          <Route path="buttons" component={Buttons} title="buttons"/>


        </Route>
      </Route>
    </Router>
  </Provider>,
  appElement
);
