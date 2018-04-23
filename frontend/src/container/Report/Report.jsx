import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'

class Report extends Component {
    render() {
        return (
            <Grid.Column width={13} textAlign="center">
                <Grid.Row>{/* This is the Header*/}
                    <HeaderWithIcon
                        icon="line graph"
                        title="Report"
                        subtitle="This page shows the report of all your habits" />
                </Grid.Row>
            </Grid.Column>
        );
    }
}

export default Report;