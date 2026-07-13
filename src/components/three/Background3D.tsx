"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingOrb({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.3;
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
}

function GridPlane() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[50, 50, 40, 40]} />
      <meshStandardMaterial
        color="#0D7377"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

function ParticleDrift() {
  const points = useRef<THREE.Points>(null);
  const count = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 30;
      pos[i3 + 1] = (Math.random() - 0.5) * 20;
      pos[i3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.01;
      points.current.rotation.x = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#0D7377"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <>
      <color attach="background" args={["#f8f7f4"]} />
      <fog attach="fog" args={["#f8f7f4", 8, 25]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />

      <FloatingOrb position={[-4, 2, -3]} color="#0D7377" speed={0.8} />
      <FloatingOrb position={[4, -1, -4]} color="#E8505B" speed={0.6} />
      <FloatingOrb position={[0, 3, -5]} color="#D4A843" speed={0.7} />
      <FloatingOrb position={[-3, -2, -6]} color="#0D7377" speed={0.5} />
      <FloatingOrb position={[3, 1, -3]} color="#E8505B" speed={0.9} />

      <GridPlane />
      <ParticleDrift />
    </>
  );
}
