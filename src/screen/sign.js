import React from "react";
import { Grid } from '@mui/material';
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Sign = () => {
    return (
        <>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 3, md: 4, xl: 8 }}>
                <Grid item md={6}>
                    <SignIn />
                </Grid>
                <Grid item md={6}>
                    <SignUp />
                </Grid>
            </Grid>
        </>
    )
}

export default Sign