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

        // Handlers
        this.handleModalFormSubmit = this.handleModalFormSubmit.bind(this);
        this.triggerSubmit = this.triggerSubmit.bind(this);
        this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
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
                            <Form onSubmit={this.triggerSubmit}>
                                <Form.Group>
                                    <Form.Field width={12} 
                                                control={Input} 
                                                label='Title' 
                                                onChange={this.handleTitleChange}
                                                placeholder='First name' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Field width={12} 
                                                control={Select} 
                                                label='Difficulty' 
                                                onChange={this.handleDifficultyChange}
                                                options={difficultyOptions} placeholder='Medium' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Field width={12} 
                                                control={Select} 
                                                label='Type' 
                                                options={typeOptions}
                                                onChange={this.handleTypeChange}
                                                placeholder='Bad' />
                                </Form.Group>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.triggerSubmit} > Create </Button>
                    </Modal.Actions>
                </Modal>
            </Grid.Column>
        );
    }

    handleTitleChange(event){
        console.log(event.target.value);
    }

    handleDifficultyChange(event, result){
        const {key, text, value} = result;
        console.log(result);
    }

    handleTypeChange(event){
        console.log(event.target.value);
    }

    handleModalFormSubmit(event){
        console.log("Click");
    }

    triggerSubmit(event){
        this.handleModalFormSubmit(event);
    }
}

export default Habits;