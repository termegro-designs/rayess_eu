import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

interface ModelProps {
  modelUrl: string;
}

function Model({ modelUrl }: ModelProps) {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} />;
}

interface ProductViewer3DProps {
  modelUrl?: string;
  className?: string;
  type?: 'ring' | 'necklace' | 'earring' | 'bracelet';
}

const ProductViewer3D: React.FC<ProductViewer3DProps> = ({ 
  modelUrl, 
  className = "h-[500px]",
  type = 'ring'
}) => {
  return (
    <div className={className}>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <motion.div
              initial={{ scale: 0, rotateY: 0 }}
              animate={{ scale: 1, rotateY: Math.PI * 2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {modelUrl ? (
                <Model modelUrl={modelUrl} />
              ) : (
                <PlaceholderModel type={type} />
              )}
            </motion.div>
          </Stage>
        </Suspense>
        <OrbitControls 
          makeDefault
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          enableZoom={true}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

// Placeholder for PlaceholderModel component
const PlaceholderModel: React.FC<{ type?: string }> = ({ type }) => (
  <div>Placeholder for {type}</div>
);

export default ProductViewer3D; 