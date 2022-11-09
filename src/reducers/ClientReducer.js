export const clientReducer = (state = {
    client: null,
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "AUTH_CLIENT_START":
                return {...state, loading: true, error: false};
            case "AUTH_CLIENT_SUCCESS":
                return {...state, client: action.payload, loading: false, error: false, success: true};
            case "AUTH_CLIENT_FAIL":
                return {...state, loading: false, error: action.payload};
            default:
                return state;
        }
}

export const updateClientReducer = (state = {
    client: {},
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "UPDATE_CLIENT_START":
                return {...state, loading: true, error: false};
            case "UPDATE_CLIENT_SUCCESS":
                return {...state, client: action.payload, loading: false, error: false, success: true};
            case "UPDATE_CLIENT_FAIL":
                return {...state, loading: false, error: action.payload};
            default:
                return state;
        }
}

export const getClientByUserReducer = (state = {
    client: {},
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "GET_CLIENT_BY_USER_START":
                return {...state, loading: true, error: false};
            case "GET_CLIENT_BY_USER_SUCCESS":
                return {...state, client: action.payload, loading: false, error: false};
            case "GET_CLIENT_BY_USER_FAIL":
                return {...state, loading: false, error: action.payload};
            default:
                return state;
        }
}