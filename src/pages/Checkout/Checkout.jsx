import React from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Container } from "react-bootstrap"
import CheckoutScreen from "../../components/CheckoutScreen/CheckoutScreen"

const Checkout = () => {
  return (
    <>
        <Header/>
            <Container style={{marginTop: '2rem'}}>
                <CheckoutScreen/>
            </Container>
        <Footer/>
       </>
  )
}

export default Checkout