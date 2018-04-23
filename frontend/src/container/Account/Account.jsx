import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'

class Account extends Component {
    render() {
        return (
            <Grid.Column width={13} textAlign="center">
                <Grid.Row>{/* This is the Header*/}
                    <HeaderWithIcon 
                        icon="settings"
                        title="Account Settings"
                        subtitle="Manage your account settings and details" />
                </Grid.Row>
            </Grid.Column>
        );
    }
}

export default Account;