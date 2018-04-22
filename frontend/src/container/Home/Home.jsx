// Import react global packages
// Import react global packages
import React, { Component } from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column floated="right" width={5}>
                        <Button content='Log In' primary />
                        <Button content='Sign Up' secondary />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row verticalAlign="middle" centered>
                    <Grid.Column>
                        <Header as="h1" textAlign="center">
                            Home page
                            <Header.Subheader>
                                Catchy phrase all your dreams come true blablabla
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
export default Home;