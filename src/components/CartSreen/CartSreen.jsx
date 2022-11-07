import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message/Message' 
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import { addToCart, removeFromCart } from '../../actions/CartAction'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'

const CartSreen = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const qty = searchParams.get('qty') ? Number(searchParams.get('qty')) : 1
    
    const cart = useSelector( state => state.cartReducer)

    const {cartItems} = cart

    console.log(cartItems);

    useEffect(() => {
        if(id){
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const removeFromCartHandler = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    const checkoutHandler = () => {
        navigate('/register?redirect=shiping')
    }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 
        ? <Message>Your Cart Is Emty <Link to='/'>Go Back</Link> </Message>
        : <ListGroup variant='flush'>
            {cartItems.map(item => 
                <ListGroup.Item key ={item.product}>
                    <Row>
                        <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded/>
                        </Col>
                        <Col md={3}>
                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                        </Col>
                        <Col md={2}>
                            ${item.price}
                        </Col>
                        <Col md={2}>
                            <Form.Control as='select' value = {item.qty} onChange={(e) =>
                                dispatch(addToCart(item.product, Number(e.target.value)))
                                        }>
                                            {
                                            [...Array(item.quantityInStock).keys()].map((x) =>(
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            ))
                                            }
                            </Form.Control>
                        </Col>
                        <Col md={2}>
                            <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
                )}
            </ListGroup>}
      </Col>
      <Col md={4}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                     items
                     </h2>
                     ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="d-grid gap-2">
                        <Button
                            onClick={checkoutHandler}
                            variant='dark' type='button'
                            disabled={
                            cartItems.length === 0
                            }
                            >
                            Proceed To Checkout
                        </Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartSreen
