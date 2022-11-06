import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect} from "react"
import { Col, Row } from 'react-bootstrap'
import Product from '../Product/Product'
import axios from 'axios'
import { useState } from 'react'

const ProductsScreen = () => {
    const dispatch = useDispatch()
    //const {user} = useSelector((state)=> state.authReducer.authData)
    //const articleData = useSelector((state)=> state.postReducer.articleData)
    //const loading = useSelector((state)=> state.postReducer.loading)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState()
    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios.get('http://localhost:8080/get/articles');
            setProducts(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);

    console.log(products)
    if(!products) return "No products yet!";
    if (products)
    return (
    <>
        <h1>Latest Products</h1>
        {loading? "Fetching Posts...":
            <Row>
                {products.map((product)=>(
                    <Col key={product.codeArticle} sm={12} md={6} lg={4} xlg={3}>
                        <Product product={product}/>
                    </Col>
                        
                ))}
            </Row>
        }
    </>
  )
}

export default ProductsScreen