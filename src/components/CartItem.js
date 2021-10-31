import React from "react";

const CartItem = ({item: { imageUrl, name, price, quantity }}) => {
    return (
        <div className="w-100 d-flex mb-2 text-dark" style={{height: '80px'}}>
            <img src={imageUrl} alt='test' style={{width: '30%'}}/>
            <div className="d-flex flex-column justify-content-center align-items-start" style={{width: '70%', padding: '10px 20px'}}>
                <span>{name}</span>
                <span>
                {price} x {quantity}
                </span>
            </div>
        </div>
    )
}

export default CartItem