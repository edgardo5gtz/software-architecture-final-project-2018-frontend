import React, { Component } from 'react'
import { Card, Button, Segment, Form, Select, Input, TextArea } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import * as Api from '../../api_utils/api_tasks'
import _ from 'lodash'


class TaskDetails extends Component {
    constructor(props) {
        super(props);
        const updateTask = _.filter(this.props.tasksList, (item) => item.id == this.props.match.params.id)[0];
        this.state = { updateTask, redirect: false }
        console.log(this.state.updateTask);
        // Handlers
        this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
        this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
        this.handleDueDateUpdate = this.handleDueDateUpdate.bind(this);
        this.handleReminderDaysUpdate = this.handleReminderDaysUpdate.bind(this);
        this.handleReminderTimeUpdate = this.handleReminderTimeUpdate.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    render() {
        return (
            <Segment>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Field width={12}
                            control={Input}
                            label='Title'
                            onChange={this.handleTitleUpdate}
                            placeholder={this.state.updateTask.title} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field width={12}
                            control={TextArea}
                            label='Description'
                            onChange={this.handleDescriptionUpdate}
                            placeholder={this.state.updateTask.description} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field width={12}
                            control={Input}
                            label='Due Date'
                            onChange={this.handleDueDateUpdate}
                            placeholder={this.state.updateTask.due_date} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field width={12}
                            control={Input}
                            label='Reminder Days'
                            onChange={this.handleReminderDaysUpdate}
                            placeholder={this.state.updateTask.reminder_days} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field width={12}
                            control={Input}
                            label='Reminder Time'
                            onChange={this.handleReminderTimeUpdate}
                            placeholder={this.state.updateTask.reminder_time} />
                    </Form.Group>
                    <Button color='blue'>Edit</Button>
                </Form>
                {this.state.redirect ?
                    (
                        this.props.handleRedirect(),
                        <Redirect to='/tasks' />
                    )
                    : (null)
                }
            </Segment>
        );
    }


    handleTitleUpdate(event, result) {
        this.setState(prevState => ({
            updateTask: {
                ...prevState.updateTask,
                title: result.value
            }
        }));
    }

    handleDescriptionUpdate(event, result) {
        this.setState(prevState => ({
            updateTask: {
                ...prevState.updateTask,
                description: result.value
            }
        }));
    }

    handleDueDateUpdate(event, result) {
        this.setState(prevState => ({
            updateTask: {
                ...prevState.updateTask,
                due_date: result.value
            }
        }));
    }

    handleReminderDaysUpdate(event, result) {
        this.setState(prevState => ({
            updateTask: {
                ...prevState.updateTask,
                reminder_days: result.value
            }
        }));
    }

    handleReminderTimeUpdate(event, result) {
        this.setState(prevState => ({
            updateTask: {
                ...prevState.updateTask,
                reminder_time: result.value
            }
        }));
    }

    handleFormSubmit() {
        const title = this.state.updateTask.title;
        const description = this.state.updateTask.description;
        const due_date = this.state.updateTask.due_date
        const reminder_days = this.state.updateTask.reminder_days;
        const reminder_time = this.state.updateTask.reminder_time;
        const account = this.props.userAccount;
        const id = this.props.match.params.id;
        const task = { title, description, due_date, reminder_days, reminder_time, account }
        console.log(task);
        Api.putUserTasks(id, task).then(
            response => { this.setState({ redirect: true }); }
        );
    }

}

export default TaskDetails;