const initialState = {
    defaultCriteria: {
        star: 1,
        max_price: 30000
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_CRITERIA_HOTEL":
            return { ...state, ok: true };
        default:
            return state;
    }
}