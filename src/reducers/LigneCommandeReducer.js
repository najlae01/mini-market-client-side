export const addLigneCommandeReducer = (
    state = { ligneCommande: {}, error: false, uploading: false },
    action
  ) => {
    switch (action.type) {
      // belongs to PostShare.jsx
      case "ADD_LIGNE_COMMANDE_START":
        return { ...state, error: false, uploading: true };
      case "ADD_LIGNE_COMMANDE_SUCCESS":
        return { ...state, ligneCommande: action.payload, uploading: false, error: false };
      case "ADD_LIGNE_COMMANDE_FAIL":
        return { ...state, uploading: false, error: true };
      default:
        return state;
    }
  };

export const updateLigneCommandeReducer = (state = {
    ligneCommande: {},
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "UPDATE_LIGNE_COMMANDE_START":
                return {...state, loading: true, error: false, success : false};
            case "UPDATE_LIGNE_COMMANDE_SUCCESS":
                return {...state, user: action.payload, loading: false, success :true, error: false};
            case "UPDATE_LIGNE_COMMANDE_FAIL":
                return {...state, loading: false, success : false, error: action.payload};
            default:
                return state;
        }
}

export const getLigneCommandeReducer = (state = {
    ligneCommande: {},
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "GET_LIGNE_COMMANDE_START":
                return {...state, loading: true, error: false};
            case "GET_LIGNE_COMMANDE_SUCCESS":
                return {...state, ligneCommande: action.payload, loading: false, error: false};
            case "GET_LIGNE_COMMANDE_FAIL":
                return {...state, loading: false, error: action.payload};
            default:
                return state;
        }
}


export const ListLigneCommandeReducer = (state = {
    listligneCommande: [],
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "LIST_LIGNE_COMMANDE_START":
                return {loading: true, error: false};
            case "LIST_LIGNE_COMMANDE_SUCCESS":
                return {listligneCommande: action.payload, loading: false, error: false};
            case "LIST_LIGNE_COMMANDE_FAIL":
                return {loading: false, error: action.payload};
            default:
                return state;
        }
}


export const deleteLigneCommandeReducer = (state = {
    
}, action) => {
        switch(action.type){
            case "DELETE_LIGNE_COMMANDE_START":
                return { loading: true};
            case "DELETE_LIGNE_COMMANDE_SUCCESS":
                return { loading: false, success: true};
            case "DELETE_LIGNE_COMMANDE_FAIL":
                return { loading: false, error: action.payload};
            default:
                return state;
        }
}
