import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function TwoBHK(props) {
  const { nodes, materials } = useGLTF("models/2BHK_Final-v1.glb");

  //Bed_Lamp_Cabin texture
  const bedLampTexture = useTexture("textures/2BHK_Bakes/Texture_Set_1.webp");
  bedLampTexture.flipY = false;

  //Bedroom2 and Study Desk texture
  const bedroom2Texture = useTexture("textures/2BHK_Bakes/Texture_Set_2.webp");
  bedroom2Texture.flipY = false;

  //Bedroom and Sofa_DiningTable texture
  const bedroomTexture = useTexture("textures/2BHK_Bakes/Texture_Set_3.webp");
  bedroomTexture.flipY = false;

  //Dish_Stove, firdge_Washing_Machine, Retopo_Plant_Balcony and Sink texture
  const setfourthTexture = useTexture("textures/2BHK_Bakes/Texture_Set_4.webp");
  setfourthTexture.flipY = false;

  //Floor, Golden, and Table_Chair_Balcony
  const setFifthTexture = useTexture("textures/2BHK_Bakes/Texture_Set_5.webp");
  setFifthTexture.flipY = false;

  //Base
  const setSixthTexture = useTexture("textures/2BHK_Bakes/Texture_Set_6_2.webp");
  setSixthTexture.flipY = false;

   //Glass
   const setGlassTexture = useTexture("textures/2BHK_Bakes/Texture_Set_Glass.webp");
   setGlassTexture.flipY = false;

   //Plane shadow
   const setPlaneTexture = useTexture("textures/2BHK_Bakes/Plane.webp");
   setPlaneTexture.flipY = false;

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
        <meshBasicMaterial map={setfourthTexture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Dishe_Stove.geometry}>
        <meshBasicMaterial map={setfourthTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fridge_Washing_Machine.geometry}
      >
        <meshBasicMaterial map={setfourthTexture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Sink.geometry}>
        <meshBasicMaterial map={setfourthTexture} />
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
