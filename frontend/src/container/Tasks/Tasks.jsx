import React, { Component } from 'react'
import { Grid, Pagination, Divider } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'
import * as Api from '../../api_utils/api_tasks'
import TaskList from './TaskList'
class Tasks extends Component {
    constructor(props){
        super(props);
        this.state = {taskList: []}
    }

    componentWillMount(){
        Api.getUserTasks(this.props.userAccount).then(
            response => {this.setState({taskList: response.data}); console.log(this.state)}
        );
    }

    render() {
        return (
            <Grid.Column width={13} textAlign="center">
                <Grid.Row>{/* This is the Header*/}
                    <HeaderWithIcon
                        icon="tasks"
                        title="Tasks"
                        subtitle="Manage your list of upcoming tasks" />
                </Grid.Row>
                <Divider />
                <Grid.Row className="marginTop marginBottom">
                    <Pagination totalPages={5} value={0} />
                </Grid.Row>
                <Grid.Row>
                    <TaskList taskList={this.state.taskList}
                              match={this.props.match}/>
                </Grid.Row>
            </Grid.Column>
        );
    }
}

export default Tasks;