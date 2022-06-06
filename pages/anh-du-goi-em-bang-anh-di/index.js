import './style.scss'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { Select } from 'antd'

function D({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/D.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['3D_Text_-_D'].geometry} material={materials.Wellington} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.5} />
    </group>
  )
}

function U({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/U.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['3D_Text_-_U'].geometry} material={materials.Wellington} position={[18, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.5} />
    </group>
  )
}

function Model ({ text1, text2, ...props}) {
  const group = useRef()
  const { nodes: nodesD, materials: materialsD } = useGLTF('/D.glb')
  const { nodes: nodesU, materials: materialsU } = useGLTF('/U.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={text1 === 'D' ? nodesD['3D_Text_-_D'].geometry : nodesU['3D_Text_-_U'].geometry} material={text1 === 'D' ?materialsD.Wellington : materialsU.Wellington} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.5} />
      <mesh geometry={text2 === 'D' ? nodesD['3D_Text_-_D'].geometry : nodesU['3D_Text_-_U'].geometry} material={text2 === 'D' ? materialsD.Wellington : materialsU.Wellington} position={[18, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.5} />
    </group>
  )
}

const Demo = () => {
  const [text1, setText1] = useState('D')
  const [text2, setText2] = useState('U')
  return (<div className="demo-container">
  <div>
    <Select value={text1} onChange={(value) => setText1(value)}>
      <Select.Option value='D'>D</Select.Option>
      <Select.Option value='U'>U</Select.Option>
    </Select>
    <Select value={text2} onChange={(value) => setText2(value)}>
      <Select.Option value='D'>D</Select.Option>
      <Select.Option value='U'>U</Select.Option>
    </Select>
    <Canvas camera={{ fov: 70, position: [0, 0, 65] }}>
      <Suspense fallback={null}>
        <ambientLight />
        {/* <D />
        <U /> */}
        <Model text1={text1} text2={text2} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  </div>
  </div>)
}

export default Demo
