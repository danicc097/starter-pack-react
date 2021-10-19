import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { useRecoilValue } from "recoil";
import CartResume from "../components/CartResume";
import { cartItemsAtom } from "../store/cart";

const Checkout = () => {
    const [displayItem, setDisplayItem] = useState(0)
    const items = useRecoilValue(cartItemsAtom)

    useEffect(() => {
        setDisplayItem(() => items.reduce((q, item) => q + item.quantity * item.price, 0))
    }, [items])

    return (
        <>
            <Table size="sm">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {
                    items && items.length > 0 && items.map((v, i) => <CartResume key={i} item={v} />)
                }
                </tbody>
                <h4>TOTAL: {displayItem}$</h4>
            </Table>
        </>
    )
}

export default Checkout