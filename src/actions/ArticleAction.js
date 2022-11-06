import * as ArticleApi from '../api/ArticleRequest';

export const getArticles = ()=> async(dispatch) =>{
    dispatch({type: "RETRIEVING_START"})
    try {
        const {data} = await ArticleApi.getArticles();
        dispatch({type: "RETRIEVING_SUCCESS", data: data}) 
        console.log(data)
    } catch (error) {
        dispatch({type: "RETRIEVING_FAIL"})
        console.log(error)        
    }
}