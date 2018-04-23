import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'

class Tasks extends Component {
    render() {
        return (
            <Grid.Column width={13} textAlign="center">
                <Grid.Row>{/* This is the Header*/}
                    <HeaderWithIcon
                        icon="tasks"
                        title="Tasks"
                        subtitle="Manage your list of upcoming tasks" />
                </Grid.Row>
            </Grid.Column>
        );
    }
}

export default Tasks;