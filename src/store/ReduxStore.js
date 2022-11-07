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

const profileFromStorage = localStorage.getItem('profile')
                            ? JSON.parse(localStorage.getItem('profile'))
                            : []



const middleware = [thunk]

function saveToLocalStorage(store){
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore)
    } catch (error) {
        console.log(error)
    }
}

function loadFromLocalStorage(){
    try {
        const serializedStore = window.localStorage.getItem('store')
        if(serializedStore === null) return undefined;
        return JSON.parse(serializedStore )
    } catch (error) {
        console.log(error)
        return undefined;
    }
}

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const initialState = {
    cartReducer : {cartItems: cartItemsFromStorage},
    authReducer: persistedState
}
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;