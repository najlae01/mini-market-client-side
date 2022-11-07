import * as ArticleApi from '../api/ArticleRequest';

export const addToCart = (id, qty) => async(dispatch, getState) => {
    
    const {data} =  await ArticleApi.getArticle(id)
    dispatch({
        type: "CART_ADD_ITEM",
        payload: {
            product: data.codeArticle,
            name: data.nomArticle,
            image: data.imageArticle,
            price: data.prixUnitaire,
            quantityInStock: data.quantite_stock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async(dispatch, getState) => {
    dispatch({
        type: "CART_REMOVE_ITEM",
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}