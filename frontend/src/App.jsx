// Import react global packages
// Import react global packages
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Import Pages
import Dashboard from './container/Dashboard/Dashboard'
import Home from './container/Home/Home'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {loggedIn: false};
        this.checkLogin = this.checkLogin.bind(this);
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
            return <Home/>;
        }
    }

}

export default App;