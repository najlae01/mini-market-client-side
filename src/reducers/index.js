import { combineReducers } from "redux";

import authReducer from './AuthReducer'
import {postReducer, listArticlesReducer, getArticleReducer} from "./PostReducer";
import {cartReducer} from './CartReducer'
import {getProfileReducer, updateProfileReducer} from './ProfileReducer'
import {addLigneCommandeReducer, updateLigneCommandeReducer, getLigneCommandeReducer, ListLigneCommandeReducer, deleteLigneCommandeReducer} from './LigneCommandeReducer'
import { addCommandeReducer, listCommandeReducer } from "./CommandeReducer";
import {clientReducer, updateClientReducer, getClientByUserReducer} from "./ClientReducer"
import { getFournisseurByUserReducer, fournisseurReducer, updateFournisseurReducer } from "./FournisseurReducer";

export const reducers = combineReducers({
    authReducer: authReducer, 
    postReducer: postReducer,
    listArticlesReducer : listArticlesReducer,
    getArticleReducer : getArticleReducer,
    cartReducer: cartReducer,
    getProfileReducer: getProfileReducer, 
    updateProfileReducer: updateProfileReducer,
    addLigneCommandeReducer: addLigneCommandeReducer,
    updateLigneCommandeReducer: updateLigneCommandeReducer,
    getLigneCommandeReducer: getLigneCommandeReducer,
    deleteLigneCommandeReducer: deleteLigneCommandeReducer,
    ListLigneCommandeReducer: ListLigneCommandeReducer,
    addCommandeReducer: addCommandeReducer,
    clientReducer: clientReducer,
    updateClientReducer: updateClientReducer,
    getClientByUserReducer: getClientByUserReducer,
    getFournisseurByUserReducer: getFournisseurByUserReducer,
    fournisseurReducer: fournisseurReducer,
    updateFournisseurReducer: updateFournisseurReducer,
    listCommandeReducer: listCommandeReducer
})