import { combineReducers } from "redux";

import authReducer from './AuthReducer'
import {postReducer, listArticlesReducer, getArticleReducer} from "./PostReducer";
import {cartReducer} from './CartReducer'
export const reducers = combineReducers({
    authReducer: authReducer, 
    postReducer: postReducer,
    listArticlesReducer : listArticlesReducer,
    getArticleReducer : getArticleReducer,
    cartReducer: cartReducer
})