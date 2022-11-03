/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: dogflesh (https://sketchfab.com/dogflesh)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/retro-computer-9439cb5e09cc44caa63dfbfb299df45f
title: Retro computer
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Rotate(props) {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={5}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.None} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')

export default Rotate;