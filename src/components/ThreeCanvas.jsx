import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function CameraController({ activeChapter, mousePos }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0, 8));
  const currentPos = useRef(new THREE.Vector3(0, 0, 12));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const positions = [
      [0, 0.3, 8],
      [0.8, 0.1, 7.2],
      [-0.8, -0.1, 7.2],
      [0.6, 0.15, 7.8],
      [0, 0.05, 6.5],
      [0, 0.15, 6.2],
    ];
    const looks = [
      [0, 0, 0],
      [0.2, 0, 0],
      [-0.2, 0.05, 0],
      [0.25, -0.05, 0],
      [0, 0, 0],
      [0, 0.05, 0],
    ];
    const p = positions[activeChapter] || positions[0];
    const l = looks[activeChapter] || looks[0];
    targetPos.current.set(...p);
    targetLookAt.current.set(...l);
  }, [activeChapter]);

  useFrame(() => {
    const t = 0.04;
    currentPos.current.lerp(targetPos.current, t);
    currentLookAt.current.lerp(targetLookAt.current, t);
    const px = mousePos.current.x * 0.25;
    const py = mousePos.current.y * 0.2;
    camera.position.set(
      currentPos.current.x + px,
      currentPos.current.y + py,
      currentPos.current.z
    );
    camera.lookAt(
      currentLookAt.current.x + px * 0.4,
      currentLookAt.current.y + py * 0.4,
      currentLookAt.current.z
    );
  });

  return null;
}

function WarmBackground() {
  return (
    <>
      <mesh position={[0, 0, -8]} scale={[30, 20, 1]}>
        <planeGeometry />
        <meshBasicMaterial
          color="#f3ebe0"
          transparent
          opacity={0.95}
        />
      </mesh>
      <mesh position={[0, 2, -6]} scale={[18, 12, 1]}>
        <planeGeometry />
        <meshBasicMaterial
          color="#d9bf8e"
          transparent
          opacity={0.08}
        />
      </mesh>
    </>
  );
}

function GoldenDust({ count = 80 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02;
    ref.current.position.y = Math.sin(t * 0.3) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#d9bf8e"
        transparent
        opacity={0.55}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FallingLeaves({ mousePos }) {
  const count = 55;
  const groupRef = useRef();
  const leafData = useMemo(() => {
    const colors = ['#b73a3a', '#c45c3a', '#d4783a', '#b8945a', '#8a6936', '#d96a6a'];
    return Array.from({ length: count }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        Math.random() * 12 - 4,
        (Math.random() - 0.5) * 4
      ),
      rot: Math.random() * Math.PI * 2,
      scale: 0.12 + Math.random() * 0.18,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: 0.008 + Math.random() * 0.018,
      sway: 0.5 + Math.random() * 1.5,
      phase: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.04,
    }));
  }, []);

  const leafGeo = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.quadraticCurveTo(-0.08, 0.08, -0.12, 0.25);
    shape.lineTo(-0.28, 0.2);
    shape.lineTo(-0.2, 0.45);
    shape.lineTo(-0.38, 0.58);
    shape.lineTo(-0.15, 0.72);
    shape.lineTo(-0.22, 0.95);
    shape.lineTo(0, 1.35);
    shape.lineTo(0.22, 0.95);
    shape.lineTo(0.15, 0.72);
    shape.lineTo(0.38, 0.58);
    shape.lineTo(0.2, 0.45);
    shape.lineTo(0.28, 0.2);
    shape.quadraticCurveTo(0.08, 0.08, 0, 0);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.006,
      bevelEnabled: false,
    });
  }, []);

  const meshes = useRef([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const wind = mousePos.current.x * 0.015;

    leafData.forEach((leaf, i) => {
      const mesh = meshes.current[i];
      if (!mesh) return;

      leaf.pos.y -= leaf.speed;
      leaf.pos.x += Math.sin(time * leaf.sway + leaf.phase) * 0.012 + wind;
      leaf.rot += leaf.spin;

      if (leaf.pos.y < -5.5) {
        leaf.pos.y = 6;
        leaf.pos.x = (Math.random() - 0.5) * 14;
      }

      mesh.position.copy(leaf.pos);
      mesh.rotation.set(leaf.rot * 0.7, leaf.rot, leaf.rot * 1.2);
    });

    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(time * 0.15) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {leafData.map((leaf, i) => (
        <mesh
          key={i}
          ref={(el) => (meshes.current[i] = el)}
          geometry={leafGeo}
          scale={leaf.scale}
          position={leaf.pos}
        >
          <meshStandardMaterial
            color={leaf.color}
            side={THREE.DoubleSide}
            transparent
            opacity={0.82}
            roughness={0.6}
            metalness={0.05}
            emissive={leaf.color}
            emissiveIntensity={0.08}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeCanvas({ activeChapter }) {
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.55} color="#fff8f0" />
        <directionalLight position={[5, 8, 4]} intensity={0.65} color="#fff5e6" />
        <directionalLight position={[-4, 2, -2]} intensity={0.2} color="#fca5a5" />
        <pointLight position={[0, 3, 2]} intensity={0.3} color="#d9bf8e" />

        <WarmBackground />
        <GoldenDust />
        <FallingLeaves mousePos={mousePos} />
        <CameraController activeChapter={activeChapter} mousePos={mousePos} />
      </Canvas>
    </div>
  );
}
