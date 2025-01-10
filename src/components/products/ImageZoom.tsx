import React from 'react';
import { useState, useRef } from'react';
import {motion } from 'framer-motion';

interface ImageZoomProps {
  imageUrl: string;
  alt: string;
}

export const ImageZoom = ({ imageUrl, alt }: ImageZoomProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !isZoomed) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full aspect-square overflow-hidden rounded-lg bg-dark-gray/30"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transformOrigin: `${position.x}% ${position.y}%`,
          scale: isZoomed ? 2 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Lupe-Icon */}
      {!isZoomed && (
        <div className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full">
          <svg
            className="w-6 h-6 text-white/80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      )}

      {/* Zoom-Hinweis */}
      {isZoomed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full text-sm text-white/80"
        >
          Bewegen Sie die Maus zum Zoomen
        </motion.div>
      )}
    </motion.div>
  );
}; 