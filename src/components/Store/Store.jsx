import React from "react";


import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
//import texture from "../../img/Texture.tif"

const Store = () =>{

    //const colorMap = useLoader(TextureLoader, texture)

    return (
        <mesh rotation={[90, 0, 20]}>
          <boxBufferGeometry attach="geometry"
          args = {[3, 3, 3]}/>  
          {/*<meshLambertMaterial attach="material" color="blue"/>
          <meshStandardMaterial map={colorMap} />*/}
          <meshNormalMaterial attach="material" />
        </mesh>
    )
}

export default Store