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
import InbodyMainLogo from '../../../assets/img-logo.png';
import LiveDot from '../../../assets/icon-rec.png';
// import Final from '../../../assets/final.png';

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
			{/* <ImageContainer>
				<FinalImage src={Final} alt='final-image' />
			</ImageContainer> */}
			{/* <img src={FinalImage} alt='final-image' className='ImageContainer' /> */}

			{/* <img src={FinalImage} alt='final-image' />
			</ImageContainer> */}
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
				<CountUp start={100000000} end={111152421} />
			</Counter>

			<FlagContainer />
			<EarthContainer>
				<EarthImageComponent src={EarthImage} alt='earth-image' />
			</EarthContainer>

			<InbodyLogo>
				<img src={InbodyMainLogo} alt='inbody-logo' />
			</InbodyLogo>
			{/* <MyThreeJSComponent /> */}
			{/* <ThreeCanvas id='canvas-container' /> */}
		</Main>
	);
}

const FlagPositioner = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

// const Flag = styled.div`
// 	width: 100px;
// 	height: 100px;
// 	transform: rotate(180deg);
// 	transform-origin: 0 0;
// 	border-top-left-radius: 24px;
// 	border-top-right-radius: 24px;
// 	border-bottom-right-radius: 24px;
// 	border: 4px #6c1624 dotted;
// 	margin: 5px; /* Adjust this value for spacing between flags */
// `;

const ImageContainer = styled.div`
	width: 100%;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 15;
	opacity: 0.95;
	width: 100%;
	overflow: hidden;
	max-width: 100%;
	width: 100%;
	max-height: 100%;

	display: flex;
	justify-content: center;
	align-items: flex-start;

	> img {
	}
`;

const FinalImage = styled.img`
	display: flex;
	z-index: 15;
	opacity: 0.8;
	display: flex;
	overflow: hidden;
	max-width: 100%;

	background-size: cover;

	${'' /* margin-top: -0.4%; */}
	transform-origin: top;

	${'' /* position: absolute; */}
	${'' /* margin-top: -0.4%; */}


	> img {
	}
`;

const InbodyLogo = styled.div`
	${'' /* width: 100%; */}
	position: absolute;
	display: flex;
	top: 10rem;
	left: 10rem;
`;

const Main = styled.main`
	${
		'' /* background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 8rem; */
	}
	gap: 8rem;

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
	margin-top: 19rem;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	> div {
		display: flex;
		flex-direction: column;
		width: 129rem;
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
		width: 129rem;
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
