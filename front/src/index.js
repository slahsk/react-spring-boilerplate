import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose } from 'redux';
import {Provider} from 'react-redux';
import App from './components/App/APP';
import reducers from './reducers';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { persistState } from 'redux-devtools';

import DevTools from 'components/App/DevTools';

import Table from './routes/table/Table';
import Forms from './routes/forms/Forms';
import PanelWells from './routes/ui/PanelWells';
import Buttons from './routes/ui/Buttons';
import Notification from './routes/ui/Notification';
import Typography from './routes/ui/Typography';
import Icons from './routes/ui/Icons';
import Grid from './routes/ui/Grid';
import Test from './routes/test/Test';

import Blank from './routes/samplepages/Blank';
import Login from './routes/samplepages/Login';


// import DevTools from './reduxDevtools/DevTools';


const appElement = document.getElementById('app');




const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

const store = createStore(reducers,enhancer);

ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory}>

        <Route path="/" component={App}>
            <IndexRoute component={Table}/>
            <Route path="dashboard" component={Table} title="dashboard"/>
            <Route path="table" component={Table} title="table"/>
            <Route path="forms" component={Forms} title="forms"/>
            <Route path="ui">
                <Route path="panels" component={PanelWells} title="panelWells"/>
                <Route path="buttons" component={Buttons} title="buttons"/>
                <Route path="notification" component={Notification} title="notification"/>
                <Route path="typography" component={Typography} title="typography"/>
                <Route path="icons" component={Icons} title="icons"/>
                <Route path="grid" component={Grid} title="gird"/>
            </Route>
            <Route path="samplepages">
                <Route path="blank" component={Blank} title="blank"/>
                <Route path="/login" component={Login} title="login"/>
            </Route>
            <Route path="test" component={Test} title="test"/>
        </Route>
    </Router>
</Provider>, appElement);
