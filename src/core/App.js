import React, { Component } from 'react';
import './App.css';
import { DayDate } from '../components/day-date';
import { Time } from '../components/time';
import { Todo } from '../components/todo';
import Helmet from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet bodyAttributes={{style: 'background-color : #BBBBBB'}}/>
        <DayDate/>
        <Time/>
        <Todo/>
      </div>
    );
  }
}

export default App;
