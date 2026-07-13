"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/three/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Loading 3D Scene...</p>
      </div>
    </div>
  ),
});

const effects = [
  {
    name: "Floating Shapes",
    description: "Distorted sphere, wobbly torus, wireframe icosahedron, octahedron, and cone floating in space",
    icon: "🧊",
  },
  {
    name: "Particle Field",
    description: "2000 particles in brand colors orbiting around the scene",
    icon: "✨",
  },
  {
    name: "Mouse Follower",
    description: "Interactive shapes that follow your mouse cursor in 3D space",
    icon: "🖱️",
  },
  {
    name: "Rotating Ring",
    description: "A glowing teal ring orbiting the central core",
    icon: "💫",
  },
  {
    name: "Pulsing Core",
    description: "Central coral sphere with emissive glow",
    icon: "🔴",
  },
  {
    name: "Star Field",
    description: "3000 stars creating a deep space background",
    icon: "🌟",
  },
];

export default function ThreeDemoPage() {
  const [activeEffect, setActiveEffect] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-heading text-foreground hover:text-primary transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="text-xl font-heading text-foreground">
            3D Effects Demo
          </h1>
          <div className="w-24" />
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="fixed inset-0 pt-16">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Loading 3D Scene...</p>
              </div>
            </div>
          }
        >
          <Scene3D />
        </Suspense>
      </div>

      {/* Info Panel */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h2 className="text-xl font-heading text-foreground mb-4 text-center">
            Interactive 3D Effects
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {effects.map((effect) => (
              <div
                key={effect.name}
                className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-all cursor-default"
                onMouseEnter={() => setActiveEffect(effect.name)}
                onMouseLeave={() => setActiveEffect(null)}
              >
                <div className="text-2xl mb-2">{effect.icon}</div>
                <h3 className="text-sm font-medium text-foreground">{effect.name}</h3>
                {activeEffect === effect.name && (
                  <p className="text-xs text-muted-foreground mt-1">{effect.description}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              🖱️ Drag to rotate • Scroll to zoom • Hover shapes for interaction
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
