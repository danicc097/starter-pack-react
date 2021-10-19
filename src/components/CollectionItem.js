import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Button } from "reactstrap";
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
        <>
        <Card className="mx-3 border-0">
            <CardImg top height='400px' src={imageUrl} className="product-items" />
            <CardBody className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column">
                    <CardTitle tag="p">{name}</CardTitle>
                    <CardSubtitle tag="p">{price}$</CardSubtitle>
                </div>
                <Button color="dark" outline onClick={addItem(cartItem, item)}>
                    ADD TO CART
                </Button>
            </CardBody>
        </Card>
        </>
    )
}

export default CollectionItem