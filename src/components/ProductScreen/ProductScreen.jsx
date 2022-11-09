import React from 'react'
import { Row, Col, Image, listGroup, Card, Button, ListGroup, Form } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getArticle} from '../../actions/ArticleAction'
import {addLigneCommande} from '../../actions/CartAction'
import Loader from '../Loader/Loader'
import Message from '../Message/Message'

const ProductScreen = () => {

    const [quantiy, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    let {product, loading, error} = useSelector((state)=> state.getArticleReducer)
    useEffect(() => {
        dispatch(getArticle(id))
      }, []);

    

    const submitHandler = (e) =>{
        e.preventDefault();
        const newLigneCommande = {
            quantiteCommande: quantiy
        }
        dispatch(addLigneCommande(product.codeArticle, newLigneCommande))
        
    }
    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${quantiy}`)
      }
  return (
    <>
    <Link className='btn btn-light my-3' to='/home'>
        Go Back
    </Link>
    {loading ? <Loader/> : error ? <Message variant= 'danger'>{error}</Message>
    
    : (
        <Row>
        <Col md={6}>
            <Image src={process.env.REACT_APP_PUBLIC_FOLDER+product.imageArticle} alt={product.nomArticle} fluid
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
                    {/*<Form onSubmit={submitHandler}>*/}
                        {product.quantite_stock > 0 &&(
                            <ListGroup.Item>
                                <Row>
                                    <Col>Quantity</Col>
                                    <Col>
                                        <Form.Control as='select' value = {quantiy} onChange={(e) =>
                                        setQuantity(e.target.value)
                                        }>
                                            {
                                            [...Array(product.quantite_stock).keys()].map((x) =>(
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            ))
                                            }
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}

                    <ListGroup.Item>
                        <div className="d-grid gap-2">
                            <Button
                            type='button'
                            variant='dark'
                            disabled={
                                product.quantite_stock === 0
                            }
                            onClick={addToCartHandler}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </ListGroup.Item>*
                </ListGroup>
            </Card>
        </Col>
    </Row>
    )}
    
    </>
  )
}

export default ProductScreen