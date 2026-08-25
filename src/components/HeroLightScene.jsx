import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 200

function DustField() {
  const pointsRef = useRef(null)

  const positions = useMemo(() => {
    const array = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      array[i * 3] = (Math.random() - 0.5) * 6.4
      array[i * 3 + 1] = (Math.random() - 0.5) * 3.4
      array[i * 3 + 2] = (Math.random() - 0.5) * 2.6
    }
    return array
  }, [])

  const speeds = useMemo(
    () => Array.from({ length: PARTICLE_COUNT }, () => 0.035 + Math.random() * 0.075),
    [],
  )

  useFrame((_, delta) => {
    const geometry = pointsRef.current?.geometry
    if (!geometry) return
    const position = geometry.attributes.position
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const nextY = position.getY(i) + speeds[i] * delta
      position.setY(i, nextY > 1.9 ? -1.9 : nextY)
    }
    position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.024}
        color="#f2dcbc"
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

function KeyGlow() {
  const meshRef = useRef(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const pulse = 0.88 + Math.sin(clock.elapsedTime * 0.55) * 0.07
    meshRef.current.scale.setScalar(pulse)
  })

  return (
    <mesh ref={meshRef} position={[1.4, 0.35, -1.6]}>
      <sphereGeometry args={[1.5, 24, 24]} />
      <meshBasicMaterial
        color="#dd171e"
        transparent
        opacity={0.09}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}

function RimLight() {
  const meshRef = useRef(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.material.opacity = 0.14 + Math.sin(clock.elapsedTime * 0.4) * 0.03
  })

  return (
    <mesh ref={meshRef} position={[-1.7, 0.6, -0.6]}>
      <sphereGeometry args={[0.9, 20, 20]} />
      <meshBasicMaterial
        color="#e3ecef"
        transparent
        opacity={0.14}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}

/**
 * Programmatic studio-light layer for the Hero.
 * Replaces what would previously have relied on a new Higgsfield-generated
 * cinematic pass: drifting dust in the light beam plus two soft additive
 * glows (warm key / cool rim) reinforcing the existing CSS studio lighting
 * without competing with hero-copy legibility.
 */
export default function HeroLightScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 3.2], fov: 45 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <DustField />
        <KeyGlow />
        <RimLight />
      </Suspense>
    </Canvas>
  )
}
