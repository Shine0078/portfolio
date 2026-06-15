"use client";

import { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 2.5;
const MOUSE_INFLUENCE = 0.4;

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();

  const { positions, velocities, basePositions } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    const base = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 4 - 1;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }

    return { positions: pos, velocities: vel, basePositions: base };
  }, []);

  const maxLineVertices = PARTICLE_COUNT * PARTICLE_COUNT;
  const linePositions = useMemo(
    () => new Float32Array(maxLineVertices * 3),
    [maxLineVertices]
  );
  const lineAlphas = useMemo(() => new Float32Array(maxLineVertices), [maxLineVertices]);

  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geom;
  }, [linePositions]);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const timeFactor = t * 0.5;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      positions[i3] += velocities[i3] + Math.sin(timeFactor + i * 0.1) * 0.002;
      positions[i3 + 1] += velocities[i3 + 1] + Math.cos(timeFactor + i * 0.15) * 0.002;
      positions[i3 + 2] += velocities[i3 + 2];

      const dx = positions[i3] - basePositions[i3];
      const dy = positions[i3 + 1] - basePositions[i3 + 1];
      const dz = positions[i3 + 2] - basePositions[i3 + 2];
      const distFromBase = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (distFromBase > 2) {
        positions[i3] -= dx * 0.01;
        positions[i3 + 1] -= dy * 0.01;
        positions[i3 + 2] -= dz * 0.01;
      }

      const mouseWorldX = mouseRef.current.x * (viewport.width / 2);
      const mouseWorldY = mouseRef.current.y * (viewport.height / 2);
      const mdx = positions[i3] - mouseWorldX;
      const mdy = positions[i3 + 1] - mouseWorldY;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

      if (mDist < 3) {
        const force = (1 - mDist / 3) * MOUSE_INFLUENCE;
        positions[i3] += mdx * force * 0.02;
        positions[i3 + 1] += mdy * force * 0.02;
      }
    }

    if (meshRef.current) {
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }

    let lineIndex = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const i3 = i * 3;
        const j3 = j * 3;
        const dx = positions[i3] - positions[j3];
        const dy = positions[i3 + 1] - positions[j3 + 1];
        const dz = positions[i3 + 2] - positions[j3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          linePositions[lineIndex * 3] = positions[i3];
          linePositions[lineIndex * 3 + 1] = positions[i3 + 1];
          linePositions[lineIndex * 3 + 2] = positions[i3 + 2];
          lineAlphas[lineIndex] = alpha;

          linePositions[lineIndex * 3 + 3] = positions[j3];
          linePositions[lineIndex * 3 + 4] = positions[j3 + 1];
          linePositions[lineIndex * 3 + 5] = positions[j3 + 2];
          lineAlphas[lineIndex + 1] = alpha;

          lineIndex += 2;
        }
      }
    }

    if (lineRef.current) {
      const geom = lineRef.current.geometry;
      geom.attributes.position.needsUpdate = true;
      geom.setDrawRange(0, lineIndex);
    }
  });

  const particleTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.3, "rgba(255,255,255,0.8)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          map={particleTexture}
          transparent
          opacity={0.8}
          depthWrite={false}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.15}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function AmbientOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.3;
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.7) * 3;
      orb1Ref.current.position.y = Math.cos(t * 0.5) * 2;
      orb1Ref.current.position.z = -2 + Math.sin(t * 0.3);
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(t * 0.6) * 2.5;
      orb2Ref.current.position.y = Math.sin(t * 0.8) * 1.5;
      orb2Ref.current.position.z = -3 + Math.cos(t * 0.4);
    }
  });

  return (
    <group>
      <mesh ref={orb1Ref}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.02}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={orb2Ref}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.015}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function SceneContent() {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new THREE.Color("#000000");
  }, [scene]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <ParticleField />
      <AmbientOrbs />
    </>
  );
}

export function ThreeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60, near: 0.1, far: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        style={{ pointerEvents: "auto" }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
