import React from 'react';
import Clock from 'react-live-clock';
import './timer.css';
//import InlineEdit from 'react-edit-inline';

export class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initSec: 10,
            initMin: 0,
            sec: 5,
            min: 0,
            started: false
        }

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.tick = this.tick.bind(this)
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
        else {
            this.setState({
                started: false
            })
        }
    }

    startTimer() {
        if (this.state.started == false) {
            this.clock = setInterval(this.tick, 1000)
        }

        this.setState({
            started: true
        })
    }

    stopTimer() {
        clearInterval(this.clock)
        this.setState({
            started: false
        })
    }

    resetTimer() {
        clearInterval(this.clock)
        this.setState({
            sec: this.state.initSec,
            min: this.state.initMin,
            started: false
        })
    }

    render() {
        return (
            <div className='container'>
                <span className='clock'>{(this.state.min < 10) ? ('0' + this.state.min) : this.state.min}:{(this.state.sec < 10) ? ('0' + this.state.sec) : this.state.sec}</span>
                <div className={this.state.started ? 'stop' : 'start'} onClick={this.state.started ? this.stopTimer :this.startTimer}><span className='vcenter'>{this.state.started ? 'Stop' : 'Start'}</span></div>
                <div className="reset" onClick={this.resetTimer}><span className="vcenter">Reset</span></div>
            </div>
        );
    }
}
