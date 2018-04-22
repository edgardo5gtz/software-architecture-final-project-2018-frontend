import React from 'react'
import { Form, Button } from 'semantic-ui-react'

function SignUp(props) {
    return (
        <Form size={props.size} onSubmit={props.handleSignUpSubmit}>
            <Form.Group>
                <Form.Field width={props.width} label="Email Account" control="input" placeholder="something@otherthing.com"/>
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

export default SignUp;