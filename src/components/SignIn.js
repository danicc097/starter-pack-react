import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import useInput from "../Hooks/useInput.js";

const styles = {
        outline: '0',
        borderWidth:'0 0 1px',
        borderColor: 'black',
}

const SignIn = () => {
    const email = useInput("", "email", "email...", "w-75")
    const password = useInput("", "password", "password...", "w-75")

    const handleSubmit = async e => {
        e.preventDefault();
        email.reset()
        // Request
        console.log(email + " " + password)
    }

    return (
        <><div className="mt-5">
            <h2 className="mb-4">I already have an email</h2>
            <span>Sign In with your email and password</span>
           <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-5 mt-5">
                    <Input style={styles} {...email.bind} />
                </FormGroup>
                <FormGroup className="mb-5">
                    <Input style={styles} {...password.bind} />
                </FormGroup>
                <Button className="px-5 pt-3 pb-3 m-1" type='submit' outline color='dark'>Sign In</Button>
                <Button className="px-5 pt-3 pb-3" color='primary'>Sign In with Google</Button>
           </Form>
        </div>
        </>
    )
}

export default SignIn