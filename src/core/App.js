import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Login from '../views/login'
import Register from '../views/register';
import Main from '../views/main';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'login',
      loggedIn: false,
      test: 1
    }

    this.handleRegister = this.handleRegister.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleBack() {
    this.setState({
      view: 'login'
    });
  }

  handleRegister() {
    this.setState({
      view: 'register'
    });
  }

  handleLogin(username, password) {
    this.setState({
      view: 'main',
      LoggedIn: true
    });

    console.log('Username: ' + username);
    console.log('Password: ' + password);

    
    //var request = new XMLHttpRequest();
    //request.open('POST', 'https://my-proj-f3d70.firebaseio.com/', true);
    //request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    //request.send(username);
  }

  handleLogout() {
    this.setState({
      view: 'login',
      LoggedIn: false
    });
  }

  render() {
    return (
      <div className="App">
      <Segment>
        {this.state.view == 'login' ? <Login register={this.handleRegister} login={this.handleLogin} /> : null}
        {this.state.view == 'register' ? <Register back={this.handleBack} /> : null}
        {this.state.view == 'main' ? <Main logout={this.handleLogout} /> : null}
        </Segment>
      </div>
    );
  }
}

export default App;
