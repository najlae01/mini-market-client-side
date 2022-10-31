import * as ClientApi from "../api/ClientRequest"

export const addClient = (formData) => async(dispatch) => {
    dispatch({type: "AUTH_START"})
    try {
        const {data} = await ClientApi.addClient(formData)
        dispatch({type: "AUTH_SUCCESS", data: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "AUTH_FAIL"})
    }
}

export const updateClient = (id, formData) => async(dispatch) => {
    dispatch({type: "UPDATING_START"})
    try {
        const {data} = await ClientApi.updateClient(id, formData);
        dispatch({type: "UPDATING_SUCCESS", data: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "UPDATING_FAIL"})
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

export const logout = () => async(dispatch) => {
    dispatch({type: "LOG_OUT"})
}
