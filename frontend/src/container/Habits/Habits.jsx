import React, { Component } from 'react'
import { Grid, Divider, Card } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'
import * as Api from '../../api_utils/api_habits'

const items = [
    {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    }
];
class Habits extends Component {
   constructor(props){
        super(props);
        this.state = {test1 : []}
        this.getHabits = this.getHabits.bind(this);
   }
    render(){
        return(
            <Grid.Column width={13} textAlign="center">
                <Grid.Row>{/* This is the Header*/}
                    <HeaderWithIcon
                        title="Habits"
                        icon="trophy"
                        subtitle="Manage a list of all your habits" />
                </Grid.Row>
                <Divider/>
                <Grid.Row>
                    <Card.Group items={items}>

                    </Card.Group>
                </Grid.Row>
                {this.getHabits()}
            </Grid.Column>
        );
    }

    getHabits(){
        console.log("hello")
        Api.getUserHabits().then(
            data => console.log(data)
        );
    }
}

export default Habits;