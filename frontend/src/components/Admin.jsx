import React, { Component } from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'
import Navbar from '../container/Navbar/Navbar';

class Admin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid>
                <Grid.Column width={3}> {/* This is the Sidebar*/}
                    <Navbar/>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Admin;