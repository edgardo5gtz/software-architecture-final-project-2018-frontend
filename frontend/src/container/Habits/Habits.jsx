import React, { Component } from 'react'
import { Grid, Divider, Card, Button, Container, Pagination, Modal, Header, Image, Form, Input, Select } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'
import * as Api from '../../api_utils/api_habits'

const difficultyOptions = [
    { key: 'E', text: 'Easy', value: 'easy'},
    { key: 'M', text: 'Medium', value: 'medium' },
    { key: 'H', text: 'Hard', value: 'hard' }
]

const typeOptions = [
    { key: 'G', text: 'Good', value: 'good' },
    { key: 'B', text: 'Bad', value: 'bad' },
    { key: 'BB', text: 'Both', value: 'both' }
]

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
                <Grid.Row className="marginTop marginBottom">
                    <Pagination totalPages={5} value={0}/>
                </Grid.Row>
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
                <Modal size='tiny' className="modal-margin-top" trigger={<Button id="add-button" 
                                        size="huge" 
                                        floated="right" 
                                        icon="plus" 
                                        circular={true}></Button>}>
                    <Modal.Header>Create a habit</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form>
                                <Form.Group>
                                    <Form.Field width={12} control={Input} label='Title' placeholder='First name' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Field width={12} control={Select} label='Difficulty' options={difficultyOptions} placeholder='Medium' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Field width={12} control={Select} label='Type' options={typeOptions} placeholder='Bad' />
                                </Form.Group>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button> Create </Button>
                    </Modal.Actions>
                </Modal>
            </Grid.Column>
        );
    }
}

export default Habits;