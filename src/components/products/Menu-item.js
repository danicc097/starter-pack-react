import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardContent, Grid } from '@mui/material';

const MenuItem = ({ title, md, url, height }) => {
    const history = useHistory()
    return (
        <>
        <Grid item md={md} className="pl-4 mb-2">
            <Card className="home text-center border border-dark" 
                onClick={() => history.push(`/shop/${title}`)}
                style={{backgroundImage: `url(${url})`, 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover',
                    height: `${height}`,
                    cursor: 'pointer'}}>
                    <CardContent className="home-card-body mx-auto w-50 border border-dark mt-5 mb-5 p-2">
                        <Fragment>{title}</Fragment><br />
                        <Fragment>SHOP NOW</Fragment>
                    </CardContent>
            </Card>
        </Grid>
        </>
    )
}

export default MenuItem