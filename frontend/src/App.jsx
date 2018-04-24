// Import react global packages
// Import react global packages
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Import Pages
import Dashboard from './container/Dashboard/Dashboard'
import Home from './container/Home/Home'


// Import API
import * as Api from './api_utils/api_accounts'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {loggedIn: false};
        this.checkLogin = this.checkLogin.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        
    }
    render(){
        return(
            <Route path="/" render={this.checkLogin} />
        );
    }

    checkLogin() {
        if (this.state.loggedIn) {
            return <Dashboard/>;
        }
        else {
            return <Home handleLogIn={this.handleLogIn}/>;
        }
    }

    handleLogIn(email){
        //this.setState({loggedIn: true});
        Api.findAccount(email).then(
            response => console.log(response.statusText)
        ).catch(error => console.log(error));
    }

}

export default App;