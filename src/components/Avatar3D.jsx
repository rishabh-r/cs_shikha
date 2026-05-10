import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function HappyAvatar() {
  const groupRef = useRef()
  const headRef = useRef()
  const rightArmRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.15
    headRef.current.position.y = 2.05 + Math.sin(t * 1.5) * 0.06
    // Waving hand animation
    rightArmRef.current.rotation.z = -0.3 + Math.sin(t * 3) * 0.4
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Body - cheerful pink dress/top */}
      <mesh position={[0, 0.5, 0]}>
        <capsuleGeometry args={[0.5, 1.2, 16, 32]} />
        <meshStandardMaterial color="#ff6b9d" metalness={0.2} roughness={0.5} />
      </mesh>

      {/* Dress flare */}
      <mesh position={[0, -0.2, 0]}>
        <coneGeometry args={[0.7, 0.8, 32]} />
        <meshStandardMaterial color="#ff8ab5" metalness={0.1} roughness={0.5} />
      </mesh>

      {/* Head */}
      <mesh ref={headRef} position={[0, 2.05, 0]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#ffe0bd" metalness={0.1} roughness={0.4} />
      </mesh>

      {/* Hair - long and flowing */}
      <mesh position={[0, 2.3, -0.15]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#1a0a2e" metalness={0.3} roughness={0.7} />
      </mesh>
      {/* Hair sides */}
      <mesh position={[-0.35, 1.7, -0.05]}>
        <capsuleGeometry args={[0.15, 0.6, 8, 16]} />
        <meshStandardMaterial color="#1a0a2e" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0.35, 1.7, -0.05]}>
        <capsuleGeometry args={[0.15, 0.6, 8, 16]} />
        <meshStandardMaterial color="#1a0a2e" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Happy Eyes - big and bright */}
      <mesh position={[-0.18, 2.1, 0.45]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.18, 2.1, 0.45]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Pupils */}
      <mesh position={[-0.18, 2.1, 0.53]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshStandardMaterial color="#2d1b69" />
      </mesh>
      <mesh position={[0.18, 2.1, 0.53]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshStandardMaterial color="#2d1b69" />
      </mesh>
      {/* Eye sparkle */}
      <mesh position={[-0.16, 2.13, 0.56]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0.2, 2.13, 0.56]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>

      {/* Rosy cheeks */}
      <mesh position={[-0.3, 1.95, 0.4]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#ff9eae" transparent opacity={0.7} />
      </mesh>
      <mesh position={[0.3, 1.95, 0.4]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#ff9eae" transparent opacity={0.7} />
      </mesh>

      {/* Big happy smile */}
      <mesh position={[0, 1.88, 0.48]} rotation={[0.15, 0, 0]}>
        <torusGeometry args={[0.15, 0.03, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#e83e5a" />
      </mesh>

      {/* Left arm (resting) */}
      <mesh position={[-0.72, 0.7, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
        <meshStandardMaterial color="#ffe0bd" metalness={0.1} roughness={0.4} />
      </mesh>

      {/* Right arm (waving!) */}
      <group ref={rightArmRef} position={[0.72, 1.0, 0]}>
        <mesh position={[0, 0.3, 0]}>
          <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
          <meshStandardMaterial color="#ffe0bd" metalness={0.1} roughness={0.4} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, 0.7, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#ffe0bd" metalness={0.1} roughness={0.4} />
        </mesh>
      </group>

      {/* Golden crown/headband */}
      <mesh position={[0, 2.45, 0.1]} rotation={[0.3, 0, 0]}>
        <torusGeometry args={[0.35, 0.04, 8, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.1} />
      </mesh>

      {/* Floating stars around avatar */}
      <Float speed={4} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[1.2, 2.2, 0]}>
          <octahedronGeometry args={[0.1]} />
          <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-1.1, 2.5, 0.3]}>
          <octahedronGeometry args={[0.08]} />
          <meshStandardMaterial color="#ff6b9d" emissive="#ff6b9d" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[0.8, 2.8, -0.3]}>
          <octahedronGeometry args={[0.06]} />
          <meshStandardMaterial color="#4dc9ff" emissive="#4dc9ff" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-0.9, 1.8, 0.5]}>
          <octahedronGeometry args={[0.07]} />
          <meshStandardMaterial color="#7bed9f" emissive="#7bed9f" emissiveIntensity={0.5} />
        </mesh>
      </Float>

      {/* Floating briefcase */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <group position={[-1.3, 0.3, 0.3]}>
          <mesh>
            <boxGeometry args={[0.45, 0.35, 0.12]} />
            <meshStandardMaterial color="#ffd700" metalness={0.6} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.2, 0]}>
            <torusGeometry args={[0.08, 0.02, 8, 16]} />
            <meshStandardMaterial color="#c9a800" metalness={0.8} roughness={0.1} />
          </mesh>
        </group>
      </Float>

      {/* Floating heart */}
      <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[1.3, 1.5, 0.2]} scale={0.15}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#ff4757" emissive="#ff4757" emissiveIntensity={0.3} />
        </mesh>
      </Float>
    </group>
  )
}

function FloatingDocuments() {
  const docsRef = useRef()

  useFrame((state) => {
    docsRef.current.rotation.y = state.clock.elapsedTime * 0.2
  })

  return (
    <group ref={docsRef}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.8}>
          <mesh
            position={[
              Math.cos((i / 5) * Math.PI * 2) * 2.8,
              Math.sin(i * 0.7) * 0.4 - 0.3,
              Math.sin((i / 5) * Math.PI * 2) * 2.8,
            ]}
            rotation={[0.1 * i, 0.2 * i, 0.1]}
          >
            <boxGeometry args={[0.35, 0.45, 0.02]} />
            <meshStandardMaterial
              color={['#ff6b9d', '#4dc9ff', '#ffd700', '#7bed9f', '#c44dff'][i]}
              metalness={0.2}
              roughness={0.5}
              transparent
              opacity={0.8}
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
      camera={{ position: [0, 1, 5.5], fov: 45 }}
      style={{ width: '100%', height: '500px' }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff5e6" />
      <pointLight position={[-3, 2, 3]} intensity={0.8} color="#ff69b4" />
      <pointLight position={[3, -2, 3]} intensity={0.5} color="#4dc9ff" />
      <pointLight position={[0, 3, 2]} intensity={0.4} color="#ffd700" />

      <HappyAvatar />
      <FloatingDocuments />
      <ContactShadows position={[0, -1.5, 0]} opacity={0.3} blur={2.5} />
    </Canvas>
  )
}
