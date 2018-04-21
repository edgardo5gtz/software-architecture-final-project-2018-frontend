import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'

class Tasks extends Component {
    render() {
        return (
            <Grid.Row>{/* This is the Header*/}
                <HeaderWithIcon
                    title="Tasks"
                    subtitle="Manage your list of upcoming tasks" />
            </Grid.Row>
        );
    }
}

export default Tasks;