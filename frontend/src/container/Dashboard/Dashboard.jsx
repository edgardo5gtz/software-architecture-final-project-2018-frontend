// Import react global packages
// Import react global packages
import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'
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
            <Grid id="dashboard-grid">
                <Grid.Column width={3}> {/* This is the Sidebar*/}
                    <Navbar />
                </Grid.Column>
                {/* This is the Main Block*/}
                <Switch>
                    <Route path="/habits"
                        render={(props) => <Habits {...props} userAccount={this.props.userAccount} />} />/>
                            <Route path="/tasks" render={(props) => <Tasks {...props} userAccount={this.props.userAccount} />} />
                    <Route path="/report" render={(props) => <Report {...props} userAccount={this.props.userAccount} />} />
                    <Route path="/account"
                        render={(props) => <Account {...props} userAccount={this.props.userAccount} />} />
                    {/*404 page coming soon*/}
                    <Route path="/" render={() => <div>Not Found</div>} />
                </Switch>
            </Grid>
        
        );
    }


}

export default Dashboard;