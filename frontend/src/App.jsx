// Import react global packages
// Import react global packages
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router-dom'

// Import Pages
import Navbar from './container/Navbar/Navbar'
import Habits from './container/Habits/Habits'
import Tasks from './container/Tasks/Tasks'
import Report from './container/Report/Report'
import Account from './container/Account/Account'
class App extends Component {
    render(){
        return(
            <Grid>
                <Grid.Column width={4}> {/* This is the Sidebar*/}
                    <Navbar/>
                </Grid.Column>

                <Grid.Column width={12} textAlign="center">  {/* This is the Main Block*/}
                    <Route path="/(habits|)" component={Habits} />
                    <Route path="/tasks" component={Tasks} />
                    <Route path="/report" component={Report} />
                    <Route path="/account" component={Account} />
                </Grid.Column>
            </Grid>
        );
    }
}

export default App;