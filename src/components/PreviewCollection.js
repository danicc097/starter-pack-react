import React from "react";
import { Card, CardGroup } from "reactstrap";
import CollectionItem from "./CollectionItem";

const PreviewCollection = ({title, items}) => {
    return (
        <>
            <Card className="border-0 mb-4">
                <h1>{title.toUpperCase()}</h1>
                <CardGroup>
                {items && items.length > 0 && items
                    .filter((item, i) => i < 4)
                    .map((item) => {
                        return <CollectionItem key={item.id} item={item} />
                    })}
                 </CardGroup>
            </Card>
        </>
    )
}

export default PreviewCollection