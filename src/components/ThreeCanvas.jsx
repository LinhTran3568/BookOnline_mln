import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// 1. Camera Director: Sets smooth viewport targets for each presentation slide
function CameraController({ activeChapter, mousePos }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0, 7.5));
  const currentPos = useRef(new THREE.Vector3(0, 0, 15));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    switch (activeChapter) {
      case 0: // Cover
        targetPos.current.set(0, 0.2, 7.5);
        targetLookAt.current.set(0, 0.1, 0);
        break;
      case 1: // Slide 1 (Right pane shift)
        targetPos.current.set(1.4, 0.1, 6.5);
        targetLookAt.current.set(0.3, 0, 0);
        break;
      case 2: // Slide 2 (Left pane shift)
        targetPos.current.set(-1.4, -0.3, 6.2);
        targetLookAt.current.set(-0.3, 0.1, 0);
        break;
      case 3: // Slide 3 (Right pane shift)
        targetPos.current.set(1.5, 0.2, 7.5);
        targetLookAt.current.set(0.4, -0.1, 0);
        break;
      case 4: // Slide 4 (Center synthesis view)
        targetPos.current.set(0, 0, 5.5);
        targetLookAt.current.set(0, 0, 0);
        break;
      default:
        targetPos.current.set(0, 0, 7.5);
        targetLookAt.current.set(0, 0, 0);
    }
  }, [activeChapter]);

  useFrame((state) => {
    const t = 0.045; // Smooth interpolation multiplier

    currentPos.current.lerp(targetPos.current, t);
    currentLookAt.current.lerp(targetLookAt.current, t);

    // Mouse parallax sway
    const parallaxX = mousePos.current.x * 0.35;
    const parallaxY = mousePos.current.y * 0.35;
    
    camera.position.set(
      currentPos.current.x + parallaxX,
      currentPos.current.y + parallaxY,
      currentPos.current.z
    );
    
    camera.lookAt(
      currentLookAt.current.x + parallaxX * 0.5,
      currentLookAt.current.y + parallaxY * 0.5,
      currentLookAt.current.z * 0.1
    );
  });

  return null;
}

