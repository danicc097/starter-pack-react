import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const styles = {
        outline: '0',
        borderWidth:'0 0 1px',
        borderColor: 'black',
}

const SignUp = () => {
    const [sign, setSign] = useState({
        name: null,
        email: null,
        password: null,
        confirmPassword: null
    })

    const handleChange = e => {
        const { value, name } = e.target
        setSign({...sign, [name]: value})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (sign.password !== sign.confirmPassword) {
            alert("Password doesn't match")
            setSign({...sign, 
                password: null,
                confirmPassword: null
            })
        } else {
            // try {
            //     const { user } = await auth.createUserWithEmailAndPassword(
            //         sign.email,
            //         sign.password
            //     )
            //     await createUserProfileDocument(user, {displayName: sign.name})
            //     setSign({
            //         name: null,
            //         email: null,
            //         password: null,
            //         confirmPassword: null
            //     })
            // } catch (err) {
            //     console.error(err)
            // }
        }
    }

    return (
        <><div className="mt-5">
            <h2 className="mb-4">Register by email</h2>
           <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-5 mt-5">
                    <Input style={styles} className="w-75" type="name" name="name" onChange={handleChange} value={sign.name ? sign.name : ""} placeholder="name..." />
                </FormGroup>
                <FormGroup className="mb-5">
                    <Input style={styles} className="w-75" type="email" name="email" onChange={handleChange} value={sign.email ? sign.email : ""} placeholder="email..." />
                </FormGroup>
                <FormGroup className="mb-5">
                    <Input style={styles} className="w-75" type="password" name="password" onChange={handleChange} value={sign.password ? sign.password : ""} placeholder="password..." />
                </FormGroup>
                <FormGroup className="mb-5">
                    <Input style={styles} className="w-75" type="password" name="confirmPassword" onChange={handleChange} value={sign.confirmPassword ? sign.confirmPassword : ""} placeholder="confirm your password..." />
                </FormGroup>
                <Button className="px-5 pt-3 pb-3 m-1" type='submit' outline color='dark'>Sign Up</Button>
           </Form>
        </div>
        </>
    )
}

export default SignUp