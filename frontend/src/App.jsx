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

        // State 
        this.state = {loggedIn: false, userAccount: ""};
        // Functions
        this.checkLogin = this.checkLogin.bind(this);
        // Handlers
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        
    }
    render(){
        return(
            <Route path="/" render={this.checkLogin} />
        );
    }

    checkLogin() {
        if (this.state.loggedIn) {
            return <Dashboard userAccount={this.state.userAccount}/>;
        }
        else {
            return <Home handleLogIn={this.handleLogIn}
                         handleSignUp={this.handleSignUp}/>;
        }
    }

    handleLogIn(email){
        //this.setState({loggedIn: true});
        Api.findAccount(email).then(
            response => { 
                if(response.status === 200){
                    this.setState({loggedIn: true, userAccount: email});
                }
            }).catch(error => console.log(error));
    }

    handleSignUp(name, email) {
        //this.setState({loggedIn: true});
        Api.registerAccount(name, email).then(
            response => {
                if (response.status === 200) {
                    this.setState({ loggedIn: true, userAccount: email });
                }
            }).catch(error => console.log(error));
    }

}

export default App;