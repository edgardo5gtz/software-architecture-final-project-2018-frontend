import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'

class Report extends Component {
    render() {
        return (
            <Grid.Row>{/* This is the Header*/}
                <HeaderWithIcon
                    title="Report"
                    subtitle="This page shows the report of all your habits" />
            </Grid.Row>
        );
    }
}

export default Report;