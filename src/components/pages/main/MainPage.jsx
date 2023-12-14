import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import CountUp from 'react-countup';
// import StarfieldAnimation from 'react-starfield-animation';
// import EarthImage from '../../../assets/earth-image-2.png';
import EarthImage from '../../../assets/earth-image-4.png';
import InbodyMan from '../../../assets/inbodyman.png';
import FlagContainer from '../../Flags';
import MyThreeJSComponent from '../../MyThreeJSComponent';

import LiveDot from '../../../assets/icon-rec.png';

function MainPage() {
	// useEffect(() => {
	// 	let camera;
	// 	let scene;
	// 	let renderer;
	// 	const stars = [];

	// 	function init() {
	// 		// camera
	// 		camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
	// 		camera.position.z = 5;

	// 		scene = new THREE.Scene();

	// 		renderer = new THREE.WebGLRenderer();

	// 		renderer.setSize(window.innerWidth, window.innerHeight);

	// 		document.body.appendChild(renderer.domElement);
	// 	}

	// 	function addSphere() {
	// 		for (let z = -1000; z < 1000; z += 20) {
	// 			const geometry = new THREE.SphereGeometry(0.5, 32, 32);
	// 			const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
	// 			const sphere = new THREE.Mesh(geometry, material);

	// 			sphere.position.x = Math.random() * 1000 - 500;
	// 			sphere.position.y = Math.random() * 1000 - 500;
	// 			sphere.position.z = z;

	// 			sphere.scale.x = 2;
	// 			sphere.scale.y = 2;

	// 			scene.add(sphere);
	// 			stars.push(sphere);
	// 		}
	// 	}
	// 	function animateStars() {
	// 		for (let i = 0; i < stars.length; i += 1) {
	// 			const star = stars[i];
	// 			star.position.z += i / 10;
	// 			if (star.position.z > 1000) star.position.z -= 2000;
	// 		}
	// 	}

	// 	function render() {
	// 		requestAnimationFrame(render);
	// 		animateStars();
	// 		renderer.render(scene, camera);
	// 	}

	// 	init();
	// 	addSphere();
	// 	render();
	// }, []);

	return (
		<Main id='canvas-container'>
			<Counter>
				<div>
					<div>
						<div>
							<img src={LiveDot} alt='livedot' />
							<span>L I V E</span>
						</div>
						<b>TOTAL GLOBAL TESTS</b>
					</div>
					{/* <p>110,000,378</p> */}
				</div>
				<CountUp start={100000000} end={109999900} />
			</Counter>

			<FlagContainer />
			<EarthContainer>
				<EarthImageComponent src={EarthImage} alt='earth-image' />
			</EarthContainer>

			{/* <MyThreeJSComponent /> */}
			{/* <ThreeCanvas id='canvas-container' /> */}
		</Main>
	);
}
// const Background = styled.main`
// 	position: relative;
// 	width: 100%;
// 	overflow-x: hidden;
// 	overflow-y: hidden;
// 	height: 108rem;
// 	overflow: hidden;
// `;

const Main = styled.main`
	${
		'' /* background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 8rem; */
	}
	gap: 5rem;

	position: relative; /* 추가 */
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 5rem; */}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1; /* 추가 */
		width: 100%;
		height: 100%;
	}
`;

const Counter = styled.div`
	${
		'' /* height: 60rem;
	width: 100%;
	display: flex;
	margin-top: 22rem;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
	}

	height: 30rem;
	z-index: 2;
	width: 100%;
	display: flex;
	margin-top: 22rem;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	> div {
		display: flex;
		flex-direction: column;
		width: 130rem;
		gap: 0.9rem;

		${
			'' /* > p {
			color: #fff;

			text-align: center;
			font-size: 22.4rem;
			font-style: normal;
			font-weight: 600;
			line-height: 1;
		} */
		}

		${
			'' /* > span {
			color: #fff;

			text-align: center;
			font-size: 22.4rem;
			font-style: normal;
			font-weight: 600;
			line-height: 1;
		} */
		}

		> div {
			display: flex;
			gap: 11rem;

			> b {
				color: #fff;
				display: flex;
				text-align: center;
				font-size: 4.4rem;
				${'' /* font-style: normal; */}
				font-weight: 600;
				${'' /* line-height: normal; */}
				letter-spacing: 1rem;
				flex-direction: column;
				align-items: flex-start;
				lineheight: 44;
				${'' /* letterspacing: 10.86; */}
				wordwrap: 'break-word';
				justify-content: center;
			}

			> div {
				background: #971b2f;
				width: 20.1rem;
				height: 6rem;
				${'' /* font-size: 4.4rem; */}
				display: flex;
				padding: 0.8rem 1.6rem;
				font-weight: bold;
				line-height: 4rem;
				display: flex;
				border-radius: 0.8rem;
				justify-content: space-around;
				align-items: center;
				${'' /* letterspacing: 10.56; */}
				border-radius: 0.5rem;
				gap: 0.6rem;

				> span {
					display: flex;
					color: 'black';
					font-size: 4.1rem;
					font-weight: '700';
				}
			}
		}
	}
	${'' /* Count UP */}
	> span {
		color: #fff;
		display: flex;
		text-align: center;
		font-size: 22.4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1;
	}
`;

const CountUpStyled = styled.div`
	color: #fff;

	text-align: center;
	font-size: 22.4rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1;
`;

const EarthContainer = styled.div`
	overflow: hidden;
	max-width: 100%;
	width: 100%;
	max-height: 100%;

	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

const EarthImageComponent = styled.img`
	display: flex;
	overflow: hidden;
	max-width: 100%;

	background-size: cover;

	transform: scaleX(1.65) scaleY(0.9);
	${'' /* margin-top: -0.4%; */}
	transform-origin: top;

	${'' /* position: absolute; */}
	${'' /* margin-top: -0.4%; */}


	> img {
	}
`;
export default MainPage;
