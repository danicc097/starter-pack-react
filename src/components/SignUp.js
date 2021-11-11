import React from "react";
import { Button, FormControl, Input, Box } from '@mui/material';
import useInput from "../Hooks/useInput.js";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useRouter from "../Hooks/useRouter.js";
import { useMutation } from "react-query";
import Loader from '../components/Loader'
import * as api from '../firebase/api'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

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
        name: yup.string().required().min(3),
        email: yup.string().email().required(),
        password: yup.string().required().min(7),
        confirmPassword: yup.string().required().min(7)
            .oneOf([yup.ref('password'), null], 'Mot de passe différent.'),
      }).required();


    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const name = useInput("", "name", "text", "Name...", "w-100", styles)
    const email = useInput("", "email", "email", "Email...", "w-100", styles)
    const password = useInput("", "password", "password", "Password...", "w-100", styles)
    const confirmPassword = useInput("", "confirmPassword", "password", "Confirm password...", "w-100", styles)

    const onSubmit = data => mutate(data);

    return (
        <><div className="mt-5">
            <h2 className="mb-4">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

                <FormControl className="mb-5 mt-5">
                    <Controller
                        {...name.bindHookForm}
                        control={control}
                        render={({ field }) => <Input {...field} {...name.bindInput} />}
                    />
                {errors.name?.type === 'required' && <span className="text-danger">Required</span>}
                </FormControl>

                <FormControl className="mb-5 mt-5">
                    <Controller
                        {...email.bindHookForm}
                        control={control}
                        render={({ field }) => <Input {...field} {...email.bindInput} />}
                    />
                {errors.email?.type === 'required' && <span className="text-danger">Required</span>}
                {errors.email?.type === 'email' && <span className="text-danger">Wrong format</span>}
                </FormControl>

                <FormControl className="mb-5 mt-5">
                    <Controller
                        {...password.bindHookForm}
                        control={control}
                        render={({ field }) => <Input {...field} {...password.bindInput} />}
                    />
                {errors.password?.type === 'required' && <span className="text-danger">Required</span>}
                {errors.password?.type === 'min' && <span className="text-danger">Too small</span>}
                </FormControl>

                <FormControl className="mb-5 mt-5">
                    <Controller
                        {...confirmPassword.bindHookForm}
                        control={control}
                        render={({ field }) => <Input {...field} {...confirmPassword.bindInput} />}
                    />
                {errors.confirmPassword?.type === 'required' && <span className="text-danger">Required</span>}
                {errors.confirmPassword?.type === 'min' && <span className="text-danger">Too small</span>}
                {errors.confirmPassword?.type === 'oneOf' && <span className="text-danger">Wrong password</span>}
                </FormControl>

                <Button className="w-100 px-5 pt-3 pb-3" type='submit' disabled={isLoading} variant="outlined">
                    {isLoading ? <Loader /> : <><Box component="i" marginRight="1rem"><AlternateEmailIcon /></Box>Register</>}
                </Button>
                {isError && <span>Error. Please try again.</span>}
            </form>
        </div>
        </>
    )
}

export default SignUp