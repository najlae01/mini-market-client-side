import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useEffect } from 'react'
import Message from '../Message/Message'
import { useSelector, useDispatch } from 'react-redux'
import { addCommande, listLigneCommande } from '../../actions/CartAction'
import { getClientByUserId } from '../../actions/ClientAction'

const CheckoutScreen = () => {


    const {userInfo} = useSelector((state) => state.authReducer)

    const {client} = useSelector((state) => state.getClientByUserReducer)


    useEffect(() => {
          dispatch(getClientByUserId(userInfo.id))
    }, [userInfo])

    const dispatch = useDispatch() 

    const cart = useSelector((state) => state.cartReducer)

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    cart.itemsPrice = addDecimals(cart.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty, 0
        ))

    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
    
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)

    cart.totalPrice = (
        Number(cart.itemsPrice) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
      ).toFixed(2)

    const {listligneCommande} = useSelector((state) => state.ListLigneCommandeReducer)
    console.log(listligneCommande);
    useEffect(() => {
        dispatch(listLigneCommande())
    }, [dispatch])

    const {error, success, commande} = useSelector((state) => state.addCommandeReducer)

    const placeOrderHandler = () => {
            const commande = {
                "client": client,
                "lignesCmd": listligneCommande
            }
            dispatch(addCommande(commande))
    }


  return (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
            </ListGroup.Item>

            <ListGroup.Item>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>{success && <Message variant='success'>Order placed</Message>}

                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>   
                <div className="d-grid gap-2">
                    <Button
                    type='button' variant='dark'
                    disabled={cart.cartItems === 0}
                    onClick={placeOrderHandler}
                    >
                    Place Order
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

export default CheckoutScreen 