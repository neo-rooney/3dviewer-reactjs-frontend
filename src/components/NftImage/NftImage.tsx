import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import S from "./NftImage.module.css";

export const NftImage = () => {
  const { scene } = useGLTF("/3-stone-transformed.glb");

  return (
    <div className={S.container}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <primitive
          object={scene}
          scale={0.1}
          rotation={[Math.PI / 2, Math.PI, 0]}
        />
        ;
        <OrbitControls />
      </Canvas>
    </div>
  );
};
