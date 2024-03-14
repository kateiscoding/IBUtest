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
import FirstComponent from '../../PhaseOne';
import SecondComponent from '../../PhaseTwo';
import ThirdComponent from '../../PhaseThree';
import FourthComponent from '../../PhaseFour';
import Earth from '../../EarthImage';

function MainPage() {
	const [currentComponent, setCurrentComponent] = useState(1);

	useEffect(() => {
		const timer = setTimeout(() => {
			// 시간이 지난 후에 다음 컴포넌트로 변경
			setCurrentComponent((prevComponent) => (prevComponent % 4) + 1);
		}, 18000); // 20초 후에 컴포넌트 변경

		return () => clearTimeout(timer);
	}, [currentComponent]);

	return (
		<Main id='canvas-container'>
			{/* <FirstComponent /> */}
			{/* <SecondComponent /> */}
			{/* <ThirdComponent /> */}
			{/* <FourthComponent /> */}

			{/* 컴포넌트 10초 단위로 돌리기 */}
			{currentComponent === 1 && <FirstComponent />}
			{currentComponent === 2 && <SecondComponent />}
			{currentComponent === 3 && <ThirdComponent />}
			{currentComponent === 4 && <FourthComponent />}
			<Earth />

			<InbodyLogo>
				<img src={InbodyMainLogo} alt='inbody-logo' />
			</InbodyLogo>
		</Main>
	);
}

const InbodyLogo = styled.div`
	${'' /* width: 100%; */}
	position: absolute;
	display: flex;
	top: 10rem;
	left: 10rem;
`;

const Main = styled.main`
	gap: 8rem;
	overflow: hidden;
	position: relative;
	background-color: black;
	display: flex;
	flex-direction: column;
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
