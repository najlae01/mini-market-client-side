export const addCommandeReducer = (
    state = { commande: {}, error: false, uploading: false },
    action
  ) => {
    switch (action.type) {
      // belongs to PostShare.jsx
      case "ADD_COMMANDE_START":
        return { ...state, error: false, uploading: true };
      case "ADD_COMMANDE_SUCCESS":
        return { ...state, ligneCommande: action.payload, uploading: false, error: false, success: true };
      case "ADD_COMMANDE_FAIL":
        return { ...state, uploading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const listCommandeReducer = (state = {
    orders: [],
    loading: false,
    error: false
}, action) => {
        switch(action.type){
            case "LIST_COMMANDE_START":
                return {loading: true, error: false};
            case "LIST_COMMANDE_SUCCESS":
                return {orders: action.payload, loading: false, error: false};
            case "LIST_COMMANDE_FAIL":
                return {loading: false, error: action.payload};
            default:
                return state;
        }
}