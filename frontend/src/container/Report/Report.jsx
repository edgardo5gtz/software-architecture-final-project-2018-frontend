import React, { Component } from 'react'
import { Grid, Divider, Table } from 'semantic-ui-react';
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'
import _ from 'lodash'
import * as Api_report from '../../api_utils/api_report'
import * as Api_tasks from '../../api_utils/api_tasks'
import * as Api_habits from '../../api_utils/api_habits'
class Report extends Component {
    constructor(props){
        super(props);
        this.state = {
            todayTasks:[],
            overdueTasks:[],
            goodHabits:[],
            badHabits:[]
        }
    }
    componentWillMount(){
        var todayTasks = [];
        var overdueTasks = [];
        var goodHabits = [];
        var badHabits = [];

        Api_tasks.getUserTasks(
            this.props.userAccount
        ).then(
            response =>{
                todayTasks = response.data;//_.filter(response.data, {title}); FILTER DUE_DATE
                overdueTasks = [];//_.filter(response.data) FILTER OVERDUE_DATE 
                this.setState(prevState =>({
                        ...prevState,
                        todayTasks,
                        overdueTasks
                    })
                )
            }
        );

        Api_habits.getUserHabits(
            this.props.userAccount
        ).then(
            response => {
                goodHabits = _.filter(response.data, {kind: "good"}); 
                badHabits = _.filter(response.data, { kind: "bad" }); 
                this.setState(prevState => ({
                    ...prevState,
                    goodHabits,
                    badHabits
                })
                )
            }
        )
    }
    render() {
        return (
            <Grid.Column width={13} textAlign="center">
                <Grid.Row className="marginTop">{/* This is the Header*/}
                    <HeaderWithIcon
                        icon="line graph"
                        title="Report"
                        subtitle="This page shows the report of all your habits" />
                </Grid.Row>
                <Divider />
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Tasks due today</Table.HeaderCell>
                            <Table.HeaderCell>Tasks overdue</Table.HeaderCell>
                            <Table.HeaderCell>Good Habit</Table.HeaderCell>
                            <Table.HeaderCell>Bad Habits</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <ul>
                                    {this.state.todayTasks.map(item => {
                                        return (
                                            <li key={item.id}>{item.title}</li>
                                        );
                                    })}
                                </ul> 
                            </Table.Cell>
                            <Table.Cell>
                                <ul>
                                    {this.state.overdueTasks.map(item => {
                                        return (
                                            <li key={item.id}>{item.title}</li>
                                        );
                                    })}
                                </ul> 
                            </Table.Cell>
                            <Table.Cell>
                                <ul>
                                    {this.state.goodHabits.map(item => {
                                        return (
                                            <li key={item.id}>{item.name}</li>
                                        );
                                    })}
                                </ul> 
                            </Table.Cell>
                            <Table.Cell>
                                <ul>
                                    {this.state.badHabits.map(item => {
                                        return (
                                            <li key={item.id}>{item.name}</li>
                                        );
                                    })}
                                </ul> 
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Grid.Column>
        );
    }
}

export default Report;