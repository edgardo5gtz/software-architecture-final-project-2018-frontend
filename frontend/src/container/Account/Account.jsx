import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'

class Account extends Component {
    constructor(props){
        super(props);
      
    }

    render() {
        return (
            <Grid.Column width={13} textAlign="center">
                <Grid.Row className="marginTop">{/* This is the Header*/}
                    <HeaderWithIcon 
                        icon="settings"
                        title="Account Settings"
                        subtitle="Manage your account settings and details" />
                </Grid.Row>
                <Grid.Row>
                    <Header as="h2">
                        Account: {this.props.userAccount}
                    </Header>
                </Grid.Row>
            </Grid.Column>
        );

    }

}

export default Account;