import React, { Component } from 'react'
import { Card, Button, Segment, Form, Select, Input } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import * as Api from '../../api_utils/api_habits'
import _ from 'lodash'


class HabitsDetails extends Component {
    constructor(props){
        super(props);
        const updateHabit = _.filter(this.props.habits, (item) => item.id == this.props.match.params.id)[0];
        this.state = {updateHabit, redirect: false}
        console.log(this.state.updateHabit);
        // Handlers
        this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
        this.handleDifficultyUpdate = this.handleDifficultyUpdate.bind(this);
        this.handleTypeUpdate = this.handleTypeUpdate.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    render(){
        return (
            <Segment>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Field width={12}
                            control={Input}
                            label='Title'
                            onChange={this.handleTitleUpdate}
                            placeholder={this.state.updateHabit.name} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field width={12}
                            control={Select}
                            label='Difficulty'
                            onChange={this.handleDifficultyUpdate}
                            options={this.props.difficultyOptions} placeholder={this.state.updateHabit.difficulty} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field width={12}
                            control={Select}
                            label='Type'
                            options={this.props.typeOptions}
                            onChange={ this.handleTypeUpdate }
                            placeholder= {this.state.updateHabit.kind} />
                    </Form.Group>
                    <Button color='blue'>Edit</Button>
                </Form>
                {this.state.redirect ? 
                    (
                        this.props.handleRedirect(),
                        <Redirect to='/habits'/>
                    ) 
                    : (null)
                }
            </Segment>
        );
    }


    handleTitleUpdate(event, result) {
        console.log(result);
        this.setState(prevState => ({
            updateHabit: {
                ...prevState.updateHabit,
                title: result.value
            }
        }));
    }

    handleDifficultyUpdate(event, result){
        this.setState(prevState => ({
            updateHabit: {
                ...prevState.updateHabit,
                difficulty: result.value
            }
        }));
    }

    handleTypeUpdate(event, result){
        this.setState(prevState => ({
            updateHabit: {
                ...prevState.updateHabit,
                type: result.value
            }
        }));
    }

    handleFormSubmit(){
        const name = this.state.updateHabit.title;
        const difficulty = this.state.updateHabit.difficulty;
        const kind = this.state.updateHabit.type
        const score = 0;
        const account = this.props.userAccount;
        const id = this.props.match.params.id;
        const habit = { name, difficulty, kind, score, account }
        console.log(habit);
        Api.putUserHabits(id, habit).then(
            response => {console.log(response);return }
        );
        this.setState({redirect: true});
    }
    
}

export default HabitsDetails;