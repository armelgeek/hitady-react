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

export default orderReducer;