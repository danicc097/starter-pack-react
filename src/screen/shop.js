import React, { useEffect, useState } from "react";
import PreviewAll from "../components/PreviewAll";
import { useApi } from '../Hooks/useApi'

const ShopPage = () => {
    const [shop, setShop] = useState([])
    const { Fetch } = useApi()

    useEffect(() => {
        Fetch(`/web/products`).then(resp => {
            if (resp?.success && resp.products) {
                setShop(resp.products)
            }
        })
    // eslint-disable-next-line
    }, [])

    return (
        <>
            { shop && shop.length > 0 &&
            <>
                <PreviewAll title="Men" items={shop}/>
                <PreviewAll title="Women" items={shop}/>
                <PreviewAll title="Sneaker" items={shop}/>
                <PreviewAll title="Hat" items={shop}/>
                <PreviewAll title="Jacket" items={shop}/>
            </>
            }
        </>
    )
}

export default ShopPage