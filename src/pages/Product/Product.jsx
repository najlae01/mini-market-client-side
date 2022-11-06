import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import ProductScreen from "../../components/ProductScreen/ProductScreen"
import { Container } from "react-bootstrap"

const Product = () => {
    return (
        <>
            <Header/>
            <Container>
                <ProductScreen/>
            </Container>
            <Footer/>
       </>
    )
}

export default Product