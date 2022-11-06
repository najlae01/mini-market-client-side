import React, {Suspense} from "react"
import Store from "../../components/Store/Store"
import './Home.css'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Container } from "react-bootstrap"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import PostSide from "../../components/PostSide/PostSide"
import ProductsScreen from "../../components/ProductsScreen/ProductsScreen"

const Home = () => {
    return (
        <div className="Home">
            <Header/>
            {/*<PostSide className="py-3"/>
            <Canvas className="canvas">
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <Store/>
                </Suspense>
            </Canvas> */}
            <Container style={{margin: '0 10rem'}}>
                <ProductsScreen/>
            </Container>
            <Footer/>
       </div>
    )
}

export default Home