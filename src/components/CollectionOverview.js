import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { collectionAtom } from "../store/shop";
import PreviewCollection from "./PreviewCollection";


const CollectionOverview = memo(() => {
    const { id } = useParams()
    const [collection, setCollection] = useState([])
    const collections = useRecoilValue(collectionAtom)

    useEffect(() => {
        collections && setCollection(collections.filter(item => item.routeName === id))
    }, [collections, id])

    return (
        <>
            {collection && collection.length > 0 && <PreviewCollection {...collection[0]} />}
        </>
    )
})

export default CollectionOverview