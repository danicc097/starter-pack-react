import React, { useEffect, useState } from "react";
import PreviewCollection from "./PreviewCollection";
import { useApi } from '../Hooks/useApi'
import useRouter from "../Hooks/useRouter";


const CollectionOverview = () => {
    const { Fetch } = useApi()
    const { query } = useRouter()
    const [collections, setCollections] = useState([])

    useEffect(() => {
        Fetch(`/v1/web/products/category/${query.category.substring(0,query.category.length-1)}`).then(resp => {
            if (resp?.success && resp.products) {
                setCollections(resp.products)
            }
        })
    // eslint-disable-next-line
    }, [])

    return (
        <>
            {collections && collections.length > 0 && <PreviewCollection items={collections} />}
        </>
    )
}

export default CollectionOverview