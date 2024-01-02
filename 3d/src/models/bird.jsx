import React from "react";
import birdScene from "../assets/3d/bird.glb";
import { useGLTF } from "@react-three/drei";

const bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  
  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

export default bird;