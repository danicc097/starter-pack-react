import React, { useEffect, useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { useRecoilValue } from "recoil";
import CartResume from "../components/CartResume";
import { cartItemsAtom } from "../store/cart";
import StripeButton from "../components/StripeButton";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import useRouter from '../Hooks/useRouter'

const Checkout = () => {
    const [displayItem, setDisplayItem] = useState(0)
    const items = useRecoilValue(cartItemsAtom)
    const router = useRouter()

    useEffect(() => {
        setDisplayItem(() => items.reduce((q, item) => q + item.quantity * item.price, 0))
    }, [items])

    return (
        <>
        {
            displayItem <= 0 ? 
                <div className="text-center p-5">
                    <RemoveShoppingCartIcon fontSize="large" className="mb-4" />
                    <h2 className="mb-4">Votre panier est vide.</h2> 
                    <Button size="small" className="px-4 pt-2 pb-2" variant="outlined" onClick={() => router.push('/shop')}>
                        Achetez maintenant!
                    </Button>
                </div> :
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
            }
        </>
    )
}

export default Checkout