import React, { useRef } from 'react'
import { useGLTF, useKTX2, useTexture } from '@react-three/drei'
import { useControls } from 'leva';

// ✅ centralize texture paths
const texturePaths = {
  plane: "textures/1BHK_2K/Plane.webp",
  gold: "textures/1BHK_2K/Gold.webp",
  livingroom: "textures/1BHK_2K/Livingroom.webp",
  bedSofa: "textures/1BHK_2K/Bed_Sofa.webp",
  bedroom: "textures/1BHK_2K/Bedroom.webp", // using ktx2 where possible
  base: "textures/1BHK_2K/Base.webp",
  floor: "textures/1BHK_2K/Floor.webp",
  glass: "textures/1BHK_2K/Glasses.webp",
}

// ✅ preload all textures
Object.values(texturePaths).forEach((path) => {
  useTexture.preload(path)
})

export function OneBHK(props) {
  const { nodes } = useGLTF('models/1BHK_Baked-v1.glb')

  // const {colorOneBHk} = useControls({
  //   colorOneBHk:{
  //     value: '#B8AFA2'
  //   }
  // })

    // load all textures at once → only one suspension
  const textures = useTexture(Object.values(texturePaths))
  textures.forEach((tex) => (tex.flipY = false))

  // map back to names
  const [
    planeTexture,
    goldTexture,
    livingroomTexture,
    bedSofaTexture,
    bedroomTexture,
    baseTexture,
    floorTexture,
    glassTexture,
  ] = textures
    

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Gold.geometry}
      >
        <meshBasicMaterial map={goldTexture}/>
      </mesh>
      <mesh
        geometry={nodes.Livingroom.geometry}
      >
        <meshBasicMaterial map={livingroomTexture}/>
      </mesh>
      <mesh
        geometry={nodes.Bed_Sofa.geometry}
      >
        <meshBasicMaterial map={bedSofaTexture}/>
      </mesh>
      <mesh
        geometry={nodes.Bedroom.geometry}
        >
          <meshBasicMaterial map={bedroomTexture}/>
        </mesh>
      <mesh
        geometry={nodes.Base.geometry}
      >
        <meshBasicMaterial map={baseTexture}/>
      </mesh>
      <mesh
        geometry={nodes.Plane.geometry}
      >
        <meshBasicMaterial color={'#d0c6b7'} aoMap={planeTexture}/>
      </mesh>
      <mesh
        geometry={nodes.Floor.geometry}
      >
        <meshBasicMaterial map={floorTexture}/>
      </mesh>
      <mesh
        geometry={nodes.Glasses.geometry}
      >
        <meshBasicMaterial map={glassTexture}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('models/1BHK_Baked-v1.glb')