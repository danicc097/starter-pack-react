import React from "react";
import { Button, Box, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useInput from "../../Hooks/useInput.js";
import { useMutation } from "react-query";
import useRouter from "../../Hooks/useRouter.js";
import * as api from '../../firebase/api'
import { useAuth } from '../../Hooks/useAuth'
import { toast } from 'react-toastify';
import Loader from '../Loader'
import GoogleIcon from '@mui/icons-material/Google';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import UseFormGroup from "../../Hooks/useFormGroup.js";

const styles = {
    outline: '0',
    borderWidth:'0 0 1px',
    borderColor: 'black',
}

const SignIn = () => {

    const router = useRouter()
    const { signWithProvider, login } = useAuth()

    const signWithEmail = useMutation(api.SigninWithMailAndPassword, {
        onSuccess: () => {
            toast.success("You're connected!", {
                position: "top-left",
                autoClose: 3000,
                theme: "dark",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            router.push('/')
        }
    })

    const signWithGoogle = useMutation(() => api.SignWithGoogle(signWithProvider), {
        onSuccess: () => {
            toast.success("You're connected!", {
                position: "top-left",
                theme: "dark",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            router.push('/')
        }
    })

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required().min(7),
      }).required();

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const email = useInput("", "email", "email", "Email...", "w-100", styles)
    const password = useInput("", "password", "password", "Password...", "w-100", styles)

    const onSubmit = data => signWithEmail.mutate({ email: data.email, password: data.password, login});

    return (
        <>
        <div className="mt-5">
            <h2 className="mb-4">I already have an email !</h2>
            <span>Login</span>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

                <Grid item md={6} className="mb-4">
                    <UseFormGroup bind={email} control={control} />
                    {errors.email?.type === 'required' && <span className="text-danger">Required</span>}
                    {errors.email?.type === 'email' && <span className="text-danger">Wrong format</span>}
                </Grid>

                <Grid item md={6} className="mb-4">
                    <UseFormGroup bind={password} control={control} />
                    {errors.password?.type === 'required' && <span className="text-danger">Required</span>}
                    {errors.password?.type === 'min' && <span className="text-danger">Too small</span>}
                </Grid>

                <Button size="small" className="w-100 px-5 pt-3 pb-3 mb-2 text-white" type='submit' style={{backgroundColor: 'black'}} disabled={signWithEmail.isLoading}>
                    {signWithEmail.isLoading ? <Loader /> : <><Box component="i" marginRight="1rem"><AlternateEmailIcon /></Box>Login by mail</>}
                </Button>

                <Button size="small" className="w-100 px-5 pt-3 pb-3 mb-2" variant="contained" color='error' disabled={signWithGoogle.isLoading} onClick={signWithGoogle.mutate}>
                    {signWithGoogle.isLoading ? <Loader /> : <><Box component="i" marginRight="1rem"><GoogleIcon /></Box>Login with Google</>}
                </Button>

                {signWithEmail.isError && <span className="text-danger">* Email or password incorrect</span>}
                {signWithGoogle.isError && <span className="text-danger">* Error with Google, please try again or contact us.</span>}
            </form>
        </div>
        </>
    )
}

export default SignIn