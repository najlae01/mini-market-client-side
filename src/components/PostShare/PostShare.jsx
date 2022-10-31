import { useSelector, useDispatch } from "react-redux";
import React, {useState, useRef} from "react";
import './PostShare.css'
import { uploadImage, uploadArticle } from "../../actions/UploadAction";

const PostShare = () =>{
    const loading = useSelector((state)=>state.postReducer.uploading)
    const dispatch = useDispatch()
    const [image, setImage] = useState(null)
    const nomArticle = useRef()
    const prixUnitaire = useRef()
    const quantite_stock = useRef()
    const imagerf = useRef()

    const reset = () => {
        setImage(null);
        nomArticle.current.value= ""
        prixUnitaire.current.value = null
        quantite_stock.current.value = null
    }

    const onImageChange = (event) =>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage(img);
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newPost = {
            nomArticle: nomArticle.current.value,
            prixUnitaire: prixUnitaire.current.value,
            quantite_stock: quantite_stock.current.value,
            imageArticle : ""
        }
        if(image){
            let file = image
            const filename = image.name
            let formdata = new FormData()
            formdata.append("file", file)
            formdata.append("name", filename)
            newPost.imageArticle = filename
            console.log(file.name)
            try {
                dispatch(uploadImage(formdata))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadArticle(newPost))
        reset()
    }

    return (
        <div className="PostShare">
            <div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" required
                    placeholder="Article name"
                    ref={nomArticle}
                />
                <input type="number" required
                    placeholder="Article price"
                    ref={prixUnitaire}
                />
                <input required
                type="number" 
                placeholder="Article quantity" 
                ref={quantite_stock} />
                 <input 
                    type="file" 
                    name="myImage" 
                    ref={imagerf} 
                    onChange={onImageChange}/>
                     <button className="button ps-button" disabled = {loading} 
                onClick={handleSubmit}>{loading? "Uploading..." : "Share"}</button>
                </form>
            </div>
        </div>
    )
}

export default PostShare