import React from 'react'
import OrderSingleItem from './OrderSingleItem';
const orderReducer = (state, action) => {
    switch (action.type) {
        case 'GET':
            return action.orders;
        case 'DELETE':
            return state.filter(order => order.id !== action.id);
        case 'UPDATE_ORDER':
            return state.map(order => {
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
export default function OrderList(props) {
    if (!props.orders.length) {
        return (
            <p style={{ textAlign: 'center' }}>We can't find any orders right now</p>
        )
    }
    return (
        <>
            <ul className='list-autos'>
                {
                    props.orders.map(order => {
                        return (<div>
                            <OrderSingleItem
                                key={order.id}
                                id={order.id}
                                startDate={order.startDate}
                                endDate={order.endDate}
                                totalDays={order.totalDays}
                                totalPrice={order.totalPrice}
                                car={order.car}
                                name={order.name}
                                isPayNow={order.isPayNow}
                                onDeleteOrder={() => props.onDeleteOrder(order.id)}
                                onPayNowHandler={() => props.onPayNowHandler(order.id)}
                                onPayLaterHandler={() => props.onPayLaterHandler(order.id)}
                                sendInvoiceEmail={() => props.sendInvoiceEmail(order.id)}
                                onInvoicePdf={() => props.onInvoicePdf(order.id)} />
                        </div>)
                    })
                }
            </ul>
        </>
    )
}
