import * as ClientApi from "../api/ClientRequest"

export const addClient = (formData) => async(dispatch) => {
    dispatch({type: "AUTH_CLIENT_START"})
    try {
        const {data} = await ClientApi.addClient(formData)
        dispatch({type: "AUTH_CLIENT_SUCCESS", data: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "AUTH_CLIENT_FAIL",
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
}

export const updateClient = (id, formData) => async(dispatch) => {
    dispatch({type: "UPDATE_CLIENT_START"})
    try {
        const {data} = await ClientApi.updateClient(id, formData);
        dispatch({type: "UPDATE_CLIENT_SUCCESS", data: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "UPDATE_CLIENT_FAIL"})
    }
}

export const getAllClient = ()=> async(dispatch) =>{
    dispatch({type: "RETRIEVING_START"})
    try {
        const {data} = await ClientApi.getAllClient();
        dispatch({type: "RETRIEVING_SUCCESS", data: data}) 
    } catch (error) {
        dispatch({type: "RETRIEVING_FAIL"})
        console.log(error)        
    }
}

export const getClientByUserId = (userId) => async(dispatch) => {
    dispatch({type: "GET_CLIENT_BY_USER_START"})
    try {
        const {data} = await ClientApi.getClientByUserId(userId);
        dispatch({type: "GET_CLIENT_BY_USER_SUCCESS", payload: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "GET_CLIENT_BY_USER_FAIL"})
    }
}
