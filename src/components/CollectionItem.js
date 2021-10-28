import React, { Fragment } from "react";
import { Card, CardMedia, Button, CardContent } from '@mui/material';
import { useRecoilState } from "recoil";
import { cartItemsAtom } from "../store/cart";

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item
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

    return (
            <Card>
                <CardMedia
                    className="product-items"
                    component="img"
                    height="400"
                    image={imageUrl}
                    alt="Items"
                />
                <CardContent className="">
                    <div className="mb-2">
                        <Fragment>{name}</Fragment><br />
                        <Fragment>{price}$</Fragment>
                    </div>
                    <Button  variant="contained" onClick={addItem(cartItem, item)}>
                        ADD TO CART
                    </Button>
                </CardContent>
            </Card>
    )
}

export default CollectionItem