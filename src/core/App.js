import React, { Component } from 'react';
import './App.css';
import { DayDate } from '../components/day-date';
import { Time } from '../components/time';
import Helmet from 'react-helmet';
import { Timer } from '../components/timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet bodyAttributes={{style: 'background-color : #9198A0'}}/>
        <DayDate/>
        <Time/>
        <Timer/>
      </div>
    );
  }
}

export default App;
