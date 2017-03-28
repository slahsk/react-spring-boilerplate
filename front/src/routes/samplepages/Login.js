
import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import styles from './Login.css';


class Login extends React.Component{
  render(){
    return(
      <div className="col-md-4 col-md-offset-4">
        <div className="text-center">
          <h1 className="login-brand-text">SB Admin React</h1>
          <h3 className="text-muted">Created by <a href="http://startreact.com">StartReact.com</a> team</h3>
        </div>

        <Panel header={<h3>Please Sign In</h3>} className="login-panel">

          <form role="form">
            <fieldset>
              <div className="form-group">
                <FormControl
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="name"
                />
              </div>

              <div className="form-group">
                <FormControl
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>
              <Checkbox label="Remember Me" > Remember Me </Checkbox>
              <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
            </fieldset>
          </form>

        </Panel>

      </div>
    );
  }
}

export default CSSModules(Login, styles, {allowMultiple: true});
