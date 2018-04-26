import React, { Component } from 'react'
import { Grid, Divider, Card, Button, Pagination, Modal, Form, Input, Select } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'
import * as Api from '../../api_utils/api_habits'
import _ from 'lodash'

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
        this.state = {
            userHabits: [],
            newHabit : {
                title:"", 
                difficulty:"",
                type:"",
            }
        }

        // Handlers
        this.handleModalFormSubmit = this.handleModalFormSubmit.bind(this);
        this.triggerSubmit = this.triggerSubmit.bind(this);
        this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCardDo = this.handleCardDo.bind(this);
        this.handleCardDelete = this.handleCardDelete.bind(this);
        this.handleCardEdit = this.handleCardEdit.bind(this);
   }
   
   componentWillMount(){
        Api.getUserHabits(
            this.props.userAccount
        ).then(
            response => this.setState({userHabits: response.data})
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
                        {this.state.userHabits.map((item) => {
                            return(
                                <Card key={item.id}>
                                    <Card.Content>
                                        <Card.Header>
                                            {item.name}
                                        </Card.Header>
                                        <Card.Meta>
                                        Score: {item.score}
                                        </Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui three buttons'>
                                            <Button basic color='green' itemID={item.id} onClick={this.handleCardDo}>Do</Button>
                                            <Button basic color='blue' itemID={item.id} onClick={this.handleCardEdit}>Edit</Button>
                                            <Button basic color='red' itemID={item.id} onClick={this.handleCardDelete}>Delete</Button>
                                        </div>
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
                                                placeholder='title' />
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

    handleCardDelete(event, result){
        const id = result.itemID;
        Api.deleteUserHabits(id).then((response)=>{
                var userHabits = this.state.userHabits;
                userHabits = _.remove(userHabits, (item) => { return result.itemID === item.id });
                this.setState(userHabits);
            }
        );
    }

    handleCardDo(event, result){
        console.log(result);
    }

    handleCardEdit(event, result){
        console.log(result);
    }
    
    // NOT THE BEST WAY NEED TO FIND ANOTHER BUT SHORT IN TIME
    handleTitleChange(event, result){
        this.setState(prevState => ({
            newHabit: {
                ...prevState.newHabit,
                title: result.value
            }
        }));
    }

    handleDifficultyChange(event, result){
        this.setState(prevState => ({
            newHabit: {
                ...prevState.newHabit,
                difficulty: result.value
            }
        }));
    }

    handleTypeChange(event, result){
        this.setState(prevState => ({
            newHabit: {
                ...prevState.newHabit,
                type: result.value
            }
        }));
    }

    handleModalFormSubmit(event){
        // CRYING FROM THE INSIDE
        const name = this.state.newHabit.title;
        const difficulty = this.state.newHabit.difficulty;
        const kind = this.state.newHabit.type
        const score = 0;
        const account = this.props.userAccount;
       
        const habit = {name, difficulty, kind, score, account}
        Api.postUserHabits(habit);
        
    }

    triggerSubmit(event){
        this.handleModalFormSubmit(event);
    }
}

export default Habits;