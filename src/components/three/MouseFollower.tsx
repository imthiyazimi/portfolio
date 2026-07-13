"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function MouseSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      const targetX = mouse.current.x * (viewport.width / 2);
      const targetY = mouse.current.y * (viewport.height / 2);
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[0.5]} />
      <meshStandardMaterial
        color="#E8505B"
        wireframe
        roughness={0.2}
        metalness={0.9}
      />
    </mesh>
  );
}

function MouseTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const targetX = mouse.current.x * -(viewport.width / 3);
      const targetY = mouse.current.y * -(viewport.height / 3);
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.03;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.03;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.4, 0.15, 128, 32]} />
      <meshStandardMaterial
        color="#D4A843"
        roughness={0.3}
        metalness={0.85}
      />
    </mesh>
  );
}

export default function MouseFollower() {
  return (
    <>
      <MouseSphere />
      <MouseTorus />
    </>
  );
}
