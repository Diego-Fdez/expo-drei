import { useGLTF } from '@react-three/drei/native';
//import ModelPath from '../../assets/Model.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(require('../../assets/Model.glb'));
  //const { nodes, materials } = useGLTF(ModelPath);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model1.geometry}
        material={materials.koltuk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model2.geometry}
        material={materials.siyah}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model3.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model4.geometry}
        material={materials.siyah}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model5.geometry}
        material={materials.siyah}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model6.geometry}
        material={materials.altin}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model7.geometry}
        material={materials.koltuk}
      />
    </group>
  );
}

useGLTF.preload(require('../../assets/Model.glb'));
