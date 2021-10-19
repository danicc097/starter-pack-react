import React from "react";
import { useRecoilState } from "recoil";
import { cartItemsAtom } from "../store/cart";

const CartResume = ({ item }) => {
    const [cartItem, setCartItem] = useRecoilState(cartItemsAtom)

    const addItem = (items, newItem) => {
        const isExist = items.find(item => item.id === newItem.id)

        if (isExist) {
            return items.map(item => 
                item.id === newItem.id 
                    ? {...item, quantity: item.quantity + 1} 
                    : item
            )
        }
        setCartItem(() => [...items, { ...newItem, quantity: 1 }])
    }

    const removeItem = (items, removeItem) => {
        const itemToRemove = items.find(item => item.id === removeItem.id)
        if (itemToRemove.quantity === 1) return items.filter(item => item.id !== removeItem.id)
        return  items.map(item => item.id === removeItem.id 
                ? {...item, quantity: item.quantity - 1} 
                : item)
    }

    return (
        <tr>
             <td>
                <img src={item.imageUrl} alt="img" style={{width: '170px'}} />
            </td>
            <td>
                <span>{item.name}</span>
            </td>
            <td>
                <span>
                    <span style={{cursor: 'pointer'}} onClick={removeItem(cartItem, item)}>&#10094;</span>
                        <span style={{margin: '0 10px'}}>{item.quantity}</span>
                    <span style={{cursor: 'pointer'}} onClick={addItem(cartItem, item)}>&#10095;</span>
                </span>
            </td>
            <td>
                <span>{item.price}$</span>
            </td>
            <td>
                <span style={{cursor: 'pointer'}} onClick={() => setCartItem(cartItem.filter(v => v.id !== item.id))}>&#10005;</span>
            </td>
        </tr>
    )
}

export default CartResume