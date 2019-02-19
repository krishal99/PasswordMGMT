import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import '../core/App.css';

class Register extends Component {
  render() {
    return (
      <div className="App">

          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder='Username'/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' type='password'/>
            </Form.Field>
            <Form.Field>
              <label>Confirm password</label>
              <input placeholder='Confirm' type='password'/>
            </Form.Field>
            <Button primary type='submit'>Register</Button>
            <Button onClick={this.props.back}>Back</Button>
          </Form>

      </div>
    );
  }
}

export default Register;
