import React, { Component } from 'react';
import { Button, Form, Divider, Header } from 'semantic-ui-react';
import '../core/App.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'n',
      password: 'a'
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
      <div>
        <Divider horizontal>
          <Header as='h4'>
            Login
          </Header>
        </Divider>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' name='username' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type='password' name='password' onChange={this.handleChange} />
          </Form.Field>
          <Button primary type='submit' onClick={() => this.props.login(this.state.username, this.state.password)}>Login</Button>
          <div className='registerHere' onClick={this.props.register} >Don't have an account? <a>Register here.</a></div>
        </Form>
        </div>
    );
  }
}

export default Login;
