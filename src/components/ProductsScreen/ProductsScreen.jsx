import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect} from "react"
import { Col, Row } from 'react-bootstrap'
import Product from '../Product/Product'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import { getArticles } from '../../actions/ArticleAction'

const ProductsScreen = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.listArticlesReducer)
    const {loading, products, error} = data
      useEffect(() => {
        dispatch(getArticles())
      }, [dispatch]);

    if(!products) return "No products yet!";
    if (products)
    return (
    <>
        <h1>Latest Products</h1>
        {loading? (<Loader/>)
        : error ?( <Message variant='danger'>{error}</Message>)
        : (
            <Row>
                {products.map((product) => (
                    <Col key={product.codeArticle} sm={12} md={6} lg={4} xlg={3}>
                        <Product product={product}/>
                    </Col>
                        
                ))}
            </Row>
        )
        }
    </>
  )
}

export default ProductsScreen