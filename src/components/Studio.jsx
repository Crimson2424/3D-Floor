import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export function Studio(props) {
  const { nodes, materials } = useGLTF('/models/studio-v1.glb')
  const group = useRef()

  useEffect(() => {
    if (!group.current) return
    group.current.traverse((object) => {
      if (object.isMesh) {
        const baseColor = object.material && object.material.color ? object.material.color.clone() : new THREE.Color(0xffffff)
        object.material = new THREE.MeshStandardMaterial({ color: '#adaaaa' })
        object.material.metalness = 0.2
        object.material.roughness = 0.6
        object.castShadow = true
        object.receiveShadow = true
      }
    })
  }, [])

  // const { offsetX, offsetY, offsetZ } =
  //   useControls({
      
  //     offsetX: {
  //       value: -3.77,
  //       min: -10,
  //       max: 10,
  //       step: 0.01,
  //     },
  //     offsetY: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //       step: 0.01,
  //     },
  //     offsetZ: {
  //       value: -2.43,
  //       min: -10,
  //       max: 10,
  //       step: 0.01,
  //     },
  //   });

  
  return (
    <group ref={group} {...props} dispose={null} position={[-3.77, 0.0,  -2.43]} rotation={[0, 1.8, 0]}>
      <group position={[0.881, 0, 3.163]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line001.geometry}
          
          scale={0.001}
        >
          <meshStandardMaterial />
        </mesh>
      </group>
      <group position={[-4.278, 2.102, 1.89]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133867.geometry}
          scale={0.001}
        >
          <meshStandardMaterial />
        </mesh>
      </group>
      <group position={[1.721, 0.321, 0.187]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle014.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        >
          <meshStandardMaterial />
        </mesh>
      </group>
      <group position={[2.606, 1.3, 1.055]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle017.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.202, 0.443, -0.951]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.125, 1.125, 0.991]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0834.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.202, 0.416, -0.951]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.192, 1.192, 0.991]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0833.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.201, 0.934, -0.949]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.556, 0.556, 0.535]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0837.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.201, 0.867, -0.949]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.556, 0.556, 0.608]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0836.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[0.947, 0.498, -3.482]} rotation={[0, -1.571, 0]} scale={[6.549, 10, 10]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TV.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.244, 0.25, -3.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.987, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#1_177884'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.244, 0.25, -3.305]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.987, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#4_177882'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.244, 0.464, -3.02]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.987, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#2_177879'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.019, 0.577, -0.032]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.067, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Difference_697201.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.019, 0.752, -0.14]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.067, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Difference_697199.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.672, 0.677, -0.542]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[1.067, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Component#182_697196'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.019, 0.677, -0.124]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.067, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Component#185_697190'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.019, 0.752, -0.124]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.067, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Difference_831504.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.019, 0.777, -0.032]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.067, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Component#207_831508'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.672, 0.777, -0.032]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.067, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Component#205_831505'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.019, 0.877, -0.012]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.067, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Component#188_831501'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.879, 0.75, -3.5]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NECKLACE_BOX_SET.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.76, 1.367, -4.424]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PERFUME_SET.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.083, 0.012, -3.046]}
        rotation={[Math.PI / 2, 0, -0.06]}
        scale={[-0.021, -0.021, -0.047]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dskj2021112029_4217313.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.083, 0.012, -3.046]}
        rotation={[Math.PI / 2, 0, -0.06]}
        scale={[-0.021, -0.021, -0.047]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dskj2021112033_4217310.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.087, 0.307, -2.954]}
        rotation={[Math.PI / 2, 0, -0.06]}
        scale={[-0.039, -0.039, -0.043]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dskj2021112027_4217307.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.083, 0.001, -3.048]}
        rotation={[Math.PI / 2, 0, -0.06]}
        scale={[-0.027, -0.027, -0.061]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dskj2021112032_4217304.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[2.53, 1.3, 2.86]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2106775208.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-4.832, 0, 3.105]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.72, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#28_266780001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.291, 0, 2.53]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#41_266764001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.291, 0, 2.53]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133872.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.634, 0, 2.53]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133873.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[1.243, 0.044, 1.752]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.701}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Contour_Ovoid_Coffee_Table001.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.025, -0.001, 2.601]} rotation={[-Math.PI / 2, 0, 0]} scale={0.812}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_Bedside_001_001.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.025, 0.484, 2.601]} rotation={[-Math.PI / 2, 0, 0]} scale={0.665}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Table_003_001.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.025, 0.515, 2.601]} rotation={[-Math.PI / 2, 0, 0]} scale={0.665}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Table_003_light_source001.geometry}
          material={materials['fallback Material.001']}
          scale={0.001}
        />
      </group>
      <group position={[-4.168, 0.73, 1.363]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2106784193.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-4.168, 0.73, 2.348]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2106784194.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.037, 0.301, 1.759]} rotation={[-Math.PI / 2, 0, -0.823]} scale={0.513}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Magazine_193_001_001.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.203, 0.885, -0.951]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Corona_Light009.geometry}
          material={materials['fallback Material.002']}
          scale={0.001}
        />
      </group>
      <group position={[0.311, 0.499, -3.468]} rotation={[-Math.PI / 2, 0, -2.128]} scale={0.643}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Books_007_001.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.047, 0.002, 1.747]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.443, 0.338, 0.202]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.古竹o1080.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.09, 0.82, 2.835]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444791.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.025, 0.484, 2.601]} rotation={[-Math.PI / 2, 0, 0]} scale={0.665}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133883.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.025, 1.157, 2.601]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.665}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133884.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[2.381, 0, 1.198]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828121.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[2.381, 0, -0.337]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828122.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.931, 0, -1.987]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828123.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.06, 0, -0.646]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828124.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.06, 0, -1.996]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828125.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-3.56, 0, -0.246]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828126.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-3.162, 0, -2.696]} rotation={[Math.PI / 2, 0, 0]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828127.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[0.84, 0, -5.246]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828128.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-3.56, 0.8, -0.246]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828129.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[0.881, 0.8, 3.163]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828130.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[-0.06, 0.8, -0.646]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828131.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[2.381, 0.8, -0.337]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828132.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[1.931, 0.8, -1.987]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828133.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[-0.06, 0.8, -1.996]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828134.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[-3.162, 0.8, -2.696]} rotation={[Math.PI / 2, 0, 0]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828135.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[0.84, 0.8, -5.246]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828136.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[-2.625, 0.8, 1.858]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828137.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[-2.935, 0.8, 1.36]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828138.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[-2.058, 0, 2.53]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#41_266764002'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.058, 0, 2.53]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133886.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.401, 0, 2.53]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133887.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.625, 0, 1.858]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828139.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[2.078, 0.885, -0.951]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Corona_Light011.geometry}
          material={materials['fallback Material.004']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.079, 0.416, -0.951]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.192, 1.192, 0.991]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq989.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.079, 0.443, -0.951]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.125, 1.125, 0.991]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq990.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.08, 0.867, -0.949]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.556, 0.556, 0.608]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq991.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.08, 0.934, -0.949]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.556, 0.556, 0.535]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq992.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.868, 0.73, -0.562]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444793.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-1.719, 0.73, -0.562]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444794.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-1.69, 2.102, -1.07]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133888.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.693, 0.73, -0.087]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444795.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.693, 0.73, 0.623]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444796.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.358, 2.102, 0.553]} rotation={[Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133889.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[2.58, 1.3, 3.37]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444797.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[2.56, 0.095, -0.245]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133890.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group position={[2.61, 0.095, 0.265]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133891.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group position={[2.61, 0.095, -2.935]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133893.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group position={[2.606, 1.3, -2.145]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444798.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[2.58, 1.3, 0.17]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444800.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[2.56, 0.095, -3.665]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133894.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group position={[2.53, 1.3, -0.56]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444801.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[2.61, 0.095, -4.395]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133895.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group position={[2.58, 1.3, -1.29]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444802.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[2.56, 0.095, -5.125]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133896.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group position={[2.53, 1.3, -2.02]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444803.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.244, 0.464, 1.405]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.987, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#2_177879002'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[0.947, 0.498, 0.953]} rotation={[0, -1.571, 0]} scale={[6.549, 10, 10]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TV002.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[0.356, -0.05, -2.212]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444804.geometry}
          material={materials['fallback Material.006']}
          scale={0.001}
        />
      </group>
      <group position={[0.514, -0.05, 0.038]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444805.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-1.006, -0.05, 1.56]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828140.geometry}
          material={materials['fallback Material.006']}
          scale={0.001}
        />
      </group>
      <group position={[2.381, 0.8, 1.198]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828141.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[-0.863, 0, 4.373]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133897.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-4.192, 0, 4.373]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133898.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.019, 0.752, -0.543]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1.067, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Difference_831504002.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.244, 0.25, 1.404]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.987, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#1_177884002'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.244, 0.25, 1.119]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.987, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#4_177882002'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[1.94, 0, -2.111]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.404, 0.313, 0.202]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bed.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.18, 0, 1.981]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444806.geometry}
          material={materials['fallback Material.007']}
          scale={0.001}
        />
      </group>
      <group position={[1.721, 1.121, 0.187]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2133444807.geometry}
          material={materials['fallback Material.003']}
          scale={0.001}
        />
      </group>
      <group position={[0.365, 0, 2.552]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133899.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[0.365, 0, 3.142]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object2113133900.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.025, 0.815, 2.599]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Corona_Light012.geometry}
          material={materials['fallback Material.008']}
          scale={0.001}
        />
      </group>
      <group position={[-1.686, 0.699, -2.678]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Corona_Light013.geometry}
          material={materials['fallback Material.009']}
          scale={0.001}
        />
      </group>
      <group position={[-1.686, 0.526, -2.678]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Corona_Light013001.geometry}
          material={materials['fallback Material.009']}
          scale={0.001}
        />
      </group>
      <group position={[-1.686, 1.498, -2.678]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Corona_Light013002.geometry}
          material={materials['fallback Material.009']}
          scale={0.001}
        />
      </group>
      <group position={[-1.686, 1.308, -2.678]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Corona_Light013003.geometry}
          material={materials['fallback Material.009']}
          scale={0.001}
        />
      </group>
      <group position={[-1.686, 0.89, -2.678]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Corona_Light013004.geometry}
          material={materials['fallback Material.009']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.957, 0.537, -0.76]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[7.237, 9.421, 8.52]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0799.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.957, 0.363, -1.993]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[7.237, 8.52, 9.421]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0800.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.944, 0.537, -0.794]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[7.237, 8.52, 9.421]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0802.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.978, 0.579, -0.975]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[7.237, 8.52, 9.421]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0803.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.949, 0.536, -1.7]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[7.237, 8.52, 9.421]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0804.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[1.293, 0.054, -1.554]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[7.237, 8.52, 9.421]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0805.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.7, 0.628, -1.235]}
        rotation={[0.472, 0, Math.PI]}
        scale={[-5.842, -6.71, -6.582]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0807.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[1.25, 0.628, -1.235]}
        rotation={[-2.669, 0, -Math.PI]}
        scale={[5.842, 6.71, 6.582]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0810.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[1.659, 0.237, -0.896]}
        rotation={[0, 1.571, 0]}
        scale={[8.52, 9.421, 7.237]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0866.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[1.659, 0.237, -0.896]}
        rotation={[0, 1.571, 0]}
        scale={[8.52, 9.421, 7.237]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0867.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.241, 0.237, -0.896]}
        rotation={[Math.PI, 1.571, 0]}
        scale={[-8.52, -9.421, -7.237]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0868.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.724, 0.357, -2.074]}
        rotation={[-1.73, 0, Math.PI]}
        scale={[0.464, 0.504, 0.771]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0946.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.724, 0.357, -2.074]}
        rotation={[-1.73, 0, Math.PI]}
        scale={[0.464, 0.504, 0.771]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0947.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.724, 0.357, -2.074]}
        rotation={[-1.73, 0, Math.PI]}
        scale={[0.464, 0.504, 0.771]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0948.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.724, 0.357, -2.074]}
        rotation={[-1.73, 0, Math.PI]}
        scale={[0.464, 0.504, 0.771]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0949.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.713, 0.357, -2.074]}
        rotation={[-1.73, 0, Math.PI]}
        scale={[0.464, 0.504, 0.771]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0952.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.2, 0.025, -0.95]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.724, 0.793, 0.828]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq955.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.2, 0.418, -0.95]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.724, 0.793, 0.828]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq956.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.2, 0.025, -0.95]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.724, 0.793, 0.828]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq957.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.633, 0.194, -1.778]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[-0.632, -0.758, -0.725]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0728.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.291, 0.239, -2.928]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0732.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.291, 0.197, -2.463]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0733.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.291, 0.514, -2.463]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0734.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.291, 0.355, -2.463]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0736.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 0.053, -1.374]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0737.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 0.023, -1.374]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0738.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.291, 0.673, -2.463]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0739.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 0.523, -1.374]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0740.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 0.537, -2.928]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0741.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.743, 0.537, -2.928]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0742.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 0.523, -1.374]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0743.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 0.511, -1.374]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0744.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 0.537, -2.928]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0745.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 1.213, -2.678]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0746.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 0.511, -1.374]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0747.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.291, 0.239, -3.424]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0755.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.43, 0.623, -2.732]}
        rotation={[-0.419, 0.246, -1.655]}
        scale={[1.177, 0.837, 0.55]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0756.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.405, 1.506, -3.629]}
        rotation={[0, -1.571, 0]}
        scale={[0.618, 0.742, 0.71]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0757.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.405, 1.506, -3.129]}
        rotation={[0, -1.571, 0]}
        scale={[0.618, 0.742, 0.71]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0758.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.43, 0.623, -2.855]}
        rotation={[-0.419, 0.246, -1.655]}
        scale={[1.177, 0.837, 0.55]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0769.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.43, 0.623, -2.793]}
        rotation={[-0.419, 0.246, -1.655]}
        scale={[1.177, 0.837, 0.55]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0770.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 1.213, -1.374]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0773.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 1.213, -2.678]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0774.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 1.198, -1.374]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0775.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.744, 1.213, -1.374]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0776.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.405, 1.506, -2.629]}
        rotation={[0, -1.571, 0]}
        scale={[0.618, 0.742, 0.71]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq958.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.405, 1.506, -2.128]}
        rotation={[0, -1.571, 0]}
        scale={[0.618, 0.742, 0.71]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq959.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.294, 0.239, -2.461]}
        rotation={[-Math.PI, 1.528, -Math.PI]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq960.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.506, 0.087, -3.321]}
        rotation={[-1.571, 0, 1.568]}
        scale={[35.293, 33.442, 34.938]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0719.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.506, 0.267, -3.321]}
        rotation={[-1.57, 0, 1.571]}
        scale={[35.293, 33.442, 34.938]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0720.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.329, 0.177, -3.321]}
        rotation={[-1.571, 0, 1.57]}
        scale={[35.293, 22.347, 34.938]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0721.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.506, 0.265, -3.321]}
        rotation={[-1.571, 0, 1.567]}
        scale={[35.293, 33.442, 34.938]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0722.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.334, 0.286, -3.429]}
        rotation={[-1.571, 0, 1.566]}
        scale={[35.293, 33.442, 34.938]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0723.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.51, 0.038, -3.024]}
        rotation={[1.577, -0.014, -2.879]}
        scale={[-0.619, -0.652, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0763.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.514, -0.308, -2.799]}
        rotation={[1.571, 0, Math.PI]}
        scale={[-0.765, -0.811, -0.998]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0764.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.508, 0.038, -2.891]}
        rotation={[1.571, 0, Math.PI]}
        scale={[-0.617, -0.654, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0765.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.509, 0.038, -2.891]}
        rotation={[1.571, 0, Math.PI]}
        scale={[-0.617, -0.654, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0766.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.457, -0.215, -3.242]}
        rotation={[1.554, 0.007, -1.308]}
        scale={[-0.652, -0.619, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0767.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.517, 0.038, -2.55]}
        rotation={[1.577, -0.019, -2.922]}
        scale={[-0.621, -0.65, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq963.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.51, -0.308, -2.324]}
        rotation={[1.57, -0.006, 3.099]}
        scale={[-0.764, -0.811, -0.998]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq964.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.509, 0.038, -2.417]}
        rotation={[1.57, -0.006, 3.099]}
        scale={[-0.617, -0.655, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq965.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.475, -0.215, -2.77]}
        rotation={[1.548, 0.011, -1.351]}
        scale={[-0.65, -0.621, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq967.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.601, -0.621, -3.677]}
        rotation={[1.565, -0.005, -1.614]}
        scale={[-0.811, -0.764, -0.998]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq972.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.51, -0.308, -1.845]}
        rotation={[1.57, -0.006, 3.099]}
        scale={[-0.764, -0.811, -0.998]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq974.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.62, -0.621, -5.161]}
        rotation={[1.563, -0.006, -1.624]}
        scale={[-0.812, -0.764, -0.998]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq983.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.518, 0.038, -3.556]}
        rotation={[1.577, -0.02, -2.932]}
        scale={[-0.622, -0.65, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq984.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.507, -0.308, -3.33]}
        rotation={[1.57, -0.007, 3.089]}
        scale={[-0.764, -0.812, -0.998]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq985.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.508, 0.038, -3.423]}
        rotation={[1.57, -0.007, 3.089]}
        scale={[-0.617, -0.655, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq986.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.508, 0.038, -3.423]}
        rotation={[1.57, -0.007, 3.089]}
        scale={[-0.617, -0.655, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq987.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.212, 0.989, -2.935]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[-0.834, -1, -0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0783.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.212, 0.989, -2.416]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0784.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.241, 0.989, -3.427]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[-0.834, -1, -0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0785.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.241, 0.989, -1.927]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0786.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.241, 1.223, -3.427]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[-0.834, -1, -0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0787.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.241, 1.223, -1.927]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0788.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.212, 1.223, -2.416]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0789.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.212, 1.223, -2.935]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[-0.834, -1, -0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0790.geometry}
          material={materials['fallback Material.005']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.22, 1.223, -2.416]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0779.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.248, 1.223, -1.928]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.834, 1, 0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0780.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.248, 1.223, -3.426]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[-0.834, -1, -0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0781.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.22, 1.223, -2.936]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[-0.834, -1, -0.957]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq0782.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.431, 0.982, -0.501]}
        rotation={[0, -1.571, 0]}
        scale={[1.612, 1.612, 2.421]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle2106775203.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.472, 1.011, -0.436]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.073, 0.931, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arch_056_016_012.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.668, 0.6, -3.622]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[-1, -1, -8.333]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box_4217168.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.786, 0.964, -3.512]} rotation={[-Math.PI / 2, 0, 0.49]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dizipro_006.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.783, 0.964, -3.518]} rotation={[-Math.PI / 2, 0, 0.49]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dizipro_007.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.786, 0.824, -3.512]} rotation={[-Math.PI / 2, 0, 0.49]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dizipro_008.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-1.214, 0.621, 2.807]} rotation={[Math.PI, -0.262, Math.PI]} scale={1.089}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.setka1.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-1.54, 0.621, 2.807]} rotation={[Math.PI, -0.262, Math.PI]} scale={1.089}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.setka2.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-1.398, 0.866, 2.832]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={1.089}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.moyka.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.397, 0.957, 3.069]}
        rotation={[-Math.PI / 2, 0, -2.542]}
        scale={[1.142, 1.142, 1.447]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.355, 1.208, 2.842]}
        rotation={[1.571, 0, -2.17]}
        scale={[1.01, 1.01, 1.447]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.366, 1.15, 2.901]}
        rotation={[Math.PI, 0.186, -2.356]}
        scale={[1.142, 1.142, 1.447]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-1.387, 1.113, 3.012]} rotation={[0, 1.385, 0]} scale={1.089}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line009.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-1.39, 0.93, 3.07]} rotation={[Math.PI, -1.385, 2.356]} scale={1.388}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.453, 0.904, 3.058]}
        rotation={[-0.889, 0.106, -0.903]}
        scale={[0.555, 0.555, 1.447]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.434, 0.93, 3.062]}
        rotation={[Math.PI, -1.385, 2.356]}
        scale={[1.536, 1.536, 0.727]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.397, 0.87, 3.069]}
        rotation={[-Math.PI / 2, 0, -2.542]}
        scale={[1.142, 1.142, 1.447]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.397, 0.866, 3.069]}
        rotation={[-Math.PI / 2, 0, -2.542]}
        scale={[1.287, 1.287, 1.447]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-1.398, 0.866, 2.832]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={1.089}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.logotip.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.409, 0.02, -0.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.141, 0.996, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2138773501.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.408, 0.565, -0.458]}
        rotation={[-1.484, 0, 0]}
        scale={[1.03, 1.022, 1.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox008.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.408, 0.427, -0.059]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.141, 1.022, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line2062828120.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.823, 0, -0.214]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-1.011, -1, -1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#11_547350001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.823, 0, -0.648]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-1.011, -1, -1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#12_547349001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.08, 0.025, -0.95]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.724, 0.793, 0.828]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq1050.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.08, 0.418, -0.95]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.724, 0.793, 0.828]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq1051.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.08, 0.025, -0.95]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.724, 0.793, 0.828]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq1052.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[2.668, 0.6, 0.801]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[-1, -1, -8.333]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box_4217168001.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.281, 1.141, -0.51]} rotation={[-Math.PI / 3, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dorf_Hand_Shower_711550001.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.261, 1.636, -0.162]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dorf_Rain_Shower_711555001.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.279, 1.149, -0.487]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#747_711561001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.243, 1.149, -0.487]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#748_711560001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.232, 0.355, -0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#749_711554001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.249, 0.586, -0.15]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#750_711553001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.229, 1.274, -0.484]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#751_711559001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.229, 0.674, -0.484]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group#868_711558001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.795, 0.864, 2.62]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_Cylinder037.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.545, 0.83, 3.081]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_Cylinder039.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.745, 0.876, 2.648]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_Line001.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.374, 0.829, 3.187]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object013.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-3.186, 0.839, 2.96]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-3.187, 0.838, 2.753]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.665, 0.84, 2.757]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.665, 0.839, 2.757]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.665, 0.839, 2.96]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.861, 0.864, 2.62]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder2068.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.927, 0.864, 2.62]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder2069.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.993, 0.864, 2.62]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder2070.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-3.059, 0.864, 2.62]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder2071.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-3.186, 0.84, 2.757]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder2109.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-2.926, 0.888, 2.86]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box063.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.499, 0.382, 0.799]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647114.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.249, 0.814, 1.441]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.277, 0.382, 1.406]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.721, 0.382, 1.406]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.639, 0.814, 1.441]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.721, 0.725, 1.457]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647115.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.721, 0.668, 1.457]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647116.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.389, 0.853, 1.466]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647117.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.41, 0.864, 1.467]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.367, 0.843, 1.467]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.054, 1.266, 1.448]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.061, -0.428, 1.4]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line035.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.935, -0.43, 1.4]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line158.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.929, -0.451, 1.393]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder201046.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.929, -0.451, 1.398]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder201047.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.929, 1.228, 1.398]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.929, 1.228, 1.393]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.075, -0.451, 1.393]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder201048.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.075, -0.451, 1.398]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.075, 1.228, 1.398]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.075, 1.228, 1.393]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.053, -0.479, 1.425]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647118.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.502, -0.479, 1.425]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647119.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.101, 0.002, 0.84]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.115, 0.023, 1.289]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647120.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.884, 0.023, 1.289]} rotation={[-Math.PI, 0, 0]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647121.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.5, 1.246, 1.355]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647122.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.502, -0.479, 0.814]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647123.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.502, 1.188, 0.814]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2131647124.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-0.499, -0.476, 1.435]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.871, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line003.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.075, 1.254, 1.423]} rotation={[-Math.PI / 2, 0, 0]} scale={0.984}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box2138773459.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.069, 0.382, 1.453]} rotation={[-Math.PI / 2, 0, 0]} scale={0.677}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.069, 0.386, 1.453]} rotation={[-Math.PI / 2, 0, 0]} scale={0.677}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[-0.897, 0.002, 0.84]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.758, 0.749, 0.931]} rotation={[-Math.PI / 2, 0, 0.718]} scale={0.473}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Decorative_Vases_001_001-mesh001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group position={[1.319, 0.301, 1.747]} rotation={[-Math.PI / 2, 0, 0]} scale={0.721}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Vase_Calla_Lilies_21-24_001-mesh001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[1.299, 0.004, 2.536]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[1.008, 0.795, 0.795]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Sofa_Two-Seater_002_001-mesh001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.509, 0.038, -1.991]}
        rotation={[1.57, -0.006, 3.099]}
        scale={[-0.617, -0.655, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq965001.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[-1.509, 0.038, -2.136]}
        rotation={[1.57, -0.006, 3.099]}
        scale={[-0.617, -0.655, -0.805]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aq965002.geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
      <group
        position={[0.019, 0.677, -0.542]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[1.067, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Component#182_697196001'].geometry}
          material={materials['fallback Material']}
          scale={0.001}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/studio-v1.glb')