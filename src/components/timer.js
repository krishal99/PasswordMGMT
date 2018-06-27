import React from 'react';
import Clock from 'react-live-clock';
import './timer.css';

export class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sec: 0,
            min: 0
        }
        this.startTimer = this.startTimer.bind(this)
    }

    startTimer() {
        this.setState({
            sec: this.state.sec + 1
        })

        if (this.state.sec == 59) {
            this.setState({
                sec: 0,
                min: this.state.min + 1
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <span className='clock'>{(this.state.min < 10) ? ('0' + this.state.min) : this.state.min}:{(this.state.sec < 10) ? ('0' + this.state.sec) : this.state.sec}</span>
                <div className='start' onClick={this.startTimer}>Start</div>
            </div>
        );
    }
}
