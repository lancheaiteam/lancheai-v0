'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Generate random points for stars (returns positions and colors arrays)
const generatePoints = (count) => {
  const points = [];
  const colors = [];
  for (let i = 0; i < count; i++) {
    // Position
    points.push(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
    // Color - reddish hues
    colors.push(
      Math.random() * 0.6 + 0.4, // R: 0.4-1.0
      Math.random() * 0.3, // G: 0-0.3
      Math.random() * 0.2 // B: 0-0.2
    );
  }
  return { positions: points, colors };
};

const ParticleField = () => {
  const pointsRef = useRef();
  const { positions, colors } = generatePoints(3000);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x =
        Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
      pointsRef.current.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  // JSX way: build geometry and material in-line
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={positions.length / 3}
          array={new Float32Array(positions)}
          itemSize={3}
        />
        <bufferAttribute
          attach='attributes-color'
          count={colors.length / 3}
          array={new Float32Array(colors)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const NeuralNetwork = () => {
  const groupRef = useRef();
  const nodesCount = 50;
  const [nodePositions, setNodePositions] = React.useState(() =>
    Array(nodesCount)
      .fill(0)
      .map(() => [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 3,
      ])
  );

  // Animate node positions and group rotation
  useFrame(({ clock }) => {
    setNodePositions((prev) =>
      prev.map((pos, i) => [
        pos[0] + Math.cos(clock.getElapsedTime() * 0.5 + i * 0.1) * 0.005,
        pos[1] + Math.sin(clock.getElapsedTime() * 0.5 + i * 0.1) * 0.005,
        pos[2],
      ])
    );
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  // Build connections between close nodes
  const connections = [];
  for (let i = 0; i < nodesCount; i++) {
    for (let j = i + 1; j < nodesCount; j++) {
      const dx = nodePositions[i][0] - nodePositions[j][0];
      const dy = nodePositions[i][1] - nodePositions[j][1];
      const dz = nodePositions[i][2] - nodePositions[j][2];
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (distance < 3) {
        connections.push(
          <line key={`${i}-${j}`}>
            <bufferGeometry>
              <bufferAttribute
                attach='attributes-position'
                array={
                  new Float32Array([...nodePositions[i], ...nodePositions[j]])
                }
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color={0xff2424} transparent opacity={0.2} />
          </line>
        );
      }
    }
  }

  return (
    <group ref={groupRef}>
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color='#ff2424' transparent opacity={0.8} />
        </mesh>
      ))}
      {connections}
    </group>
  );
};

const BackgroundAnimation = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
    <color attach='background' args={['#000000']} />
    <fog attach='fog' args={['#000', 5, 20]} />
    <ParticleField />
    <NeuralNetwork />
  </Canvas>
);

export default BackgroundAnimation;
