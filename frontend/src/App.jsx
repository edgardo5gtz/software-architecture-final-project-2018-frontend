// Import react global packages
// Import react global packages
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Import Pages
import Dashboard from './container/Dashboard/Dashboard'
import Home from './container/Home/Home'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {loggedIn: true};
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

    handleLogIn(){
        //this.setState({loggedIn: true});
        console.log("state reaches home!");
    }

}

export default App;