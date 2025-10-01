import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

// ✅ Centralized texture paths
const texturePaths = {
  bedLamp: "textures/2BHK_2K/Texture_Set_1.webp",
  bedroom2: "textures/2BHK_2K/Texture_Set_2.webp",
  bedroom: "textures/2BHK_2K/Texture_Set_3.webp",
  setFour: "textures/2BHK_2K/Texture_Set_4.webp",
  setFive: "textures/2BHK_2K/Texture_Set_5.webp",
  setSix: "textures/2BHK_2K/Texture_Set_6_2.webp",
  glass: "textures/2BHK_2K/Texture_Set_Glass.webp",
  plane: "textures/2BHK_2K/Texture_Set_Plane.webp",
}

// ✅ Preload all textures
Object.values(texturePaths).forEach((path) => {
  useTexture.preload(path)
})

export function TwoBHK(props) {
  const { nodes, materials } = useGLTF("models/2BHK_Final-v1.glb");

  // ✅ Load all textures in one go (single suspension)
  const textures = useTexture(Object.values(texturePaths))
  textures.forEach((tex) => (tex.flipY = false))

  const [
    bedLampTexture,
    bedroom2Texture,
    bedroomTexture,
    setFourthTexture,
    setFifthTexture,
    setSixthTexture,
    setGlassTexture,
    setPlaneTexture,
  ] = textures

  return (
    <group {...props} dispose={null} position={[1, 0, -1]} rotation={[0,Math.PI,0]}>
      <mesh castShadow receiveShadow geometry={nodes.Bed_Lamp_Cabin.geometry}>
        <meshBasicMaterial map={bedLampTexture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Bedroom2.geometry}>
        <meshBasicMaterial map={bedroom2Texture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Study_Desk.geometry}>
        <meshBasicMaterial map={bedroom2Texture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.bedroom.geometry}>
        <meshBasicMaterial map={bedroomTexture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Sofa_DiningTable.geometry}>
        <meshBasicMaterial map={bedroomTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Retopo_Plant_Balcony.geometry}
      >
        <meshBasicMaterial map={setFourthTexture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Dishe_Stove.geometry}>
        <meshBasicMaterial map={setFourthTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fridge_Washing_Machine.geometry}
      >
        <meshBasicMaterial map={setFourthTexture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Sink.geometry}>
        <meshBasicMaterial map={setFourthTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_Chair_Balcony.geometry}
      >
        <meshBasicMaterial map={setFifthTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        >
        <meshBasicMaterial map={setFifthTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Golden.geometry}
        >
        <meshBasicMaterial map={setFifthTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
      >
        <meshBasicMaterial map={setSixthTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        >
        <meshBasicMaterial map={setGlassTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        >
        <meshBasicMaterial color={'#d0c6b7'} aoMap={setPlaneTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("models/2BHK_Final-v1.glb");
