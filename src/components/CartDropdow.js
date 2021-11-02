import React, { memo } from "react";
import { useHistory } from "react-router";
import { Button } from '@mui/material';
import CartItem from "./CartItem";
import '../assets/scss/cartDropDown.scss'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartHiddenAtom, cartItemsAtom } from "../store/cart";

const CartDropdown = memo (() => {
    const cartItems = useRecoilValue(cartItemsAtom)
    const history = useHistory()
    const setCartHidden = useSetRecoilState(cartHiddenAtom)

    return (
        <>
            <div className="cart-dropdown flex-column position-absolute d-flex overflow-auto bg-white">
                { cartItems && cartItems.length > 0 ?
                    cartItems.map(v => {
                        return <CartItem key={v.id} item={v} />
                    }) : 
                    <span className="d-flex justify-content-center text-dark">Card is empty</span>
                }
                <Button variant="contained" color="primary" style={{marginTop: 'auto'}} onClick={() => {
                    setCartHidden(v => !v)
                    history.push("/checkout");
                }}>
                    GO TO CHECKOUT
                </Button>
            </div>
        </>
    )
})

export default CartDropdown