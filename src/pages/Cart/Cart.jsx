import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header"
import CartSreen from '../../components/CartSreen/CartSreen'

const Cart = () => {
  return (
    <>
    <Header/>
        <Container style={{marginTop: '2rem'}}>
            <CartSreen/>    
        </Container>  
    <Footer/>
    </>
  )
}

export default Cart
