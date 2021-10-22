import React from "react";
import { Card, CardContent } from '@mui/material';
import CollectionItem from "./CollectionItem";

const PreviewCollection = ({title, items}) => {
    return (
            <Card className="border-0 mb-4">
                <h1>{title.toUpperCase()}</h1>
                <CardContent>
                {items && items.length > 0 && items
                    .filter((item, i) => i < 4)
                    .map((item) => {
                        return (
                            <CollectionItem key={item.id} item={item} />
                        )
                    })}
                 </CardContent>
            </Card>
    )
}

export default PreviewCollection