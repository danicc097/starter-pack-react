import React from "react";
import { useRecoilState } from "recoil";
import { TableRow, TableCell } from '@mui/material';
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
        <TableRow>
             <TableCell>
                <img src={item.imageUrl} alt="img" style={{width: '170px'}} />
            </TableCell>
            <TableCell>
                <span>{item.name}</span>
            </TableCell>
            <TableCell>
                <span>
                    <span style={{cursor: 'pointer'}} onClick={removeItem(cartItem, item)}>&#10094;</span>
                        <span style={{margin: '0 10px'}}>{item.quantity}</span>
                    <span style={{cursor: 'pointer'}} onClick={addItem(cartItem, item)}>&#10095;</span>
                </span>
            </TableCell>
            <TableCell>
                <span>{item.price}$</span>
            </TableCell>
            <TableCell>
                <span style={{cursor: 'pointer'}} onClick={() => setCartItem(cartItem.filter(v => v.id !== item.id))}>&#10005;</span>
            </TableCell>
        </TableRow>
    )
}

export default CartResume