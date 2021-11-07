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
            {shop && shop.length > 0 && shop.map((v) => (
                <PreviewAll title={shop[0].category} items={v}/>
            ))}

        </>
    )
}

export default ShopPage   