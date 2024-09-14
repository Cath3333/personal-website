import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

const ThreeText = () => {
  const groupRef = useRef();
  const [font, setFont] = useState(null);
  const [error, setError] = useState(null);
  const { scene } = useThree();
  const fontUrl = 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json';

  useEffect(() => {
    const loader = new FontLoader();
    loader.load(
      fontUrl,
      (loadedFont) => {
        setFont(loadedFont);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (err) => {
        console.error('An error happened', err);
        setError('Failed to load font. Please check the font URL and try again.');
      }
    );
  }, [fontUrl]);

  useEffect(() => {
    if (font && groupRef.current) {
      const color = 0x006699;
      const matDark = new THREE.LineBasicMaterial({
        color: color,
        side: THREE.DoubleSide
      });
      const matLite = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      });

      const message = '   Three.js\nSimple text.';
      const shapes = font.generateShapes(message, 100);
      const geometry = new THREE.ShapeGeometry(shapes);
      geometry.computeBoundingBox();
      const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
      geometry.translate(xMid, 0, 0);

      // Create filled text
      const text = new THREE.Mesh(geometry, matLite);
      text.position.z = -150;
      groupRef.current.add(text);

      // Create outlined text
      const holeShapes = [];
      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        if (shape.holes && shape.holes.length > 0) {
          for (let j = 0; j < shape.holes.length; j++) {
            const hole = shape.holes[j];
            holeShapes.push(hole);
          }
        }
      }
      shapes.push.apply(shapes, holeShapes);

      const lineText = new THREE.Object3D();
      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        const points = shape.getPoints();
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        geometry.translate(xMid, 0, 0);
        const lineMesh = new THREE.Line(geometry, matDark);
        lineText.add(lineMesh);
      }
      lineText.position.z = -150;
      groupRef.current.add(lineText);
    }
  }, [font]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  if (error) {
    return <Text color="red" fontSize={16} position={[0, 0, 0]}>{error}</Text>;
  }

  return <group ref={groupRef} />;
};

const Scene = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, -400, 600);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      <OrbitControls />
      <ThreeText />
    </>
  );
};

const Home = () => (
  <Canvas style={{ height: '100vh', background: '#f0f0f0' }}>
    <Scene />
  </Canvas>
);

export default Home;