import * as UploadApi from '../api/UploadRequest'

export const uploadImage = (data) => async(dispatch) =>{
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(error)
    }
}

export const uploadArticle = (data) => async(dispatch) => {
    dispatch({type: "UPLOAD_START"})
    try {
        const newArticle =  await UploadApi.uploadArticle(data)
        dispatch({type: "UPLOAD_SUCCESS", data: newArticle.data})
    } catch (error) {
        console.log(error)
        dispatch({type: "UPLOAD_FAIL"})
    }
}