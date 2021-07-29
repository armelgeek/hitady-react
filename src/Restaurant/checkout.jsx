import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutItems from './checkout-items';
import CheckoutStatus from './checkout-status';
export default function checkout() {
    const priceTotal = useSelector((state) => {
        const cartItems = state.cart.cartItems;
        let totalPrice = 0;
        if (cartItems.length > 0) {
            cartItems.map((item) => totalPrice += item.price * item.count);
        }
        return totalPrice;
    })

    return (
        <div>
            <CheckoutStatus step="checkout" />
            <div>
                <h3>Prix total</h3>
                <p>{priceTotal}</p>
            </div>
            <div>
                <p>Votre commandes</p>
                <CheckoutItems />
            </div>

            <div>
                <a href="/cart">Revenir en arriere</a>
                <div>
                    <a href="/">Continue shopping</a>
                    <a href="/payment">Proceed to payment</a>
                </div>
            </div>
        </div>
    )
}
