import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
const Cart = (props) => {
    //const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const history = useHistory();
    const checkOutCart = () => {
        return () => {
            // if (!cartItems.length) return
            history.push('/checkout')
            //    dispatch(checkOut())
        }
    }
    return (
        <>
            <div className='checkout-wrapper'>
                <span onClick={checkOutCart()} className='checkout-button'>checkout</span>
            </div>
        </>
    );
};

export default Cart;
