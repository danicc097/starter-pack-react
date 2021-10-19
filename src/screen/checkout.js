import React, { useEffect, useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
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
                <h4>TOTAL: {displayItem}$</h4>
            </Table>
        </>
    )
}

export default Checkout