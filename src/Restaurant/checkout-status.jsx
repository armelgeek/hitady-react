import React from 'react';
const CheckoutStatus = ({ step }) => {
    return (
        <div className="checkout-status">
            <ul className="checkout-steps">
                <li className={`${step === 'cart' ? 'active' : 'done'}`}>Cart</li>
                <li className={`${step === 'checkout' ? 'active' : 'done'}`}>Delivery</li>
            </ul>
        </div>
    )
};


export default CheckoutStatus