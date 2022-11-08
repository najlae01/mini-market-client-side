import { combineReducers } from "redux";

import authReducer from './AuthReducer'
import {postReducer, listArticlesReducer, getArticleReducer} from "./PostReducer";
import {cartReducer} from './CartReducer'
import {getProfileReducer, updateProfileReducer} from './ProfileReducer'
export const reducers = combineReducers({
    authReducer: authReducer, 
    postReducer: postReducer,
    listArticlesReducer : listArticlesReducer,
    getArticleReducer : getArticleReducer,
    cartReducer: cartReducer,
    getProfileReducer: getProfileReducer, 
    updateProfileReducer: updateProfileReducer
})