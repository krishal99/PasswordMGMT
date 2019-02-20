import React, { Component } from 'react';
import { Button, List, Icon, Divider } from 'semantic-ui-react';
import SiteLink from '../components/website';
import '../core/App.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            add: true
        }

        this.comments = [
            { id: 1, name: 'YouTube', link: 'https://youtube.com' },
            { id: 2, name: 'Reddit', link: 'https://reddit.com' },
            { id: 3, name: 'Facebook', link: 'https://facebook.com' },
            { id: 4, name: 'Twitter', link: 'https://twitter.com' }
        ];

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        this.setState({
            add: false
        });
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <Icon className='logout' link name='log out' size='large' onClick={this.props.logout} />
                    <Button icon className='addSite' size='tiny' color='teal' onClick={this.handleAdd}>
                        <Icon name='add' />
                    </Button>
                    <Divider />
                    <List divided verticalAlign='middle'>
                        {this.comments.map((item, i) => <SiteLink key={i} site={item} />)}
                    </List>
                </div>
            </div>
        );
    }
}

export default Main;
