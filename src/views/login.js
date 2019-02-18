import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import '../core/App.css';

class Login extends Component {
    handleRegister() {
        console.log('This works better');
    }

  render() {
    return (
      <div className="App">
        <Segment raised className='login'>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder='Username'/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' type='password'/>
            </Form.Field>
            <Button primary type='submit'>Login</Button>
            <Button onClick={this.props.register} >Register</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default Login;
