import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'

// ✅ centralized texture paths
const texturePaths = {
  mask: "/textures/fbm_noise.png",
  set1: "textures/3BHK_2K/Texture_Set_1.webp",
  set2: "textures/3BHK_2K/Texture_Set_2.webp",
  set3: "textures/3BHK_2K/Texture_Set_3.webp",
  set4: "textures/3BHK_2K/Texture_Set_4.webp",
  set5: "textures/3BHK_2K/Texture_Set_5.webp",
  set6: "textures/3BHK_2K/Texture_Set_6.webp",
  set7: "textures/3BHK_2K/Texture_Set_7.webp",
  glass: "textures/3BHK_2K/Texture_Set_Glass.webp",
  plane: "textures/3BHK_2K/Texture_Set_Plane.webp",
}

// ✅ preload textures once
Object.values(texturePaths).forEach((path) => {
  useTexture.preload(path)
})

export function ThreeBHK(props) {
  const { nodes } = useGLTF("models/3BHK-v1.glb");

   // ✅ load all textures in one suspension
   const textures = useTexture(Object.values(texturePaths))
   textures.forEach((tex) => {
     if (tex) {
       tex.flipY = false
     }
   })
 
   // map back for clarity
   const [
     maskTex,
     texture_Set_1,
     texture_Set_2,
     texture_Set_3,
     texture_Set_4,
     texture_Set_5,
     texture_Set_6,
     texture_Set_7,
     texture_Set_Glass,
     texture_Set_Plane,
   ] = textures
 
   // repeat wrapping for mask
   if (maskTex) {
     maskTex.wrapS = maskTex.wrapT = THREE.RepeatWrapping
   }

  return (
    <group {...props} dispose={null} scale={0.83} position={[-0.6, 0, -0.8]}>
      <mesh  geometry={nodes.Base1.geometry}>
        <meshBasicMaterial map={texture_Set_1} />
      </mesh>
      <mesh  geometry={nodes.Base2.geometry}>
        <meshBasicMaterial map={texture_Set_2} />
      </mesh>
      <mesh  geometry={nodes.Bed.geometry}>
        <meshBasicMaterial map={texture_Set_3} />
      </mesh>
      <mesh  geometry={nodes.Bed001.geometry}>
        <meshBasicMaterial map={texture_Set_3} />
      </mesh>
      <mesh  geometry={nodes.Bed002.geometry}>
        <meshBasicMaterial map={texture_Set_3} />
      </mesh>
      <mesh  geometry={nodes.Plants.geometry}>
        <meshBasicMaterial map={texture_Set_4} />
      </mesh>
      <mesh
        
        geometry={nodes.Table_Chair_Balcony.geometry}
      >
        <meshBasicMaterial map={texture_Set_4} />
      </mesh>
      <mesh
       
        geometry={nodes.Livingroom_Objects.geometry}
      >
        <meshBasicMaterial map={texture_Set_4} />
      </mesh>
      <mesh geometry={nodes.Rug_Livingroom.geometry}>
        <meshBasicMaterial map={texture_Set_4} />
      </mesh>
      <mesh geometry={nodes.Dining_Table.geometry}>
        <meshBasicMaterial map={texture_Set_5} />
      </mesh>
      <mesh
       
        geometry={nodes.fridge_Washing_Machine.geometry}
      >
        <meshBasicMaterial map={texture_Set_5} />
      </mesh>
      <mesh geometry={nodes.Wardrob1_Cloths.geometry}>
        <meshBasicMaterial map={texture_Set_6} />
      </mesh>
      <mesh geometry={nodes.Wardrobe2_Cloths.geometry}>
        <meshBasicMaterial map={texture_Set_6} />
      </mesh>
      <mesh geometry={nodes.Wardrob3_Cloths.geometry}>
        <meshBasicMaterial map={texture_Set_6} />
      </mesh>
      <mesh geometry={nodes.Floor.geometry}>
        <meshBasicMaterial map={texture_Set_7} />
      </mesh>
      <mesh geometry={nodes.Gold.geometry}>
        <meshBasicMaterial map={texture_Set_7} />
      </mesh>
      <mesh geometry={nodes.Sink2.geometry}>
        <meshBasicMaterial map={texture_Set_7} />
      </mesh>
      <mesh geometry={nodes.Sink.geometry}>
        <meshBasicMaterial map={texture_Set_7} />
      </mesh>
      <mesh geometry={nodes.Lamp_Cabin.geometry}>
        <meshBasicMaterial map={texture_Set_7} />
      </mesh>
      <mesh geometry={nodes.Glass.geometry}>
        <meshBasicMaterial map={texture_Set_Glass} />
      </mesh>
      <mesh geometry={nodes.Plane.geometry}>
        <meshBasicMaterial color={"#d0c6b7"} aoMap={texture_Set_Plane} />
      </mesh>
    </group>
  );
}

useGLTF.preload("models/3BHK-v1.glb");
