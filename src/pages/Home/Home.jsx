import React, {Suspense} from "react"
import Store from "../../components/Store/Store"
import './Home.css'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const Home = () => {
    return (
       <div className="Home">
        <Canvas className="canvas">
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
                <Store/>
            </Suspense>
           
        </Canvas> 
       </div>
    )
}

export default Home