import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Box() {
  return (
    <mesh rotation={[10, 10, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshLambertMaterial color="hotpink" />
    </mesh>
  );
}

function Sphere() {
  return (
    <mesh position={[3, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshLambertMaterial color="orange" />
    </mesh>
  );
}

function Cone() {
  return (
    <mesh position={[-3, 0, 0]}>
      <coneGeometry args={[1, 2, 32]} />
      <meshLambertMaterial color="skyblue" />
    </mesh>
  );
}

const ThreeDimensionPage = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: '#282c34' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Stars />
        <Box />
        <Sphere />
        <Cone />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ThreeDimensionPage;
