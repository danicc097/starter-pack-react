import React from "react";
import { Grid } from '@mui/material';
import CollectionItem from "./CollectionItem";
import useRouter from "../../Hooks/useRouter";


const PreviewCollection = ({ items }) => {
    const router = useRouter()
    return (
        <Grid container spacing={2} className="mb-5">
                <h1 className="w-100">{router.query.category.toUpperCase()}</h1>
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

export default PreviewCollection