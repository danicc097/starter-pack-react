import React, { useEffect, useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useRecoilValue } from "recoil";
import CartResume from "../components/CartResume";
import { cartItemsAtom } from "../store/cart";
import StripeButton from "../components/StripeButton";

const Checkout = () => {
    const [displayItem, setDisplayItem] = useState(0)
    const items = useRecoilValue(cartItemsAtom)

    useEffect(() => {
        setDisplayItem(() => items.reduce((q, item) => q + item.quantity * item.price, 0))
    }, [items])

    return (
        <>
            <Table size="sm">
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    items && items.length > 0 && items.map((v, i) => <CartResume key={i} item={v} />)
                }
                </TableBody>
            </Table>
            <div>
                <h4>TOTAL: {displayItem}€</h4>
                <StripeButton price={displayItem}/>
                <br />
                <small className="text-danger">* Carte test: 4242 4242 4242 4242</small>
            </div>
        </>
    )
}

export default Checkout