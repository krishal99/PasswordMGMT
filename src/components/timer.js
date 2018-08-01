/*global chrome*/
import React from 'react';
import { Button, Segment, Popup } from 'semantic-ui-react'
import './timer.css'
import TextField from '@material-ui/core/TextField';

export class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: '00:00:00',
            initMin: 0,
            initSec: 0,
            sec: 0,
            min: 0,
            started: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.setTimer = this.setTimer.bind(this)
        //this.tick = this.tick.bind(this)
    }

/*     tick() {
            if (this.state.sec > 0 && this.state.min >= 0) {
                this.setState({
                    sec: this.state.sec - 1
                })
            } else if (this.state.sec == 0 && this.state.min != 0) {
                this.setState({
                    sec: 59,
                    min: this.state.min - 1
                })
            } else {
                this.setState({
                    started: false
                })
            }
    } */

    handleChange(event) {
        this.setState({
            time: event.currentTarget.value
        })
    }

    setTimer(event) {
        event.preventDefault()

        var newTime = this.state.time.split(':')
        console.log('The time has been set to ' + this.state.time)
        this.setState({
            intitSec: newTime[2] > 0 ? Number(newTime[2]) : 0,
            initMin: Number(newTime[1]) + Number(newTime[0]) * 60,
            sec: newTime[2] > 0 ? Number(newTime[2]) : 0,
            min: Number(newTime[1]) + Number(newTime[0]) * 60
        })
    }

    startTimer() {
        if (this.state.started == false) {
            chrome.runtime.sendMessage(
                {content: this.state.sec + (this.state.min * 60), type: "start"},
                function (response) {
                    console.log(response);
                }
            );
            //this.clock = setInterval(this.tick, 1000)
        }
        
        this.setState({
            started: true
        })
    }

    stopTimer() {
        //clearInterval(this.clock)
        this.setState({
            started: false
        })
        chrome.runtime.sendMessage('stop');
    }

    resetTimer() {
        this.stopTimer
        this.setState({
            sec: this.state.initSec,
            min: this.state.initMin
        })
    }

/*     componentDidUpdate() {
        chrome.storage.local.get("started", function(items) {
            if (!chrome.runtime.error) {
                if (items.started == false) {
                    this.stopTimer
                }
            }
        }.bind(this));
    } */

    componentWillMount() {
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                if (request.type == 'time') {
                    console.log(request.content);
                    this.setState({
                        sec: request.content % 60,
                        min: Math.floor(request.content / 60)
                    })
                }

                if (request == 'stopping') {
                    console.log('stopping...')
                    this.setState({
                        started: false
                    })
                    //clearInterval(this.clock)
                }

                if (request == 'starting') {
                    console.log('starting...')
                    this.setState({
                        started: true
                    })
                }
            }.bind(this)
        );

        chrome.runtime.sendMessage(
            "init",
            function (response) {
                if (response) {
                    chrome.storage.local.get(['time', 'running'], function(items) {
                        if (!chrome.runtime.error) {
                            console.log(items.time);
                            console.log('Is running: ' + items.running)
                            this.setState({
                                sec: items.time % 60,
                                min: Math.floor(items.time / 60),
                                started: items.running
                            })
                            //this.clock = setInterval(this.tick, 1000);
                        }
                    }.bind(this));
                }
            }.bind(this));
    }

    render() {
        
        const { started } = this.state;

        return(
        <Segment className='box' raised>
            <div 
            className='clock'
            style={this.state.min < 100 ? {fontSize: '70px'} : this.state.min < 1000 ? {fontSize: '60px'} : {fontSize: '50px'}}
            >
            {this.state.min}:{(this.state.sec < 10) ? ('0' + this.state.sec) : this.state.sec}
            </div>
            <Button 
                onClick={this.state.started ? this.stopTimer :this.startTimer} 
                className='start'
                content={started ? 'Pause' : 'Start'}
                negative={started}
                positive={!started}
                />
            <Popup
                trigger={<Button
                    basic color='grey' 
                    content='Reset' 
                    className='reset' 
                    onClick={this.resetTimer}
                    />}
                content={
                <div className='popup'>
                    <Button 
                    primary size='small' 
                    className='set'
                    content='Set'
                    onClick={this.setTimer}
                    />
                    <TextField
                    id="time"
                    type="time"
                    defaultValue={this.state.time}
                    autoFocus={true}
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: false,
                    }}
                    inputProps={{
                        step: 1,
                    }}
                    />
                </div>
                }
                on='click'
                position='bottom right'
            />
        </Segment>
        );
    }
}