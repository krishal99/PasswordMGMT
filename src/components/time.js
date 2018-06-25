import React from 'react';
import Clock from 'react-live-clock';
import './clock.css';

export class Time extends React.Component {
    render() {
        return(
                <Clock className='time' ticking={true} format='HH:mm'/>
        );
    }
}