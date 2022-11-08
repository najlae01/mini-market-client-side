import * as ArticleApi from '../api/ArticleRequest';

export const getArticles = ()=> async(dispatch) =>{
        dispatch({type: "RETRIEVING_LIST_START"})
    try {
        const {data} = await ArticleApi.getArticles();
        dispatch({type: "RETRIEVING_LIST_SUCCESS", payload: data}) 
        console.log(data)
    } catch (error) {
        dispatch({type: "RETRIEVING_LIST_FAIL",
                payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
            })
        console.log(error)        
    }
}

export const getArticle = (id)=> async(dispatch) =>{
    dispatch({type: "RETRIEVING_START"})
try {
    const {data} = await ArticleApi.getArticle(id);
    dispatch({type: "RETRIEVING_SUCCESS", payload: data}) 
    console.log(data)
} catch (error) {
    dispatch({type: "RETRIEVING_FAIL",
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    console.log(error)        
}
}