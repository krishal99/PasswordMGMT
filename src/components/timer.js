import React from 'react';
import Clock from 'react-live-clock';
import './timer.css';

export class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sec: 5,
            min: 0,
            started: false
        }
        this.startTimer = this.startTimer.bind(this)
    }

    tick() {
        if (this.state.sec > 0 && this.state.min >= 0) {
            this.setState({
                sec: this.state.sec - 1
            })

            if (this.state.sec < 0) {
                this.setState({
                    sec: 59,
                    min: this.state.min - 1
                })
            }
        }
    }

    startTimer() {
        if (this.state.started == false) {
            var clock = setInterval(this.tick.bind(this), 1000)
        }

        this.setState({
            started: true
        })
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
