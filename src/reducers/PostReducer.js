export const postReducer = (
    state = { product: [], error: false, uploading: false },
    action
  ) => {
    switch (action.type) {
      // belongs to PostShare.jsx
      case "UPLOAD_START":
        return { ...state, error: false, uploading: true };
      case "UPLOAD_SUCCESS":
        return { ...state, product: [...state.product, action.data], uploading: false, error: false };
      case "UPLOAD_FAIL":
        return { ...state, uploading: false, error: true };
      default:
        return state;
    }
  };
  

  export const listArticlesReducer = (
    state = { products:[], loading: false, error: false},
    action
  ) => {
    switch (action.type) {
      case "RETRIEVING_LIST_START":
        return {...state, error: false, loading: true};
      case "RETRIEVING_LIST_SUCCESS":
        return {...state, products: action.payload, loading: false, error: false};
      case "RETRIEVING_LIST_FAIL":
        return {...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const getArticleReducer = (
    state = { product: {}, loading: false, error: false},
    action
  ) => {
    switch (action.type) {
      case "RETRIEVING_START":
        return {...state, error: false, loading: true};
      case "RETRIEVING_SUCCESS":
        return {...state, product: action.payload, loading: false, error: false};
      case "RETRIEVING_FAIL":
        return {...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };