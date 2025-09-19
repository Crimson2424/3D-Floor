import React, { useEffect } from "react";
import { MeshReflectorMaterial, MeshRefractionMaterial, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'

export function Studio(props) {
  const { nodes, materials } = useGLTF("models/studio-baked2-v1.glb");

  //Plane texture
  const planTexture = useTexture("textures/Plane2.png");
  planTexture.flipY = false;
  
  //Floor texture
  const floorTex = useTexture("textures/Floor.png");
  floorTex.flipY = false;


  //Base texture
  const baseTexture = useTexture("textures/editedBase3.png");
  baseTexture.flipY = false;


  //Glass texture
  const glassTexture = useTexture("textures/Glass.png");
  glassTexture.flipY = false;



  //Gold texture
  const goldTexture = useTexture("textures/Gold.png");
  goldTexture.flipY = false;



  
  // useEffect(() => {
  //   if (!floorTex || !materials?.floor) return;
  //   floorTex.flipY = false;
  //   materials.floor.map = floorTex;
  //   materials.floor.needsUpdate = true;
  // }, [floorTex, materials]);
  

  return (
    <group {...props} dispose={null} rotation={[0, Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
      >
        <meshBasicMaterial map={planTexture}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
      >
        <meshBasicMaterial map={baseTexture} side={THREE.DoubleSide}/>
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

useGLTF.preload("models/studio-baked-v1.glb");
