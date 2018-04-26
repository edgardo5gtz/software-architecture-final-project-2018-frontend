import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class SignUp extends Component {
    constructor(props){
        super(props);

         // State
        this.state = {email:""}

        // Handlers
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return (
            <Form id="signUp" size={this.props.size} onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Field width={this.props.width}
                        label="Name"
                        control="input"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleChange} />
                </Form.Group>
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

    handleSubmit(event) {
        event.preventDefault();
        const {name, email} = this.state;
        this.props.handleSignUp(name, email);
        
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
}

export default SignUp;