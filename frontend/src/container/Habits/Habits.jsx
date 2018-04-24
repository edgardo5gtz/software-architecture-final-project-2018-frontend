import React, { Component } from 'react'
import { Grid, Divider, Card } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'
import * as Api from '../../api_utils/api_habits'


class Habits extends Component {
   constructor(props){
        super(props);
        this.state = {habitsData : []}
   }
   
   componentWillMount(){
        Api.getUserHabits(
            this.props.userAccount
        ).then(
            response => this.setState({habitsData: response.data})
        ).catch(
            error => console.log(error)
        );
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
                    <Card.Group>
                        {this.state.habitsData.map((item, index) => {
                            console.log(item);
                            return(
                                <Card key={index}>
                                    <Card.Content>
                                        <Card.Header>
                                            {item.name}
                                        </Card.Header>
                                        <Card.Meta>
                                        Score: {item.score}
                                        </Card.Meta>
                                    </Card.Content>
                                </Card>
                            );
                        })}
                    </Card.Group>
                </Grid.Row>
            </Grid.Column>
        );
    }
}

export default Habits;