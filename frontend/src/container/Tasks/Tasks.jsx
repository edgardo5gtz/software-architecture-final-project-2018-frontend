import React, { Component } from 'react'
import { Grid, Pagination, Divider } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'
import { Route } from 'react-router-dom'
import _ from 'lodash'
import * as Api from '../../api_utils/api_tasks'
import TaskList from './TaskList'
import TaskDetails from './TaskDetails'
class Tasks extends Component {
    constructor(props){
        super(props);
        this.state = {taskList: [],
            renderList: true,
            newTask: {
                title: "",
                description: "",
                due_date: "",
                reminder_days:"",
                reminder_time: ""
            }}

        //Routing
        this.renderListOrDetails = this.renderListOrDetails.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
        
        // Handlers
        this.handleModalFormSubmit = this.handleModalFormSubmit.bind(this);
        this.triggerSubmit = this.triggerSubmit.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleReminderDaysChange = this.handleReminderDaysChange.bind(this);
        this.handleReminderTimeChange = this.handleReminderTimeChange.bind(this);
        this.handleCardDo = this.handleCardDo.bind(this);
        this.handleCardDelete = this.handleCardDelete.bind(this);
        this.handleCardEdit = this.handleCardEdit.bind(this);
        this.onBackButtonEvent = this.onBackButtonEvent.bind(this);

        window.onpopstate = this.onBackButtonEvent;
    }

    componentWillMount(){
        Api.getUserTasks(this.props.userAccount).then(
            response => {this.setState({taskList: response.data}); console.log(this.state)}
        );
    }

    componentWillUnmount() {
        window.onpopstate = null;
    }

    render() {
        return (
            <Grid.Column width={13} textAlign="center">
                <Grid.Row className="marginTop">{/* This is the Header*/}
                    <HeaderWithIcon
                        icon="tasks"
                        title="Tasks"
                        subtitle="Manage your list of upcoming tasks" />
                </Grid.Row>
                <Divider />
                <Grid.Row className="marginTop marginBottom">
                </Grid.Row>
                <Grid.Row>
                    {this.renderListOrDetails()}
                </Grid.Row>
            </Grid.Column>
        );
    }

    renderListOrDetails() {
        if (this.state.renderList) {
            // TODO: TO MANY PROPERTIES
            return <TaskList match={this.props.match}
                taskList={this.state.taskList}
                handleCardDo={this.handleCardDo}
                handleCardDelete={this.handleCardDelete}
                handleCardEdit={this.handleCardEdit}
                handleDescriptionChange={this.handleDescriptionChange}
                handleTitleChange={this.handleTitleChange}
                handleDateChange={this.handleDateChange}
                handleReminderDaysChange={this.handleReminderDaysChange}
                handleReminderTimeChange = {this.handleReminderTimeChange}
                triggerSubmit={this.triggerSubmit}
            />
        } else {
            return <Route path={`${this.props.match.url}/:id`}
                render={(props) => <TaskDetails {...props}
                    handleRedirect={this.handleRedirect}
                    userAccount={this.props.userAccount}
                    tasksList={this.state.taskList} />} />
        }
    }

    handleCardDelete(event, result) {
        const id = result.itemID;
        Api.deleteUserTasks(id).then((response) => {
            var taskList = this.state.taskList;
            taskList = _.remove(taskList, (item) => { return result.itemID === item.id });
            this.setState(taskList);
        }
        );
    }

    handleRedirect() {
        this.setState({ renderList: true });
    }

    handleCardDo(event, result) {
        console.log(result);
    }

    handleCardEdit(event, result) {
        this.setState({ renderList: false });
    }

    // NOT THE BEST WAY NEED TO FIND ANOTHER BUT SHORT IN TIME
    handleTitleChange(event, result) {
        this.setState(prevState => ({
            newTask: {
                ...prevState.newTask,
                title: result.value
            }
        }));
    }

    handleDescriptionChange(event, result) {
        this.setState(prevState => ({
            newTask: {
                ...prevState.newTask,
                description: result.value
            }
        }));
    }

    handleDateChange(event, result) {
        console.log(result);
        this.setState(prevState => ({
            newTask: {
                ...prevState.newTask,
                due_date: result.value
            }
        }));
    }

    handleReminderDaysChange(event, result) {
        this.setState(prevState => ({
            newTask: {
                ...prevState.newTask,
                reminder_days: result.value
            }
        }));
    }

    handleReminderTimeChange(event, result) {
        this.setState(prevState => ({
            newTask: {
                ...prevState.newTask,
                reminder_time: result.value
            }
        }));
    }

    handleModalFormSubmit(event) {
        // CRYING FROM THE INSIDE
        const title = this.state.newTask.title;
        const description = this.state.newTask.description;
        const due_date = this.state.newTask.due_date
        const reminder_days = this.state.newTask.reminder_days
        const reminder_time = this.state.newTask.reminder_time
        const account = this.props.userAccount;


        const task = { title, description, due_date, reminder_days, reminder_time, account }

        Api.postUserTasks(task).then(
            Api.getUserTasks(
                this.props.userAccount
            ).then(
                response => this.setState({ taskList: response.data })
            ).catch(
                error => console.log(error)
            )
        );


    }

    onBackButtonEvent(event) {
        this.setState({ renderList: true })
    }

    triggerSubmit(event) {
        this.handleModalFormSubmit(event);
    }
}

export default Tasks;