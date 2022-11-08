export const getProfileReducer = (state = {
    user: {},
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "GET_PROFILE_START":
                return {...state, loading: true, error: false};
            case "GET_PROFILE_SUCCESS":
                return {...state, user: action.payload, loading: false, error: false};
            case "GET_PROFILE_FAIL":
                return {...state, loading: false, error: action.payload};
            default:
                return state;
        }
}

export const updateProfileReducer = (state = {
    user: {},
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "UPDATE_PROFILE_START":
                return {...state, loading: true, error: false, success : false};
            case "UPDATE_PROFILE_SUCCESS":
                return {...state, user: action.payload, loading: false, success :true, error: false};
            case "UPDATE_PROFILE_FAIL":
                return {...state, loading: false, success : false, error: action.payload};
            default:
                return state;
        }
}