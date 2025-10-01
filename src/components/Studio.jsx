import React, { useEffect } from "react";
import { MeshReflectorMaterial, MeshRefractionMaterial, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { useControls } from "leva";

// ✅ centralized texture paths
const texturePaths = {
  plane: "textures/Studio_2K/Plane_SHADOW.webp",
  floor: "textures/Studio_2K/Floor.webp",
  base: "textures/Studio_2K/Base.webp",
  glass: "textures/Studio_2K/Glass.webp",
  gold: "textures/Studio_2K/Gold.webp",
  sofa: "textures/Studio_2K/Sofa.webp",
  bed: "textures/Studio_2K/Bed.webp",
}

// ✅ preload textures once
Object.values(texturePaths).forEach((path) => {
  useTexture.preload(path)
})

export function Studio(props) {
  const { nodes } = useGLTF("models/studio-baked-final-v1.glb");

  // const {color} = useControls({
  //   color:{
  //     value: '#BCB4AC'
  //   }
  // })

 // ✅ load all textures in one go (single suspension)
 const textures = useTexture(Object.values(texturePaths))
 textures.forEach((tex) => (tex.flipY = false))

 // map back for clarity
 const [
   planTexture,
   floorTex,
   baseTexture,
   glassTexture,
   goldTexture,
   sofaTexture,
   bedTexture,
 ] = textures

  return (
    <group {...props} dispose={null} rotation={[0, Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
      >
        <meshStandardMaterial color={'#d8cdbe'} lightMap={planTexture}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
      >
        <meshBasicMaterial map={baseTexture}/>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Bed.geometry}>
      <meshBasicMaterial map={bedTexture}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sofa.geometry}
        material={nodes.Sofa.material}
      >
        <meshBasicMaterial map={sofaTexture}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gold.geometry}
      >
        <meshBasicMaterial map={goldTexture}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        // material={materials.Glass}
      >
        <meshBasicMaterial map={glassTexture}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
      >
        <meshBasicMaterial map={floorTex}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("models/studio-baked-final-v1.glb");
