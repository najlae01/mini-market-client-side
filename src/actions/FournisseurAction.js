import * as FournisseurApi from "../api/FournisseurRequest"

export const addFournisseur = (formData) => async(dispatch) => {
    dispatch({type: "AUTH_FOURNISSEUR_START"})
    try {
        const {data} = await FournisseurApi.addFournisseur(formData)
        dispatch({type: "AUTH_FOURNISSEUR_SUCCESS", data: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "AUTH_FOURNISSEUR_FAIL",
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
}

export const updateFournisseur = (id, formData) => async(dispatch) => {
    dispatch({type: "UPDATE_FOURNISSEUR_START"})
    try {
        const {data} = await FournisseurApi.updateFournisseur(id, formData);
        dispatch({type: "UPDATE_FOURNISSEUR_SUCCESS", data: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "UPDATE_FOURNISSEUR_FAIL"})
    }
}

export const getAllFournisseur = ()=> async(dispatch) =>{
    dispatch({type: "RETRIEVING_START"})
    try {
        const {data} = await FournisseurApi.getAllFournisseur();
        dispatch({type: "RETRIEVING_SUCCESS", data: data}) 
    } catch (error) {
        dispatch({type: "RETRIEVING_FAIL"})
        console.log(error)        
    }
}

export const getFournisseurByUserId = (userId) => async(dispatch) => {
    dispatch({type: "GET_FOURNISSEUR_BY_USER_START"})
    try {
        const {data} = await FournisseurApi.getFournisseurByUserId(userId);
        dispatch({type: "GET_FOURNISSEUR_BY_USER_SUCCESS", payload: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "GET_FOURNISSEUR_BY_USER_FAIL"})
    }
}
