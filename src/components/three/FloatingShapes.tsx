"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function DistortedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[-3, 1, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#0D7377"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function WobblyTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[3, -1, 0]}>
        <torusGeometry args={[0.8, 0.3, 32, 64]} />
        <MeshWobbleMaterial
          color="#E8505B"
          attach="material"
          factor={0.3}
          speed={2}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function Icosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[0, 2, -2]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#D4A843"
          wireframe
          roughness={0.4}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function Octahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.7} floatIntensity={0.9}>
      <mesh ref={meshRef} position={[-2, -2, -1]}>
        <octahedronGeometry args={[0.7]} />
        <meshStandardMaterial
          color="#0D7377"
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>
    </Float>
  );
}

function Cone() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3 - 1;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 1, -1]}>
      <coneGeometry args={[0.5, 1.2, 6]} />
      <meshStandardMaterial
        color="#E8505B"
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function FloatingShapes() {
  return (
    <>
      <DistortedSphere />
      <WobblyTorus />
      <Icosahedron />
      <Octahedron />
      <Cone />
    </>
  );
}
