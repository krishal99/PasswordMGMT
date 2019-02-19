import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import '../core/App.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onLogin() {
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render() {
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' name='username' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type='password' name='password' onChange={this.handleChange} />
          </Form.Field>
          <Button primary type='submit' onClick={this.submit}>Login</Button>
          <p onClick={this.props.register} >Register</p>
        </Form>
      </Segment>
    );
  }
}

export default Login;
