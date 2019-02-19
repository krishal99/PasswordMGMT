import React, { Component } from 'react';
import { Button, Form, Image, List } from 'semantic-ui-react';
import '../core/App.css';

class SiteLink extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <List.Item>
                <List.Content floated='right'>
                    <Button href={this.props.site.link}>Login</Button>
                </List.Content>
                <Image avatar src={this.props.site.link + '/favicon.ico'} />
                <List.Content>{this.props.site.name}</List.Content>
            </List.Item>
        );
    }
}

export default SiteLink;
