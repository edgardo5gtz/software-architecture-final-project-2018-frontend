import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'

class Account extends Component {
    render() {
        return (
            <Grid.Row>{/* This is the Header*/}
                <HeaderWithIcon 
                    title="Account Settings"
                    subtitle="Manage your account settings and details" />
            </Grid.Row>
        );
    }
}

export default Account;