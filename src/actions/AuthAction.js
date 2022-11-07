import * as AuthApi from '../api/AuthRequest'

export const logIn = (formData) => async(dispatch) => {
    dispatch({type: "AUTH_START"})
    try {
        const {data} = await AuthApi.logIn(formData)
        dispatch({type: "AUTH_SUCCESS", data: data})

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        console.log(error)
        dispatch({type: "AUTH_FAIL",
        data: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
    
}

export const signUp = (formData) => async(dispatch) => {
    dispatch({type: "AUTH_START"})
    try {
        const {data} = await AuthApi.signUp(formData)
        dispatch({type: "AUTH_SUCCESS", data: data})

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        console.log(error)
        dispatch({type: "AUTH_FAIL",
        data: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
    
}

export const logout = () => async(dispatch) => {
    dispatch({type: "LOG_OUT"})
    localStorage.clear();
}

