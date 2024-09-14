import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';

const SkyScene = () => {
  const { gl: renderer } = useThree();
  const skyRef = useRef();
  const sunRef = useRef(new THREE.Vector3());
  
  const skyParams = {
    turbidity: 10,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.7,
    elevation: 2,
    azimuth: 180,
    exposure: 0.5
  };

  useFrame(() => {
    if (!skyRef.current) return;

    const uniforms = skyRef.current.material.uniforms;
    uniforms['turbidity'].value = skyParams.turbidity;
    uniforms['rayleigh'].value = skyParams.rayleigh;
    uniforms['mieCoefficient'].value = skyParams.mieCoefficient;
    uniforms['mieDirectionalG'].value = skyParams.mieDirectionalG;

    const phi = THREE.MathUtils.degToRad(90 - skyParams.elevation);
    const theta = THREE.MathUtils.degToRad(skyParams.azimuth);
    sunRef.current.setFromSphericalCoords(1, phi, theta);

    uniforms['sunPosition'].value.copy(sunRef.current);
    renderer.toneMappingExposure = skyParams.exposure;
  });

  return (
    <Sky ref={skyRef} scale={450000} />
  );
};

const Background = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 2000], fov: 60, near: 100, far: 2000000 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.5;
        }}
      >
        <SkyScene />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      </div>
  );
};

export default Background;