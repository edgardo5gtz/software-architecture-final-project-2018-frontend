import React from 'react'
import { Card, Button, Form, Input, Select, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const HabitsList = function(props){
    return(
        <div>
            <Card.Group>
                {props.userHabits.map((item) => {
                    return (
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
                                    <Button basic color='green' itemID={item.id} onClick={props.handleCardDo}>Do</Button>

                                    <Button basic color='blue' itemID={item.id} onClick={props.handleCardEdit}>
                                        <Link to={`${props.match.url}/${item.id}`}> Edit </Link>
                                    </Button>

                                    <Button basic color='red' itemID={item.id} onClick={props.handleCardDelete}>Delete</Button>
                                </div>
                            </Card.Content>
                        </Card>
                    );
                })}
            </Card.Group>
            <Modal size='tiny' className="modal-margin-top" trigger={<Button id="add-button"
                size="huge"
                floated="right"
                icon="plus"
                circular={true}></Button>}>
                <Modal.Header>Create a habit</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form onSubmit={props.triggerSubmit}>
                            <Form.Group>
                                <Form.Field width={12}
                                    control={Input}
                                    label='Title'
                                    onChange={props.handleTitleChange}
                                    placeholder='title' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Field width={12}
                                    control={Select}
                                    label='Difficulty'
                                    onChange={props.handleDifficultyChange}
                                    options={props.difficultyOptions} placeholder='Medium' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Field width={12}
                                    control={Select}
                                    label='Type'
                                    options={props.typeOptions}
                                    onChange={props.handleTypeChange}
                                    placeholder='Bad' />
                            </Form.Group>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={props.triggerSubmit} > Create </Button>
                </Modal.Actions>
            </Modal>
        </div>
        
    );
}

export default HabitsList

/*
<Card.Group>
    {this.state.userHabits.map((item) => {
        return (
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
</Card.Group>*/