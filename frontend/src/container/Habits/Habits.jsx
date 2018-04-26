import React, { Component } from 'react'
import { Grid, Divider, Button, Pagination, Modal, Form, Input, Select } from 'semantic-ui-react';
import { Route, Redirect } from 'react-router-dom' 
import HeaderWithIcon from '../../components/Header/HeaderWithIcon'
import HabitsList from './HabitsList'
import HabitsDetail from './HabitsDetail'
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
            renderList: true,
            newHabit : {
                title:"", 
                difficulty:"",
                type:"",
            }
        }

        //Routing
       this.renderListOrDetails = this.renderListOrDetails.bind(this);
       this.handleRedirect = this.handleRedirect.bind(this);
        // Handlers
        this.handleModalFormSubmit = this.handleModalFormSubmit.bind(this);
        this.triggerSubmit = this.triggerSubmit.bind(this);
        this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCardDo = this.handleCardDo.bind(this);
        this.handleCardDelete = this.handleCardDelete.bind(this);
        this.handleCardEdit = this.handleCardEdit.bind(this);
        this.onBackButtonEvent = this.onBackButtonEvent.bind(this);

       window.onpopstate = this.onBackButtonEvent;
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

   componentWillUnmount(){
        window.onpopstate = null;
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
                    {this.renderListOrDetails()}
                </Grid.Row>
            </Grid.Column>
        );
    }

    renderListOrDetails(){
        if(this.state.renderList){
            // TODO: TO MANY PROPERTIES
            return <HabitsList  match = {this.props.match} 
                                userHabits={this.state.userHabits}
                                handleCardDo={this.handleCardDo}
                                handleCardDelete={this.handleCardDelete}
                                handleCardEdit={this.handleCardEdit} 
                                handleDifficultyChange = {this.handleDifficultyChange}
                                handleTitleChange={this.handleTitleChange}
                                handleTypeChange={this.handleTypeChange}
                                difficultyOptions = {difficultyOptions}
                                typeOptions={typeOptions}
                                triggerSubmit = {this.triggerSubmit}
                                />
        }else{
            return <Route path={`${this.props.match.url}/:id`} 
                render={(props) => <HabitsDetail {...props} 
                                            handleRedirect = {this.handleRedirect}
                                            userAccount={this.props.userAccount}
                                            habits = {this.state.userHabits}
                                            difficultyOptions={difficultyOptions}
                                            typeOptions={typeOptions}/>}/>
        }
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

    handleRedirect(){
        this.setState({renderList: true});
    }

    handleCardDo(event, result){
        console.log(result);
    }

    handleCardEdit(event, result){
        this.setState({renderList: false});
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
        Api.postUserHabits(habit).then(
            Api.getUserHabits(
                this.props.userAccount
            ).then(
                response => this.setState({ userHabits: response.data })
            ).catch(
                error => console.log(error)
            )
        );

        
    }

    onBackButtonEvent(event){
        this.setState({renderList: true})
    }

    triggerSubmit(event){
        this.handleModalFormSubmit(event);
    }
}

export default Habits;