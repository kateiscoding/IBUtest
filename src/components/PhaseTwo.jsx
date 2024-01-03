import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
// import IconContainer from './Components';
import LaunchIcon from './LaunchIcon';
import AwardIcon from './AwardIcon';
import finalphase2 from '../assets/phase2-final.png';
import HistoryLeftTopComponent from './HistoryLeftTop';
import HistoryRightBottomComponent from './HistoryRightBottom';
import HistoryLeftBottomComponent from './HistoryLeftBottom';
import HistoryRightTopComponent from './HistoryRightTop';
import HistoryCard from './Components';

const fadeIn = keyframes`
   0% {
    
	opacity: 0;
  }
  100% {
    
	opacity: 1;
  }
`;

const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px); /* 시작 시 왼쪽으로 이동 */
  }
  to {
    opacity: 1;
    transform: translateX(0); /* 최종 위치 */
  }
`;

function SecondComponent() {
	return (
		<PhaseTwo>
			<HistoryLayout>
				<TextContainer>
					<TextContent>
						<div>
							<p>InBody Story</p>
							<p>
								In the early 1990s, Dr. Kichul Cha, founder and CEO, identified limitations in
								current composition analysis devices.
							</p>
						</div>
					</TextContent>
				</TextContainer>
				<ImageContainer>
					<YearContainer>
						<div>
							<div>1996</div>
							<div>2000</div>
							{/* <div>2009</div> */}
							<div>2012</div>
							<div>2013</div>
							<div>2015</div>
							<div>2016</div>
							<div>2017</div>
							{/* <div>2018</div> */}
							{/* <div>2019</div> */}
							<div>2020</div>
							<div>2022</div>
							<div>2023</div>
						</div>
					</YearContainer>
					<FirstContainer>
						<div>
							<AwardIcon />
							<LaunchIcon />

							<HistoryRightBottomComponent />

							<HistoryLeftTopComponent />
						</div>
					</FirstContainer>
					<SecondContainer>
						<div>
							<AwardIcon />
							<AwardIcon />
							<LaunchIcon />
							<LaunchIcon />
							<LaunchIcon />
							<LaunchIcon />

							<HistoryRightBottomComponent />
							<HistoryRightBottomComponent />
							<HistoryLeftTopComponent />
							<HistoryLeftTopComponent />
						</div>
					</SecondContainer>
					<ThirdContainer>
						<div>
							<AwardIcon />
							<AwardIcon />
							<LaunchIcon />
							<LaunchIcon />

							<HistoryLeftBottomComponent />
							<HistoryRightBottomComponent />
							<HistoryRightTopComponent />
							<HistoryRightTopComponent />
						</div>
					</ThirdContainer>
				</ImageContainer>
			</HistoryLayout>

			{/* <img src={finalphase2} alt='final' /> */}
		</PhaseTwo>
	);
}

// const LaunchIcon = styled.div`
// 	border-radius: 0.618rem;
// 	background-color: #e8e8e8;
// 	width: 12.7rem;
// 	height: 6.8rem;
// 	flex-shrink: 0;
// 	padding: 0.9rem;

// 	>p: first-child {
// 		color: var(--BrandCI, #971b2f);
// 		font-size: 1.85rem;
// 		font-style: normal;
// 		font-weight: 600;
// 		line-height: 110%; /* 1.275rem */
// 		letter-spacing: -0.029rem;
// 	}

// 	> div {
// 		display: flex;
// 		${'' /* gap: 1.3rem; */}
// 		font-size: 1.85rem;
// 		font-style: normal;
// 		font-weight: 600;
// 		line-height: 110%; /* 1.275rem */
// 		letter-spacing: -0.029rem;
// 		flex-direction: row;
// 		justify-content: space-between;

// 		>div: first-child {
// 			color: var(--BrandCI, #971b2f);
// 			display: flex;
// 			font-size: 1.85rem;
// 			flex-direction: row;
// 			align-items: center;
// 		}
// 		>div: last-child {
// 			display: flex;
// 			border-radius: 0.33488rem;
// 			width: 4.8rem;
// 			height: 2.5rem;
// 			color: white;
// 			font-size: 1.85rem;
// 			font-weight: 600;
// 			line-height: 110;
// 			flex-shrink: 0;
// 			background: #971b2f;
// 		}
// 	}
// `;

// const AwardIcon = styled.div`
// 	border-radius: 1rem;
// 	background-color: rgba(255, 255, 255, 0.3);
// 	${'' /* width: 12.7rem; */}
// 	font-size: 1.935rem;
// 	line-height: 2.1rem;
// 	height: 6.8rem;
// 	flex-shrink: 0;
// 	padding: 1.6rem 4.5rem 1.6rem 1.6rem;
// 	color: white;
// `;

const HistoryLayout = styled.div`
	${
		'' /* width: 576rem;
	display: flex;
	height: 100%; */
	}

	width: 576rem;
	display: flex;
	height: 100%;
	${'' /* gap: 10rem; */}
	flex-direction: row;
	${'' /* justify-content: center; */}
	justify-content: space-between;
`;
const TextContainer = styled.div`
	width: 108rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	${'' /* margin-left: 17.5rem; */}
	align-items: flex-start;
`;

const ImageContainer = styled.div`
	width: 468rem;
	display: flex;
`;

