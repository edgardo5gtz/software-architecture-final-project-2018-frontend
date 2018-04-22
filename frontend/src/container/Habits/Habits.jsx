import React, { Component } from 'react'
import { Grid, Container, Divider, Card } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'
const items = [
    {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    },
    {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
    },
    {
        header: 'Project Report - June',
        description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
        meta: 'ROI: 27%',
    }];
class Habits extends Component {
   
    render(){
        return(
            <Container>
                <Grid.Row>{/* This is the Header*/}
                    <HeaderWithIcon
                        title="Habits"
                        subtitle="Manage a list of all your habits" />
                </Grid.Row>
                <Divider/>
                <Grid.Row>
                    <Card.Group items={items}>

                    </Card.Group>
                </Grid.Row>
            </Container>
        );
    }
}

export default Habits;