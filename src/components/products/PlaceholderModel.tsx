// Imports are already correct and well-structured
import React from 'react';
import { useFrame, MeshProps } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

interface PlaceholderModelProps extends MeshProps {
  type?: 'ring' | 'necklace' | 'earring' | 'bracelet';
}

const PlaceholderModel: React.FC<PlaceholderModelProps> = ({ type = 'ring', ...props }) => {
  const meshRef = React.useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  const renderRing = () => (
    <motion.group
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ring Band */}
      <mesh ref={meshRef} {...props}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Diamond */}
      <mesh position={[0, 0.6, 0]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial
          color="#FFFFFF"
          metalness={0.1}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </motion.group>
  );

  const renderNecklace = () => (
    <motion.group
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Chain */}
      <mesh ref={meshRef} {...props}>
        <torusGeometry args={[2, 0.1, 16, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Pendant */}
      <mesh position={[0, -0.5, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </motion.group>
  );

  switch (type) {
    case 'necklace':
      return renderNecklace();
    case 'ring':
    default:
      return renderRing();
  }
};

export default PlaceholderModel; 