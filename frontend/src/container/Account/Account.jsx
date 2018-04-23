import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'
import * as Api from '../../api_utils/api_accounts'

class Account extends Component {
    constructor(props){
        super(props);
        this.state = {userInfo: []}
        this.getUser = this.getUser.bind(this);
      
    }

    componentWillMount(){
        this.getUser("pablosdesk@gmail.com");
    }


    render() {
        return (
            <Grid.Column width={13} textAlign="center">
                <Grid.Row>{/* This is the Header*/}
                    <HeaderWithIcon 
                        icon="settings"
                        title="Account Settings"
                        subtitle="Manage your account settings and details" />
                </Grid.Row>
                <Grid.Row>
                    <Header as="h2">
                        Name: {this.state.userInfo}
                        <br/>
                        Email:
                    </Header>
                </Grid.Row>
            </Grid.Column>
        );

    }

    getUser(email) {
        Api.findAccount(email).then(
            response => console.log(response.statusText)
        ).catch(error => console.log(error));
    }

}

export default Account;