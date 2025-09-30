import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { DissolveMaterial } from "./DissolveMaterial";
import CustomShaderMaterial from 'three-custom-shader-material'

export function ThreeBHK(props) {
  const { nodes } = useGLTF("models/3BHK-v1.glb");

  //Mask texture
  const maskTex = useTexture("/textures/fbm_noise.png");
  maskTex.wrapS = maskTex.wrapT = THREE.RepeatWrapping;

  //texture_Set_1 texture
  const texture_Set_1 = useTexture("textures/3BHK_Bakes/Texture_Set_1.webp");
  texture_Set_1.flipY = false;

  //texture_Set_1 texture
  const texture_Set_2 = useTexture("textures/3BHK_Bakes/Texture_Set_2.webp");
  texture_Set_2.flipY = false;

  //texture_Set_3 texture
  const texture_Set_3 = useTexture("textures/3BHK_Bakes/Texture_Set_3.webp");
  texture_Set_3.flipY = false;

  //texture_Set_4 texture
  const texture_Set_4 = useTexture("textures/3BHK_Bakes/Texture_Set_4.webp");
  texture_Set_4.flipY = false;

  //texture_Set_5 texture
  const texture_Set_5 = useTexture("textures/3BHK_Bakes/Texture_Set_5.webp");
  texture_Set_5.flipY = false;

  //texture_Set_6 texture
  const texture_Set_6 = useTexture("textures/3BHK_Bakes/Texture_Set_6.webp");
  texture_Set_6.flipY = false;

  //texture_Set_7 texture
  const texture_Set_7 = useTexture("textures/3BHK_Bakes/Texture_Set_7.webp");
  texture_Set_7.flipY = false;

  //texture_Set_Glass texture
  const texture_Set_Glass = useTexture(
    "textures/3BHK_Bakes/Texture_Set_Glass.webp"
  );
  texture_Set_Glass.flipY = false;

  //texture_Set_Plane texture
  const texture_Set_Plane = useTexture(
    "textures/3BHK_Bakes/Texture_Set_Plane.webp"
  );
  texture_Set_Plane.flipY = false;

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
