import React, { Component } from 'react';
import { Button, Form, Divider, Header } from 'semantic-ui-react';
import '../core/App.css';

class Register extends Component {
  render() {
    return (
      <div>
        <Divider horizontal>
          <Header as='h4'>
            Register
          </Header>
        </Divider>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type='password' />
          </Form.Field>
          <Form.Field>
            <label>Confirm password</label>
            <input placeholder='Confirm' type='password' />
          </Form.Field>
          <Button primary type='submit'>Register</Button>
          <div className='registerHere' onClick={this.props.back} >Already have an account? <a>Login here.</a></div>
        </Form>

      </div>
    );
  }
}

export default Register;
