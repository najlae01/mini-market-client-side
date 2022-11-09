export const fournisseurReducer = (state = {
    fournisseur: null,
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "AUTH_FOURNISSEUR_START":
                return {...state, loading: true, error: false};
            case "AUTH_FOURNISSEUR_SUCCESS":
                return {...state, fournisseur: action.payload, loading: false, error: false, success: true};
            case "AUTH_FOURNISSEUR_FAIL":
                return {...state, loading: false, error: action.payload};
            default:
                return state;
        }
}

export const updateFournisseurReducer = (state = {
    fournisseur: {},
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "UPDATE_FOURNISSEUR_START":
                return {...state, loading: true, error: false};
            case "UPDATE_FOURNISSEUR_SUCCESS":
                return {...state, fournisseur: action.payload, loading: false, error: false, success: true};
            case "UPDATE_FOURNISSEUR_FAIL":
                return {...state, loading: false, error: action.payload};
            default:
                return state;
        }
}

export const getFournisseurByUserReducer = (state = {
    fournisseur: null,
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "GET_FOURNISSEUR_BY_USER_START":
                return {...state, loading: true, error: false};
            case "GET_FOURNISSEUR_BY_USER_SUCCESS":
                return {...state, fournisseur: action.payload, loading: false, error: false};
            case "GET_FOURNISSEUR_BY_USER_FAIL":
                return {...state, loading: false, error: action.payload};
            default:
                return state;
        }
}