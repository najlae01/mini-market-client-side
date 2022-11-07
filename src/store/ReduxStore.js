import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import {reducers} from "../reducers"


const cartItemsFromStorage = localStorage.getItem('cartItems')
                            ? JSON.parse(localStorage.getItem('cartItems'))
                            : []

const userInfoFromStorage = localStorage.getItem('userInfo')
                            ? JSON.parse(localStorage.getItem('userInfo'))
                            : null



const middleware = [thunk]


const initialState = {
    cartReducer : {cartItems: cartItemsFromStorage},
    authReducer : {userInfo : userInfoFromStorage} 
}
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

//store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;