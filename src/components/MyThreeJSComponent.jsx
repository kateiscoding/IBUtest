import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { OrbitControls, Sphere } from '@react-three/drei';

const MyThreeJSComponent = () => {
	const meshRef = useRef();

	return (
		<Canvas>
			{/* <ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} /> */}
			<OrbitControls />
			<Sphere ref={meshRef} args={[1, 16, 16]} />
			{/* <pointLight position={[10, 10, 10]} /> */}
			{/* <mesh>
				<sphereBufferGeometry />
				<meshStandardMaterial color='hotpink' />
			</mesh> */}
		</Canvas>
	);
};

export default MyThreeJSComponent;
