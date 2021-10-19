import React, { memo, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartHiddenAtom, cartItemsAtom } from "../store/cart";

const CartIcon = memo(() => {
    const [displayItem, setDisplayItem] = useState(0)
    const setCartHidden = useSetRecoilState(cartHiddenAtom)
    const cartItem = useRecoilValue(cartItemsAtom)

    useEffect(() => {
        setDisplayItem(() => cartItem.reduce((q, item) => q + item.quantity, 0))
    }, [cartItem])

    return (
        <div onClick={() => setCartHidden(v => !v)}>
            {/* <ShoppingCartIcon /> */}
            <span className="">{displayItem}</span>
        </div>
    )
})

export default CartIcon