import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Col, Row } from 'react-bootstrap'
import Product from '../Product/Product'
import {getArticles} from '../../actions/ArticleAction'

const Products = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.authReducer.authData)
    let {products, loading} = useSelector((state)=> state.postReducer)
    useEffect(()=>{
        dispatch(getArticles())
    }, [])
    console.log(products)
    if(!products) return "No products yet!";
    return (
        <>
        <h1>Latest Products</h1>
        {loading? "Fetching Posts...": 
            <Row>
                {products.map((product)=>(
                    <Col key={product.codeArticle} sm={12} md={6} lg={4} xlg={3}>
                        <Product data={product}/>
                    </Col>
                        
                ))}
            </Row>
        }
    </>
  )
}

export default Products