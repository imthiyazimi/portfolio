"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars, Float, Text } from "@react-three/drei";
import FloatingShapes from "./FloatingShapes";
import ParticleField from "./ParticleField";
import MouseFollower from "./MouseFollower";

function RotatingRing() {
  return (
    <Float speed={1} rotationIntensity={0.3}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#0D7377"
          emissive="#0D7377"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function PulsingCore() {
  return (
    <mesh>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color="#E8505B"
        emissive="#E8505B"
        emissiveIntensity={1}
        roughness={0.1}
        metalness={0.95}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#E8505B" />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#D4A843" />

      <Stars
        radius={50}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <ParticleField />
      <FloatingShapes />
      <MouseFollower />

      <RotatingRing />
      <PulsingCore />

      <Environment preset="city" />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={3}
        maxDistance={15}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
