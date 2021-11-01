import { Button } from "@mui/material";
import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishKey = process.env.REACT_APP_API_KEY_STRIPE

    const onToken = token => {
        console.log(token)
        alert("Sucess")
    }

    return (
        <>
            <StripeCheckout
                label="Payez Maintenant"
                panelLabel="Payez Maintenant"
                description={`Montant de ${price} euros.`}
                token={onToken}
                shippingAddress
                billingAddress
                zipCode
                name="Starter-Pack"
                amount={priceForStripe}
                currency="EUR"
                image="https://stripe.com/img/documentation/checkout/marketplace.png"
                stripeKey={publishKey}
           >
                <Button size="small" className="px-4 pt-2 pb-2 text-white" type='submit' variant="contained">
                    Payez Maintenant
                </Button>
           </StripeCheckout>
        </>
    )
}

export default StripeButton