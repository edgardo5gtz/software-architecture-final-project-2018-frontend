import React, {Component} from 'react'
import { Form, Button } from 'semantic-ui-react'

class LogIn extends Component {
    constructor(props){
        super(props);
        // State
        this.state = {email:""}

        // Handlers
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return(
            <Form id="logIn" size={this.props.size} onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Field width={this.props.width} 
                                label="Email" 
                                control="input" 
                                name="email"
                                placeholder="something@otherthing.com"
                                onChange={this.handleChange}/>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.handleLogIn(this.state.email);
    }

    handleChange(event){
        this.setState({ email : event.target.value});
    }
}

export default LogIn;