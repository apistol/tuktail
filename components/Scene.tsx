'use client';

import { Canvas } from "@react-three/fiber";
import Model from "@/components/Model";
import {Suspense} from "react";
// import { OrbitControls } from "@react-three/drei";

export default function  Scene  ()  {
  return (
    <Canvas>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={null} >
            <Model />
        </Suspense>
        {/*<OrbitControls />*/}
    </Canvas>
  );
}