// 2. Majestic 3D Golden Hammer and Sickle (Cộng sản Búa Liềm Vàng 3D)
function HammerAndSickle({ activeChapter, userChoices }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      // Majestic slow rotation in background
      groupRef.current.rotation.y = time * 0.28;
      // Gentle levitating hover
      groupRef.current.position.y = Math.sin(time * 0.7) * 0.15 - 0.2;
    }
  });

  // Mathematically defined 2D Shape curves for clean golden extrusion
  const sickleShape = useMemo(() => {
    const s = new THREE.Shape();
    // Outer crescent bounds
    s.moveTo(0.1, 0.2);
    s.quadraticCurveTo(0.85, 0.7, 0.95, 1.7);
    s.quadraticCurveTo(0.95, 2.5, 0.1, 3.1);
    // Inner crescent bounds (creates the sickle blade geometry)
    s.quadraticCurveTo(1.15, 2.4, 1.25, 1.7);
    s.quadraticCurveTo(1.25, 0.7, 0.3, -0.25);
    s.lineTo(0.1, 0.2);
    return s;
  }, []);

  const hammerShape = useMemo(() => {
    const h = new THREE.Shape();
    // Handle coordinates
    h.moveTo(-0.15, -1.3);
    h.lineTo(0.05, -1.3);
    h.lineTo(0.05, 0.85);
    // Head block coordinates
    h.lineTo(-0.35, 0.85);
    h.lineTo(-0.35, 1.45);
    h.lineTo(0.25, 1.45);
    h.lineTo(0.25, 0.85);
    h.lineTo(0.05, 0.85);
    // Loop back
    h.lineTo(-0.15, -1.3);
    return h;
  }, []);

  const extrudeSettings = {
    depth: 0.12,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 1,
    bevelSize: 0.02,
    bevelThickness: 0.02
  };

  return (
    <group ref={groupRef} position={[0, -0.2, -1.5]} scale={1.25}>
      {/* 3D Sickle Blade */}
      <mesh position={[-0.45, -0.4, 0]} rotation={[0, 0, Math.PI / 5.5]}>
        <extrudeGeometry args={[sickleShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#d4af37" // Imperial Gilded Gold
          metalness={0.92}
          roughness={0.12}
          emissive="#2d2105"
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3D Hammer */}
      <mesh position={[0.2, 0.35, 0.04]} rotation={[0, 0, -Math.PI / 4]}>
        <extrudeGeometry args={[hammerShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#d4af37" // Imperial Gilded Gold
          metalness={0.92}
          roughness={0.12}
          emissive="#2d2105"
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// 3. 3D Falling Autumn Maple Leaves Simulation
function FallingLeaves({ activeChapter, mousePos, userChoices }) {
  const count = 100; // Number of floating leaves
  const leafRefs = useRef([]);

  // Generate organic detailed Maple Leaf contour shape
  const mapleLeafShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0); // Stem base
    s.quadraticCurveTo(-0.1, 0.1, -0.15, 0.3); // Base flare left
    s.lineTo(-0.35, 0.25); // Lower-left lobe tip
    s.lineTo(-0.25, 0.5); 
    s.lineTo(-0.45, 0.65); // Mid-left lobe tip
    s.lineTo(-0.2, 0.8);
    s.lineTo(-0.3, 1.05); // Top-left lobe tip
    s.lineTo(-0.08, 1.1);
    s.lineTo(0, 1.5); // Maple leaf central crown tip
    s.lineTo(0.08, 1.1);
    s.lineTo(0.3, 1.05); // Top-right lobe tip
    s.lineTo(0.2, 0.8);
    s.lineTo(0.45, 0.65); // Mid-right lobe tip
    s.lineTo(0.25, 0.5);
    s.lineTo(0.35, 0.25); // Lower-right lobe tip
    s.quadraticCurveTo(0.1, 0.1, 0, 0); // Base return right
    return s;
  }, []);

  // Setup unique physics coefficients for each leaf in warm autumn tones
  const leaves = useMemo(() => {
    const arr = [];
    const colors = [
      "#b73a3a", // Deep Rose Red
      "#d96a6a", // Soft blossom Rose
      "#b8945a", // Brushed Gold
      "#8a6936", // Deep shadow Bronze
      "#f0c2b8", // Soft blush Pink
      "#ebe0d0"  // Sand paper tone
    ];

    for (let i = 0; i < count; i++) {
      arr.push({
        position: new THREE.Vector3(
          THREE.MathUtils.randFloat(-10, 10),
          THREE.MathUtils.randFloat(-6, 6),
          THREE.MathUtils.randFloat(-4, 1)
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        scale: THREE.MathUtils.randFloat(0.5, 0.95),
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: THREE.MathUtils.randFloat(0.012, 0.026),
        speedX: THREE.MathUtils.randFloat(0.003, 0.008),
        swaySpeed: THREE.MathUtils.randFloat(1.1, 2.5),
        swayWidth: THREE.MathUtils.randFloat(0.007, 0.022),
        phase: Math.random() * Math.PI * 2,
        rotSpeedX: THREE.MathUtils.randFloat(0.006, 0.018),
        rotSpeedY: THREE.MathUtils.randFloat(0.005, 0.022),
        rotSpeedZ: THREE.MathUtils.randFloat(0.008, 0.014)
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Wind factor induced by mouse pointer movements
    const windForce = mousePos.current.x * 0.022;
    
    let activeSpeedMult = 1.0;
    if (activeChapter === 3 && userChoices.analysisChoice === 'dialectics') {
      activeSpeedMult = 1.35; // Leaves rustle dynamically
    } else if (activeChapter === 4) {
      activeSpeedMult = 1.2;
    }

    leaves.forEach((leaf, i) => {
      const mesh = leafRefs.current[i];
      if (!mesh) return;

      // 1. Continuous fall downward
      leaf.position.y -= leaf.speedY * activeSpeedMult;

      // 2. Flutter wind sway (sinusoidal wind sway)
      leaf.position.x += Math.sin(time * leaf.swaySpeed + leaf.phase) * leaf.swayWidth + windForce * 0.3;

      // 3. Complex 3-axis leaf tumbling
      mesh.rotation.x += leaf.rotSpeedX * activeSpeedMult;
      mesh.rotation.y += leaf.rotSpeedY * activeSpeedMult;
      mesh.rotation.z += leaf.rotSpeedZ;

      // Recycle leaf back to top
      if (leaf.position.y < -6.0) {
        leaf.position.y = 6.0;
        leaf.position.x = THREE.MathUtils.randFloat(-10, 10);
        leaf.position.z = THREE.MathUtils.randFloat(-4, 1);
      }

      // Sync position to mesh
      mesh.position.copy(leaf.position);
    });
  });

  const extrudeSettings = {
    depth: 0.008, // Thin leaf depth
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.004,
    bevelThickness: 0.004
  };

  return (
    <group>
      {leaves.map((leaf, i) => (
        <mesh
          key={i}
          ref={(el) => (leafRefs.current[i] = el)}
          scale={leaf.scale}
        >
          <extrudeGeometry args={[mapleLeafShape, extrudeSettings]} />
          <meshStandardMaterial
            color={leaf.color}
            side={THREE.DoubleSide}
            roughness={0.75}
            metalness={0.1}
            transparent={true}
            opacity={0.88}
          />
        </mesh>
      ))}
    </group>
  );
}

// 4. Main Export Canvas
export default function ThreeCanvas({ activeChapter, userChoices }) {
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 58 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {/* Soft Warm Ambient Lighting */}
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 10, 3]} intensity={0.7} color="#fffbeb" />
        <directionalLight position={[-4, -3, -3]} intensity={0.18} color="#fca5a5" />

        {/* 3D Falling realistic maple leaves */}
        <FallingLeaves activeChapter={activeChapter} mousePos={mousePos} userChoices={userChoices} />
        
        {/* Camera Stage controller */}
        <CameraController activeChapter={activeChapter} mousePos={mousePos} />
        
        {/* Subtle warm background sparks */}
        <Stars radius={100} depth={40} count={250} factor={2} saturation={0.5} fade speed={0.4} />
      </Canvas>
    </div>
  );
}
