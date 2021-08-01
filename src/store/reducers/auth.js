const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case "auth":
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data, loading: false, errors: null }
        case "logout":
            localStorage.clear()
            return { ...state, authData: null, loading: false, errors: null }
        default:
            return state
    }
}

export default authReducer