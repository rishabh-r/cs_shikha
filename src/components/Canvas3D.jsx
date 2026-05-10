import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Stars } from '@react-three/drei'
import * as THREE from 'three'

function FloatingGeometry({ position, color, speed, scale, shape }) {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.3
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed) * 0.4
  })

  const geometry = useMemo(() => {
    switch (shape) {
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />
      case 'octahedron':
        return <octahedronGeometry args={[1]} />
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />
      case 'cone':
        return <coneGeometry args={[1, 2, 6]} />
      default:
        return <sphereGeometry args={[1, 32, 32]} />
    }
  }, [shape])

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const count = 500
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 50
    }
    return pos
  }, [])

  const pointsRef = useRef()

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffd700"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function AnimatedRing({ radius, color, speed }) {
  const ringRef = useRef()

  useFrame((state) => {
    ringRef.current.rotation.x = state.clock.elapsedTime * speed
    ringRef.current.rotation.z = state.clock.elapsedTime * speed * 0.5
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(135deg, #0c0015 0%, #1a0030 50%, #0d001a 100%)',
      }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffeedd" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff69b4" />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00d4ff" />

      <FloatingGeometry position={[-6, 3, -5]} color="#ff6b9d" speed={1.2} scale={0.8} shape="torus" />
      <FloatingGeometry position={[7, -2, -8]} color="#c44dff" speed={0.8} scale={1.2} shape="octahedron" />
      <FloatingGeometry position={[-4, -4, -6]} color="#4dc9ff" speed={1.5} scale={0.6} shape="icosahedron" />
      <FloatingGeometry position={[5, 4, -10]} color="#ffd700" speed={1} scale={0.9} shape="dodecahedron" />
      <FloatingGeometry position={[-8, 0, -12]} color="#ff4757" speed={0.6} scale={1.1} shape="cone" />
      <FloatingGeometry position={[3, -5, -7]} color="#7bed9f" speed={1.3} scale={0.7} shape="sphere" />

      <AnimatedRing radius={4} color="#ff69b4" speed={0.3} />
      <AnimatedRing radius={6} color="#4dc9ff" speed={0.2} />
      <AnimatedRing radius={8} color="#ffd700" speed={0.15} />

      <ParticleField />
      <Sparkles count={100} scale={20} size={2} speed={0.4} color="#ffd700" />
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0.5} fade speed={1} />
    </Canvas>
  )
}
