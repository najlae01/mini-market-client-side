import * as ProfileApi from '../api/ProfileRequest'

export const getProfile = (id) => async(dispatch) => {
    dispatch({type: "GET_PROFILE_START"})
    try {
        const {data} = await ProfileApi.getProfile(id)
        dispatch({type: "GET_PROFILE_SUCCESS", payload: data})

    } catch (error) {
        console.log(error)
        dispatch({type: "GET_PROFILE_FAIL",
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
    
}

export const updateProfile = (user) => async(dispatch) => {
    dispatch({type: "UPDATE_PROFILE_START"})
    try {
        const {data} = await ProfileApi.updateProfile(user)
        dispatch({type: "UPDATE_PROFILE_SUCCESS", payload: data})

    } catch (error) {
        console.log(error)
        dispatch({type: "UPDATE_PROFILE_FAIL",
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
    
}