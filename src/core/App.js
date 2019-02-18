import React, { Component } from 'react';
import Login from '../views/login'
import Register from '../views/register';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'login'
    }

    this.handleRegister = this.handleRegister.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.setState({
      view: 'login'
    });
  }

  handleRegister() {
    console.log('This works');
    this.setState({
      view: 'register'
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.view == 'login' ? <Login register={this.handleRegister} /> : null}
        {this.state.view == 'register' ? <Register back={this.handleBack} /> : null}
      </div>
    );
  }
}

export default App;
