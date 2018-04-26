import React, { Component } from 'react'
import { Card, Button, Segment, Form, Select, Input } from 'semantic-ui-react';
import _ from 'lodash'


class HabitsDetails extends Component {
    constructor(props){
        super(props);
        this.habit = _.filter(this.props.habits, (item) => item.id == this.props.match.params.id)[0];
        console.log(this.habit);
        // Handlers
        this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
        this.handleDifficultyUpdate = this.handleDifficultyUpdate.bind(this);
        this.handleTypeUpdate = this.handleTypeUpdate.bind(this);
    }

    render(){
        return (
            <Segment>
                <Form>
                    <Form.Group>
                        <Form.Field width={12}
                            control={Input}
                            label='Title'
                            onChange={this.handleTitleUpdate}
                            value = {this.habit.name}
                            placeholder='title' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field width={12}
                            control={Select}
                            label='Difficulty'
                            onChange={this.handleDifficultyUpdate}
                            value={this.habit.difficulty}
                            options={this.props.difficultyOptions} placeholder='Medium' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field width={12}
                            control={Select}
                            label='Type'
                            options={this.props.typeOptions}
                            value={this.habit.kind}
                            onChange={this.handleTypeUpdate}
                            placeholder='Bad' />
                    </Form.Group>
                </Form>
            </Segment>
        );
    }


    handleTitleUpdate() {

    }

    handleDifficultyUpdate(){

    }

    handleTypeUpdate(){

    }
    
}

export default HabitsDetails;