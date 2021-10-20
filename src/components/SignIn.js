import React from "react";
import { Button, FormControl, Input } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useInput from "../Hooks/useInput.js";


const styles = {
        outline: '0',
        borderWidth:'0 0 1px',
        borderColor: 'black',
}

const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required().min(7),
  }).required();

const SignIn = () => {

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const email = useInput("", "email", "email...", "w-75", styles)
    const password = useInput("", "password", "password...", "w-75", styles)

    const onSubmit = data => {
        console.log(data)
    };

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     email.reset()
    //     // Request
    //     console.log(email + " " + password)
    // }
    return (
        <>
        <div className="mt-5">
            <h2 className="mb-4">I already have an email</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

                <FormControl className="mb-5 mt-5">
                    <Controller
                        {...email.bindHookForm}
                        control={control}
                        render={({ field }) => <Input {...field} {...email.bindInput} />}
                    />
                    {errors.email?.type === 'required' && <span>Email est requis</span>}
                </FormControl>

                <FormControl className="mb-5">
                    <Controller
                             {...password.bindHookForm}
                            control={control}
                            render={({ field }) => <Input {...field} {...password.bindInput} />}
                        />
                    {errors.password?.type === 'required' && <span>Mot de passe requis</span>}
                    {errors.password?.type === 'min' && <span>Trop petit</span>}
                </FormControl>

                <Button className="px-5 pt-3 pb-3 m-1" type='submit' variant="outlined">Sign In</Button>
                <Button className="px-5 pt-3 pb-3" color='primary'>Sign In with Google</Button>
            </form>
        </div>
        </>
    )
}

export default SignIn