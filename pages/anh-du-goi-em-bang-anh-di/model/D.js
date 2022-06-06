/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/D.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['3D_Text_-_D'].geometry} material={materials.Wellington} position={[-0.02, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0} />
    </group>
  )
}

useGLTF.preload('/D.glb')
