import React from "react";
import { Grid } from '@mui/material';
import CollectionItem from "./CollectionItem";

const PreviewAll = ({ title, items }) => {

    return (
        <Grid container spacing={2} className="mb-5">
                <h1 className="w-100">{title.toUpperCase()}</h1>
                {items && items.length > 0 && items
                    .filter((item, i) => i < 4)
                    .map((item) => {
                        return (
                            <Grid item xs={6} md={3} key={item.id} >
                                <CollectionItem item={item} />
                            </Grid>
                        )
                    })}
        </Grid>
    )
}

export default PreviewAll