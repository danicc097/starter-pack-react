import React from "react";
import { useRecoilValue } from "recoil";
import { collectionAtom } from "../store/shop";
import PreviewCollection from "../components/PreviewCollection";


const ShopPage = () => {
    const shop = useRecoilValue(collectionAtom)
    return (
        <>
            {shop && shop.map(({ id, ...data }) => (
                <PreviewCollection key={id} {...data} />
            ))}

        </>
    )
}

export default ShopPage   