import React from 'react'
import { Form, Button } from 'semantic-ui-react'

function LogIn(props){
    return(
        <Form size={props.size} onSubmit={props.handleLogInSubmit}>
            <Form.Group>
                <Form.Field width={props.width} label="Name" control="input" placeholder="Name"/>
            </Form.Group>
            <Form.Group>
                <Form.Field width={props.width} label="Email" control="input" placeholder="something@otherthing.com"/>
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

export default LogIn;