import React, { useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import CountUp from 'react-countup';
// import StarfieldAnimation from 'react-starfield-animation';
// import EarthImage from '../../../assets/earth-image-2.png';
import EarthImage from '../../../assets/earth-image-4.png';
import InbodyMan from '../../../assets/inbodyman.png';
import FlagContainer from '../../Flags';
import MyThreeJSComponent from '../../MyThreeJSComponent';
import InbodyMainLogo from '../../../assets/img-logo.png';
import LiveDot from '../../../assets/icon-rec.png';
import Final from '../../../assets/final.png';
import FirstComponent from '../../PhaseOne';
import SecondComponent from '../../PhaseTwo';
import ThirdComponent from '../../PhaseThree';
import FourthComponent from '../../PhaseFour';
import HistoryComponentImage from '../../Components';
import Earth from '../../EarthImage';

function MainPage() {
	const [currentComponent, setCurrentComponent] = useState(1);

	useEffect(() => {
		const timer = setTimeout(() => {
			// 시간이 지난 후에 다음 컴포넌트로 변경
			setCurrentComponent((prevComponent) => (prevComponent % 3) + 1);
		}, 18000); // 20초 후에 컴포넌트 변경

		return () => clearTimeout(timer);
	}, [currentComponent]);

	return (
		<Main id='canvas-container'>
			{/* 비교용 이미지  */}
			{/* <ImageContainer>
				<FinalImage src={Final} alt='final-image' />
			</ImageContainer> */}
			{/* <FirstComponent /> */}
			{/* <SecondComponent /> */}
			{/* <ThirdComponent /> */}
			{/* <FourthComponent /> */}
			{/* <HistoryComponentImage /> */}
			{/* 컴포넌트 10초 단위로 돌리기 */}
			{currentComponent === 1 && <FirstComponent />}
			{currentComponent === 2 && <SecondComponent />}
			{currentComponent === 3 && <ThirdComponent />}
			{/* {currentComponent === 4 && <FourthComponent />} */}
			<Earth />
			{/* <Earth3D /> */}
			<InbodyLogo>
				<img src={InbodyMainLogo} alt='inbody-logo' />
			</InbodyLogo>
			{/* <MyThreeJSComponent /> */}
			{/* <ThreeCanvas id='canvas-container' /> */}
			{/* <Canvas>
				<Suspense fallback={<div>Loading...</div>}>
					<ThreeModel />
				</Suspense>
			</Canvas> */}
		</Main>
	);
}

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
	overflow: hidden;
	position: relative;
	background-color: black;
	display: flex;
	flex-direction: column;
	${'' /* height: 108rem; */}
	align-items: center;

	canvas {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
	}
`;

export default MainPage;
