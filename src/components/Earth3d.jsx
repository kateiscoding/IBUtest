import React, { useRef } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

import { Stars } from '@react-three/drei';
import EarthDayMap from '../assets/textures/8k_earth_daymap.jpg';
import EarthNormalMap from '../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudMap from '../assets/textures/8k_earth_clouds.jpg';

function Earth(props) {
	const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
		EarthDayMap,
		EarthNormalMap,
		EarthSpecularMap,
		EarthCloudMap,
	]);

	const earthRef = useRef();
	const cloudsRef = useRef();

	const { camera, gl } = useThree(); // Three.js의 카메라와 렌더러 가져오기

	useFrame(() => {
		// 회전 애니메이션을 적용하려면 주석 해제하세요
		// const elapsedTime = clock.getElapsedTime();
		// earthRef.current.rotation.y = elapsedTime / 6;
		// cloudsRef.current.rotation.y = elapsedTime / 6;
	});

	// //회전을 위해
	// useFrame(({ clock }) => {
	// 	const elapsedTime = clock.getElapsedTime();

	// 	earthRef.current.rotation.y = elapsedTime / 6;
	// 	cloudsRef.current.rotation.y = elapsedTime / 6;
	// });

	return (
		<>
			<ambientLight intensity={3} />
			<pointLight color='#f6f3ea' position={[2, 0, 2]} intensity={1} />
			<Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />

			<mesh ref={earthRef}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial specularMap={specularMap} />
				<meshStandardMaterial
					map={colorMap}
					normalMap={normalMap}
					metalness={0.4}
					roughness={0.7}
				/>
			</mesh>

			<mesh ref={earthRef}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial specularMap={specularMap} />
				<meshStandardMaterial
					map={colorMap}
					normalMap={normalMap}
					metalness={0.4}
					roughness={0.7}
				/>

				<orbitControls args={[camera, gl.domElement]} />
			</mesh>
		</>
	);
}

export default Earth;
