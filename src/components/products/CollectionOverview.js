import React, { useEffect, useState } from "react";
import PreviewCollection from "./PreviewCollection";
import { useApi } from '../../Hooks/useApi'
import useRouter from "../../Hooks/useRouter";
import ErrorIcon from '@mui/icons-material/Error';

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
            {collections && collections.length > 0 ? 
                <PreviewCollection items={collections} />
                :
                <div className="w-100 h-100">
                    <h3 className="text-center p-5 mt-auto">
                        <span><ErrorIcon fontSize='large'/> </span>
                        No product available.
                    </h3>
            </div>
            }
        </>
    )
}

export default CollectionOverview