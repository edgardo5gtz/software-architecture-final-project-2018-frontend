import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'

class Habits extends Component {
    render(){
        return(
            <Grid.Row>{/* This is the Header*/}
                <HeaderWithIcon />
            </Grid.Row>
        );
    }
}

export default Habits;