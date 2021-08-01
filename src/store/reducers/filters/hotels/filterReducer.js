const initialState = {
    response:[],
    criteria: {
        star: 1,
        max_price: 30000
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_DATA_HOTEL":
            return { ...state, fetchedData: true };
        case "FETCH_DATA_HOTEL_SUCCESS":
            return {
                ...state,
                response: action.payload,
                error: null,
                fetchedData: false
            };
        case "FETCH_DATA_HOTEL_ERROR":
            return { ...state, error: action.payload, fetchedData: false };
        case "EDIT_CRITERIA_HOTEL":
            //revert back to page: 1
            if (!action.payload.hasOwnProperty("page")) {
                return {
                    ...state,
                    criteria: sanitizeCriteria({
                        ...state.criteria,
                        ...action.payload,
                        page: 1
                    }),
                    isCriteriaPristine: false
                };
            } else {
                return {
                    ...state,
                    criteria: sanitizeCriteria({
                        ...state.criteria,
                        ...action.payload
                    }),
                    isCriteriaPristine: false
                };
            }
        case "RESET_CRITERIA_HOTEL":
            return {
                ...state,
                criteria: sanitizeCriteria({
                    ...action.payload
                }),
                isCriteriaPristine: true
            };

        default:
            return state;
    }
}




const sanitizeCriteria = obj => {
    //this function removes all keys with value "" or 0 from the criteria object
    // this is important because if you send year: 0 as criteria, you will get an empty match from backend
    const o = JSON.parse(JSON.stringify(obj)); // Clone source object.

    Object.keys(o).forEach(key => {
        if (o[key] && typeof o[key] === "object") {
            o[key] = sanitizeCriteria(o[key]);
        }
        // Recurse.
        else if (o[key] === undefined || o[key] === "" || o[key] === 0) {
            delete o[key];
            // Delete undefined and null.
        } else {
            // eslint-disable-next-line
            o[key] = o[key]; // Copy value.
        }
    });
    return o; // Return new object.
};
