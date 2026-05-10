import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function AvatarFigure() {
  const groupRef = useRef()
  const headRef = useRef()

  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    headRef.current.position.y = 1.8 + Math.sin(state.clock.elapsedTime * 2) * 0.05
  })

  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <capsuleGeometry args={[0.5, 1, 16, 32]} />
        <meshStandardMaterial color="#ff6b9d" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Head */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={headRef} position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial color="#ffb6c1" metalness={0.2} roughness={0.3} />
        </mesh>
      </Float>

      {/* Hair */}
      <mesh position={[0, 2.1, -0.1]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#2d1b69" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.18, 1.85, 0.45]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#2d1b69" />
      </mesh>
      <mesh position={[0.18, 1.85, 0.45]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#2d1b69" />
      </mesh>

      {/* Smile */}
      <mesh position={[0, 1.65, 0.48]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.12, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#ff4757" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.7, 0.6, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
        <meshStandardMaterial color="#ffb6c1" metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh position={[0.7, 0.6, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
        <meshStandardMaterial color="#ffb6c1" metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.2, -0.7, 0]}>
        <capsuleGeometry args={[0.13, 0.5, 8, 16]} />
        <meshStandardMaterial color="#4dc9ff" metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh position={[0.2, -0.7, 0]}>
        <capsuleGeometry args={[0.13, 0.5, 8, 16]} />
        <meshStandardMaterial color="#4dc9ff" metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Briefcase (professional touch) */}
      <Float speed={3} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[0.5, 0.4, 0.15]} />
          <meshStandardMaterial color="#ffd700" metalness={0.6} roughness={0.2} />
        </mesh>
        <mesh position={[1, 0.22, 0]}>
          <torusGeometry args={[0.1, 0.02, 8, 16]} />
          <meshStandardMaterial color="#c9a800" metalness={0.8} roughness={0.1} />
        </mesh>
      </Float>

      {/* Floating legal scales */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <group position={[-1.2, 1.5, 0]}>
          <mesh>
            <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} />
          </mesh>
          <mesh position={[-0.3, -0.3, 0]}>
            <coneGeometry args={[0.15, 0.1, 16]} />
            <meshStandardMaterial color="#ffd700" metalness={0.6} />
          </mesh>
          <mesh position={[0.3, -0.3, 0]}>
            <coneGeometry args={[0.15, 0.1, 16]} />
            <meshStandardMaterial color="#ffd700" metalness={0.6} />
          </mesh>
        </group>
      </Float>
    </group>
  )
}

function FloatingDocuments() {
  const docsRef = useRef()

  useFrame((state) => {
    docsRef.current.rotation.y = state.clock.elapsedTime * 0.3
  })

  return (
    <group ref={docsRef}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Float key={i} speed={1 + i * 0.3} rotationIntensity={0.5} floatIntensity={1}>
          <mesh
            position={[
              Math.cos((i / 5) * Math.PI * 2) * 2.5,
              Math.sin(i * 0.5) * 0.5,
              Math.sin((i / 5) * Math.PI * 2) * 2.5,
            ]}
            rotation={[0.2 * i, 0.3 * i, 0]}
          >
            <boxGeometry args={[0.4, 0.5, 0.02]} />
            <meshStandardMaterial
              color={['#ff6b9d', '#4dc9ff', '#ffd700', '#7bed9f', '#c44dff'][i]}
              metalness={0.3}
              roughness={0.4}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function Avatar3D() {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 50 }}
      style={{ width: '100%', height: '500px' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#fff5e6" />
      <pointLight position={[-3, 2, 3]} intensity={0.8} color="#ff69b4" />
      <pointLight position={[3, -2, 3]} intensity={0.5} color="#4dc9ff" />

      <AvatarFigure />
      <FloatingDocuments />
      <ContactShadows position={[0, -1.3, 0]} opacity={0.4} blur={2} />
    </Canvas>
  )
}