// 첫번째 이미지 컨테이너
const FirstContainer = styled.div`
	width: 84rem;
	display: flex;
	opacity: 0;
	z-index: 2;
	animation: ${fadeInFromLeft} 1s ease-in-out forwards;
	animation-delay: 1.5s;

	> div {
		> div:first-child {
			top: 38.6rem;
			left: 56.9rem;
		}
		> div:nth-child(2) {
			top: 58.5rem;
			left: 68rem;
			position: absolute;
		}

		> div:nth-child(3) {
			top: 14.5rem;
			left: 10rem;
			position: absolute;
		}

		> div:nth-child(4) {
			top: 56.5rem;
			left: 21rem;
			position: absolute;
		}
	}
`;
// 두번쨰 이미지 컨테이너
const SecondContainer = styled.div`
	width: 190rem;
	display: flex;
	opacity: 0;
	${'' /* position: relative; */}
	animation: ${fadeInFromLeft} 1s ease-in-out forwards;
	animation-delay: 2.5s;

	> div {
		> div:first-child {
			top: 39rem;
			left: 162rem;
		}

		> div:nth-child(2) {
			top: 30rem;
			left: 75rem;
		}

		> div:nth-child(3) {
			top: 58.5rem;
			left: 123rem;
			position: absolute;
		}

		> div:nth-child(4) {
			top: 58.5rem;
			left: 4rem;
			position: absolute;
		}

		> div:nth-child(5) {
			top: 58.5rem;
			left: 70rem;
			position: absolute;
		}

		> div:nth-child(6) {
			top: 58.5rem;
			left: 95rem;
			position: absolute;
		}

		> div:nth-child(7) {
			top: 15rem;
			left: 27rem;
			position: absolute;
		}

		> div:nth-child(8) {
			top: 15rem;
			left: 114rem;
			position: absolute;
		}

		> div:nth-child(9) {
			top: 56.5rem;
			left: 43.5rem;
			position: absolute;
		}

		> div:nth-child(10) {
			top: 56.5rem;
			left: 137.5rem;
			position: absolute;
		}
	}
`;
// 세번째 이미지 컨테이너
const ThirdContainer = styled.div`
	width: 190rem;
	display: flex;
	opacity: 0;
	animation: ${fadeInFromLeft} 1s ease-in-out forwards;
	animation-delay: 3.5s;

	> div {
		> div:first-child {
			top: 39rem;
			left: 5rem;
		}

		> div:nth-child(2) {
			top: 30rem;
			left: 90.5rem;
		}

		> div:nth-child(3) {
			top: 58.5rem;
			left: 85.5rem;

			position: absolute;
		}

		> div:nth-child(4) {
			top: 58.5rem;
			left: 103rem;
			position: absolute;
		}

		> div:nth-child(5) {
			top: 15rem;
			left: 34rem;
			position: absolute;
		}

		> div:nth-child(6) {
			top: 15rem;
			left: 130rem;
			position: absolute;
		}

		> div:nth-child(7) {
			top: 56rem;
			left: 14rem;
			position: absolute;
		}

		> div:nth-child(8) {
			top: 56rem;
			left: 100rem;
			position: absolute;
		}
	}
`;

const FourthContainer = styled.div`
	${'' /* width: 468rem; */}
	display: flex;
`;

const YearContainer = styled.div`
	top: 50.5rem;
	position: absolute;
	width: 457.5rem;
	height: 6rem;
	flex-shrink: 0;
	background: linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0) 5.8%),
		linear-gradient(90deg, #000 -0.39%, rgba(0, 0, 0, 0) 8.89%), #6c1624;
	display: flex;
	gap: 30rem;
	align-items: center;

	opacity: 0; /* 초기에 안 보이게 */
	animation: ${fadeInFromLeft} 1s ease-in-out forwards;
	animation-delay: 1s;

	> div {
		color: white;
		display: flex;
		font-size: 4.2rem;
		font-weight: 600;

		${'' /* 연도 컴포넌트 위치 설정 */}

		${'' /* 1996 */}
		> div:first-child {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 6.8rem;
			position: relative;
		}
		${'' /* 2000 */}
		> div:nth-child(2) {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 48rem;
			position: relative;
		}
		${'' /* 2012 */}
		> div:nth-child(3) {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 86.5rem;
			position: relative;
		}
		${'' /* 2013 */}
		> div:nth-child(4) {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 134.5rem;
			position: relative;
		}
		${'' /* 2015 */}
		> div:nth-child(5) {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 155rem;
			position: relative;
		}
		${'' /* 2016 */}
		> div:nth-child(6) {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 208rem;
			position: relative;
		}
		${'' /* 2017 */}
		> div:nth-child(7) {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 226rem;
			position: relative;
		}
		${'' /* 2020 */}
		> div:nth-child(8) {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 276rem;
			position: relative;
		}
		${'' /* 2022 */}
		> div:nth-child(9) {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 291rem;
			position: relative;
		}
		${'' /* 2023 */}
		> div:nth-child(10) {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 312rem;
			position: relative;
		}

		> div:nth-child(11) {
			display: flex;

			font-size: 4.2rem;
			font-weight: 600;
			left: 303.5rem;
			position: relative;
		}
	}
`;
const TextContent = styled.div`
	color: white;
	display: flex;
	${'' /* margin: 33rem 17rem; */}
	width: 74rem;
	margin-left: 25rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 5rem;

	> div {
		${'' /* margin-top: 16rem; */}
		display: flex;
		flex-direction: column;
		gap: 6.4rem;
		${'' /* width: 74rem; */}

		> p:first-child {
			font-size: 16rem;
			color: white;
			display: flex;
			font-weight: 700;
			line-height: 90%;
		}

		> p:last-child {
			font-size: 3.3rem;
			color: white;
			letter-spacing: -0.05156rem;
			display: flex;
			font-weight: 400;
			line-height: 130%;
			width: 74rem;

			animation: ${fadeIn} 1.5s ease-in-out forwards;
		}
	}
`;

const PhaseTwo = styled.div`
	position: relative;
	${'' /* background-color: black; */}
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 5rem; */}
	z-index: 2;

	> img {
		position: fixed;
		opacity: 0.2;
	}
`;

export default SecondComponent;
