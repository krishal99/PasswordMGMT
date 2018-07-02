import React from 'react';
import Clock from 'react-live-clock';
import './clock.css';

export class DayDate extends React.Component {
    render() {
      return (
        <div className='daydate'>
            <Clock className='day' format={'dddd'} />
            <Clock className='date' format={'MMMM Do'} />
        </div>
      );
    }
  }