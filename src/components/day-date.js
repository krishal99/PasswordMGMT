import React from 'react';
import Clock from 'react-live-clock';
import './clock.css';

export class DayDate extends React.Component {
    render() {
      return (
        <div className='daydate'>
            <Clock className='day' format={'dddd'} />
            <Clock className='date' format={'MMMM Do'} />
             {/*<div className={this.state.started ? 'stop' : 'start'} onClick={this.state.started ? this.stopTimer :this.startTimer}><span className='vcenter'>{this.state.started ? 'Stop' : 'Start'}</span></div>
                    <div className="reset" onClick={this.resetTimer}><span className="vcenter">Reset</span></div>*/}
        </div>
      );
    }
  }