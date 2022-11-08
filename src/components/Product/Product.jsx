import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './Product.css'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product.codeArticle}`}>
            <Card.Img src= {process.env.REACT_APP_PUBLIC_FOLDER+product.imageArticle} variant='top' style={
                {width: '18rem',
                height: '18rem'}
            }/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product.codeArticle}`}>
                <Card.Title as='div'>
                    <strong>{product.nomArticle}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='h3'>${product.prixUnitaire}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product