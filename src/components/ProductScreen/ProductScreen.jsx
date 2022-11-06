import React from 'react'
import { Row, Col, Image, listGroup, Card, Button, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProductScreen = () => {
    const staticFolder = 'http://localhost:3000/'
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState()
    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios.get(`http://localhost:8080/get/article/${id}`);
            setProduct(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);
  return (
    <>
    <Link className='btn btn-light my-3' to='/'>
        Go Back
    </Link>
    <Row>
        <Col md={6}>
            <Image src={staticFolder+product.imageArticle} alt={product.nomArticle} fluid
            style={
                {width: '30rem',
                height: '30rem'}
            }/>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.nomArticle}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h3>Price: ${product.prixUnitaire}</h3>
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                <strong>${product.prixUnitaire}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                                <strong>{product.quantite_stock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-grid gap-2">
                            <Button variant='dark' type='button'
                            disabled={
                                product.quantite_stock === 0
                            }
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen