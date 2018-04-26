// Import react global packages
import React, { Component } from 'react'
import { Grid, Header, Button, Container, Icon } from 'semantic-ui-react'

// Import Components
import SignUp from '../../components/SignUp/SignUp'
import LogIn from '../../components/LogIn/LogIn'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {loggingIn: false,
                      signingUp: false, 
                      signedUp: false
                      // loggedIn state comes from parent props
                    };
        
        // Render Components
        this.renderLogIn = this.renderLogIn.bind(this);
        this.renderSignUp = this.renderSignUp.bind(this);

        // Handle Sign Up and Log In comes from parents
        
        
    }

    render() {
        return (
            <Container id="homePage">
                <Grid>
                    <Grid.Row id="homeContent">
                        <Grid.Column floated="right" width={3}>
                            <Button basic color='yellow' content='Log In'  onClick={this.renderLogIn}/>
                            <Button basic color='orange' content='Sign Up'  onClick={this.renderSignUp}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign="middle" centered>
                        <Header id="homeHeader" as="h1" textAlign="center">
                            Home page
                                    <Header.Subheader>
                                Catchy phrase all your dreams come true blablabla
                                    </Header.Subheader>
                        </Header>
                    </Grid.Row>
                </Grid>
               {this.renderSelectedForm()}
            </Container>
        );
    }

    renderSelectedForm(){
        if(this.state.loggingIn){
            return <LogIn size="large" width={10} handleLogIn={this.props.handleLogIn}/>
        }else if(this.state.signingUp){
            return <SignUp size="large" width={10} handleSignUp={this.props.handleSignUp}/>
        }else{
            return <Icon name='trophy' size='massive' id="homeIcon"/>
        }
    }

    renderLogIn(){
        this.setState({loggingIn: true, signingUp: false});
    }

    renderSignUp(){
        this.setState({ loggingIn: false, signingUp: true });
    }
}
export default Home;