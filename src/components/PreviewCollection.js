import React from "react";
import { Grid } from '@mui/material';
import CollectionItem from "./CollectionItem";

const PreviewCollection = ({title, items}) => {
    return (
        <Grid container spacing={2} className="mb-5">
                <h1 className="w-100">{title.toUpperCase()}</h1>
                {items && items.length > 0 && items
                    .filter((item, i) => i < 4)
                    .map((item) => {
                        return (
                            <Grid item xs={4} md={3}>
                                <CollectionItem key={item.id} item={item} />
                            </Grid>
                        )
                    })}
        </Grid>
    )
}

export default PreviewCollection