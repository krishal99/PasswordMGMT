import React from 'react';
import './todo.css';

export class Todo extends React.Component {


    render() {
        return (
            <table className='todolist'>
                <tr><div className='header'>Notepad</div></tr>
                <tr className='footer'>
                    <textarea className='textbox' />
                </tr>
            </table>
        );
    }
}