import React from "react";
import { Button, FormControl, Input } from '@mui/material';
import useInput from "../Hooks/useInput.js";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useRouter from "../Hooks/useRouter.js";
import { useMutation } from "react-query";
import Loader from '../components/Loader'
import * as api from '../firebase/api'

const styles = {
    outline: '0',
    borderWidth:'0 0 1px',
    borderColor: 'black',
}

const SignUp = () => {

    const router = useRouter()

    const {mutate, isLoading, isError} = useMutation(api.SignupWithMailAndPassword, {
        onSuccess: () => {
            router.push('/')
        }
    })

    const schema = yup.object({
        name: yup.string().min(3).required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(7),
        confirmPassword: yup.string().required().min(7)
            .oneOf([yup.ref('password'), null], 'Mot de passe différent.'),
      }).required();


    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const name = useInput("", "name", "text", "Nom...", "w-75", styles)
    const email = useInput("", "email", "email", "email...", "w-75", styles)
    const password = useInput("", "password", "password", "Password...", "w-75", styles)
    const confirmPassword = useInput("", "confirmPassword", "password", "Confirm...", "w-75", styles)

    const onSubmit = data => mutate(data);

    return (
        <><div className="mt-5">
            <h2 className="mb-4">Register by email</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

                <FormControl className="mb-5 mt-5">
                    <Controller
                        {...name.bindHookForm}
                        control={control}
                        render={({ field }) => <Input {...field} {...name.bindInput} />}
                    />
                {errors.name?.type === 'required' && <span>Nom requis</span>}
                </FormControl>

                <FormControl className="mb-5 mt-5">
                    <Controller
                        {...email.bindHookForm}
                        control={control}
                        render={({ field }) => <Input {...field} {...email.bindInput} />}
                    />
                {errors.email?.type === 'required' && <span>Email est requis</span>}
                {errors.email?.type === 'email' && <span>Email est fausse</span>}
                </FormControl>

                <FormControl className="mb-5 mt-5">
                    <Controller
                        {...password.bindHookForm}
                        control={control}
                        render={({ field }) => <Input {...field} {...password.bindInput} />}
                    />
                {errors.password?.type === 'required' && <span>Mot de passe requis</span>}
                {errors.password?.type === 'min' && <span>Trop petit</span>}
                </FormControl>

                <FormControl className="mb-5 mt-5">
                    <Controller
                        {...confirmPassword.bindHookForm}
                        control={control}
                        render={({ field }) => <Input {...field} {...confirmPassword.bindInput} />}
                    />
                {errors.confirmPassword?.type === 'required' && <span>Mot de passe requis</span>}
                {errors.confirmPassword?.type === 'min' && <span>Trop petit</span>}
                {errors.confirmPassword?.type === 'oneOf' && <span>Mot de passe différent</span>}
                </FormControl>

                <Button className="px-5 pt-3 pb-3 m-1" type='submit' disabled={isLoading} variant="outlined">{isLoading ? <Loader /> : "SignUp"}</Button>
                {isError && <span>Error is occurring, please retry.</span>}
            </form>
        </div>
        </>
    )
}

export default SignUp