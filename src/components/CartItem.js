import React from "react";

const CartItem = ({item: { imageUrl, name, price, quantity }}) => {
    return (
        <div className="cart-item w-100 d-flex mb-2" style={{height: '80px'}}>
            <img src={imageUrl} alt='test' style={{width: '30%'}}/>
            <div className="item-detail d-flex flex-column justify-content-center align-items-start" style={{width: '70%', padding: '10px 20px'}}>
                <span>{name}</span>
                <span>
                {price} x {quantity}
                </span>
            </div>
        </div>
    )
}

export default CartItem