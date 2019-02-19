import React, { Component } from 'react';
import { Button, Form, Image, List, Icon } from 'semantic-ui-react';
import SiteLink from '../components/website';
import '../core/App.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.comments = [
            { id: 1, name: 'YouTube', link: 'https://youtube.com' },
            { id: 2, name: 'Reddit', link: 'https://reddit.com' },
            { id: 3, name: 'Facebook', link: 'https://facebook.com' },
            { id: 4, name: 'Twitter', link: 'https://twitter.com' }
        ];
    }

    render() {
        return (
            <div>
                <Icon link name='log out' size='large' />
                <List divided verticalAlign='middle'>
                    {this.comments.map((item, i) => <SiteLink key={i} site={item} />)}
                </List>

            </div>
        );
    }
}

export default Main;
