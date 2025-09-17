import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function OneBHK(props) {
  const { nodes, materials } = useGLTF('models/Base_Floor_1BHK.compressed.glb')


  return (
    <group {...props} dispose={null}>
      <group position={[-4.943, 0, -8.2]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Walls_1.geometry}
          material={materials.Main_walls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Walls_2.geometry}
          material={materials.Material___2147483638}
        />
      </group>
      <group position={[-3.78, -0.02, 0.488]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor_1.geometry}
          material={materials.Material__2147482900}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor_2.geometry}
          material={materials.Material__2147482921}
        />
      </group>
      <group position={[-6.211, 1.3, 2.221]} rotation={[0, -Math.PI / 2, 0]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Windows_1.geometry}
          material={materials.Glass_Clear}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Windows_2.geometry}
          material={materials.Material__2147482897}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/Base_Floor_1BHK.compressed.glb')