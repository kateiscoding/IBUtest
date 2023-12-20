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
import Final from '../../../assets/final.png';
import FirstComponent from '../../Component1';
import SecondComponent from '../../Component2';
import ThirdComponent from '../../Component3';
import FourthComponent from '../../Component4';

function MainPage() {
	const [currentComponent, setCurrentComponent] = useState(1);

	useEffect(() => {
		const timer = setTimeout(() => {
			// 시간이 지난 후에 다음 컴포넌트로 변경
			setCurrentComponent((prevComponent) => (prevComponent % 2) + 1);
		}, 10000); // 10초 후에 컴포넌트 변경

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

			{/* 컴포넌트 10초 단위로 돌리기 */}
			{currentComponent === 1 && <FirstComponent />}
			{currentComponent === 2 && <SecondComponent />}
			{/* {currentComponent === 3 && <ThirdComponent />}
			{currentComponent === 4 && <FourthComponent />} */}
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

const Component1 = styled.div`
	gap: 8rem;

	position: relative; /* 추가 */
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 5rem; */}
`;

const Component2 = styled.div`
	gap: 8rem;

	position: relative; /* 추가 */
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 5rem; */}
`;

const Component3 = styled.div`
	gap: 8rem;

	position: relative; /* 추가 */
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 5rem; */}
`;

const Component4 = styled.div`
	gap: 8rem;

	position: relative; /* 추가 */
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 5rem; */}
`;

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
	gap: 7rem;
	overflow: hidden;
	position: relative; /* 추가 */
	background-color: black;
	display: flex;
	flex-direction: column;
	${'' /* height: 108rem; */}
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
	${
		'' /* overflow: hidden;
	max-width: 100%;
	width: 100%;
	max-height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: flex-start;  */
	}

	overflow: hidden;
	max-width: 100%;
	width: 100%;
	max-height: 100%;
	display: flex;
	top: 54rem;
	position: absolute;
	justify-content: center;
	align-items: flex-start;
`;

const EarthImageComponent = styled.img`
	display: flex;
	overflow: hidden;
	max-width: 100%;
	${'' /* position: absolute; */}
	background-size: cover;

	transform: scaleX(1.65) scaleY(0.9);
	${'' /* margin-top: -0.4%; */}
	transform-origin: top;
	flex-direction: column;
	align-items: center;
	${'' /* position: absolute; */}
	${'' /* margin-top: -0.4%; */}


	> img {
	}
`;
export default MainPage;
