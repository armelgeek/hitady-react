import React, { useCallback, useEffect, useReducer } from 'react';
import OrderList from '../Car/components/Order/OrderList';
const orderData = [
    {
        id: 1,
        name: 'Car 1',
        startDate: '2021-07-26',
        endDate: '2021-07-30',
        totalDays: 3,
        totalPrice: 3000,
        car: 1,
        isPayNow: false
    }
];
const orderReducer = (state, action) => {
    switch (action.type) {
        case 'GET':
            return action.orders;
        case 'DELETE':
            return state.filter((order) => order.id !== action.id);
        case 'UPDATE_ORDER':
            return state.map((order) => {
                if (order.id === action.id) {
                    return {
                        ...order,
                        ...action.update
                    }
                }
                return order
            });
        default:
            return state;
    }
};

export default function Orders() {
    const [orders, dispatch] = useReducer(orderReducer, [])
    useEffect(() => {
        //recuperation des commandes par l'utilisateur
        /* /orders/user/${uid}*/
        dispatch({ type: 'GET', orders: orderData })
        return () => {
        }
    }, [])
    const onDeleteOrder = useCallback((orderId) => {
        /* /orders/${orderId}*/
        dispatch({ type: 'DELETE', id: orderId })
    }, [])

    const onPayNowHandler = useCallback((orderId) => { }, [])
    const onPayLaterHandler = useCallback((orderId) => { }, [])
    //Send e-mail on confirm order
    const sendInvoiceEmail = useCallback((orderId) => { }, [])
    const onInvoicePdf = useCallback((orderId) => { }, [])
    return (
        <div>
            <OrderList orders={orders}
                onDeleteOrder={onDeleteOrder}
                onPayNowHandler={onPayNowHandler}
                onPayLaterHandler={onPayLaterHandler}
                sendInvoiceEmail={sendInvoiceEmail}
                onInvoicePdf={onInvoicePdf} />
        </div>
    )
}
