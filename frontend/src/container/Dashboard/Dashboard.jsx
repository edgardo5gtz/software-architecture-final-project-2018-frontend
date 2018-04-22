// Import react global packages
// Import react global packages
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'

// Import Pages
import Navbar from '../Navbar/Navbar'
import Habits from '../Habits/Habits'
import Tasks from '../Tasks/Tasks'
import Report from '../Report/Report'
import Account from '../Account/Account'
class Dashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={4}> {/* This is the Sidebar*/}
                    <Navbar />
                </Grid.Column>
                <Grid.Column width={12} textAlign="center">  {/* This is the Main Block*/}
                    <Switch>
                        <Route path="/habits" component={Habits} />
                        <Route path="/tasks" component={Tasks} />
                        <Route path="/report" component={Report} />
                        <Route path="/account" component={Account} />
                        {/*404 page coming soon*/}
                        <Route path="/" render={()=><div>Not Found</div>} />
                    </Switch>
                </Grid.Column>
            </Grid>
        );
    }


}

export default Dashboard;