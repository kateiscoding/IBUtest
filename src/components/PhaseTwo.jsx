import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import LaunchIcon from './LaunchIcon';
import AwardIcon from './AwardIcon';
import HistoryLeftTopComponent from './HistoryLeftTop';
import HistoryRightBottomComponent from './HistoryRightBottom';
import HistoryLeftBottomComponent from './HistoryLeftBottom';
import HistoryRightTopComponent from './HistoryRightTop';
import HistoryImage1 from '../assets/img-history-1.png';
import HistoryImage2 from '../assets/img-history-2.png';
import HistoryImage3 from '../assets/img-history-3.png';
import HistoryImage4 from '../assets/img-history-4.png';
import HistoryImage5 from '../assets/img-history-5.png';
import HistoryImage6 from '../assets/img-history-6.png';
import HistoryImage7 from '../assets/img-history-7.png';
import HistoryImage8 from '../assets/img-history-8.png';
import HistoryImage9 from '../assets/img-history-9.png';
import HistoryImage10 from '../assets/img-history-10.png';
import IconKosdaq from '../assets/ic-kosdaq.png';
import IconCes from '../assets/ic-ces.png';
import IconGoodDesign from '../assets/ic-good.png';
import IconRedDot from '../assets/ic-reddot.png';
import IconIf from '../assets/ic-if.png';

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
	const containerData = [
		{
			id: 'container1',
			components: [
				{
					id: 'component1',
					component: HistoryRightBottomComponent,
					text: 'InBody from South Korea Accurate body measurements no complexity',
					image: HistoryImage1,
				},
				{
					id: 'component2',
					component: HistoryLeftTopComponent,
					text: 'First oversea subsidiary in USA InBody receives FDA Approval',
					image: HistoryImage2,
				},
			],
		},
		{
			id: 'container2',
			components: [
				{
					id: 'component1',
					component: HistoryRightBottomComponent,
					text: 'Corporate office  moves from Beverly Hills to Cerritos, California',
					image: HistoryImage3,
				},
				{
					id: 'component2',
					component: HistoryRightBottomComponent,
					text: 'InBody 770 wins IF Design & Foreign Direct Investment Awards',
					image: HistoryImage4,
				},
				{
					id: 'component3',
					component: HistoryLeftTopComponent,
					text: 'InBody 570, capable of measuring segmental fat, visceral fat released',
					image: HistoryImage5,
				},
				{
					id: 'component4',
					component: HistoryLeftTopComponent,
					text: 'Cloud based data management services launched LookinBody Web',
					image: HistoryImage6,
				},
			],
		},
		{
			id: 'container3',
			components: [
				{
					id: 'component1',
					component: HistoryLeftBottomComponent,
					text: "World's First 3MHz,\nISO/IEC27001 Certification",
					image: HistoryImage7,
				},
				{
					id: 'component2',
					component: HistoryRightBottomComponent,
					text: '100 Million Tests Recorded Globally New version of the App released',
					image: HistoryImage9,
				},
				{
					id: 'component3',
					component: HistoryRightTopComponent,
					text: 'Expansion of the Cheonan Production Factory',
					image: HistoryImage8,
				},
				{
					id: 'component4',
					component: HistoryRightTopComponent,
					text: 'InBody Releases New BWA 2.0 Body Water Analyzer',
					image: HistoryImage10,
				},
			],
		},
	];

	const awardsData = [
		{
			id: 'container1',
			components: [
				{
					id: 'component1',
					component: AwardIcon,
					text: 'Listed on \n KOSDAQ',
					image: IconKosdaq,
				},
			],
		},
		{
			id: 'container2',
			components: [
				{
					id: 'component1',
					component: AwardIcon,
					text: '2017 iF \n Design Award',
					image: IconIf,
					specialStyle: true,
				},
				{
					id: 'component2',
					component: AwardIcon,
					text: 'Red Dot\nDesign Award',
					image: IconRedDot,
					specialStyle: false,
				},
			],
		},

		{
			id: 'container3',
			components: [
				{
					id: 'component1',
					component: AwardIcon,
					text: 'CES Innovation\nAward',
					image: IconCes,
				},
				{
					id: 'component2',
					component: AwardIcon,
					text: 'Good Design\n Award',
					image: IconGoodDesign,
				},
			],
		},
	];

	const launchData = [
		{
			id: 'container1',
			components: [
				{
					id: 'component1',
					component: LaunchIcon,
					year: '2005',
					product: '720',
				},
			],
		},
		{
			id: 'container2',
			components: [
				{
					id: 'component1',
					component: LaunchIcon,
					year: '2020',
					product: '230',
				},
				{
					id: 'component2',
					component: LaunchIcon,
					year: '2013',
					product: '570',
				},
				{
					id: 'component3',
					component: LaunchIcon,
					year: '2014',
					product: '770',
				},
				{
					id: 'component4',
					component: LaunchIcon,
					year: '2016',
					product: '270',
				},
			],
		},

		{
			id: 'container3',
			components: [
				{
					id: 'component1',
					component: LaunchIcon,
					year: '2022',
					product: '970',
				},
				{
					id: 'component2',
					component: LaunchIcon,
					year: '2022',
					product: 'BWA',
				},
			],
		},
	];

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
							<div>2012</div>
							<div>2013</div>
							<div>2015</div>
							<div>2016</div>
							<div>2017</div>
							<div>2020</div>
							<div>2022</div>
							<div>2023</div>
						</div>
					</YearContainer>
					<FirstContainer>
						<div>
							{/* Award Icon */}
							{awardsData[0].components.map((data) => (
								<data.component key={data.id} text={data.text} image={data.image} />
							))}
							{/* LaunchIcon */}
							{launchData[0].components.map((data) => (
								<data.component key={data.id} year={data.year} product={data.product} />
							))}

							{/* History Card */}
							{containerData[0].components.map((data) => (
								<data.component key={data.id} text={data.text} image={data.image} />
							))}
						</div>
					</FirstContainer>
					<SecondContainer>
						<div>
							{/* Award Icon */}
							{awardsData[1].components.map((data) => (
								<data.component key={data.id} text={data.text} image={data.image} />
							))}
							{/* LaunchIcon */}
							{launchData[1].components.map((data) => (
								<data.component key={data.id} year={data.year} product={data.product} />
							))}
							{/* History Card */}
							{containerData[1].components.map((data) => (
								<data.component key={data.id} text={data.text} image={data.image} />
							))}
						</div>
					</SecondContainer>
					<ThirdContainer>
						<div>
							{/* Award Icon */}
							{awardsData[2].components.map((data) => (
								<data.component key={data.id} text={data.text} image={data.image} />
							))}
							{/* LaunchIcon */}
							{launchData[2].components.map((data) => (
								<data.component key={data.id} year={data.year} product={data.product} />
							))}
							{/* History Card */}
							{containerData[2].components.map((data) => (
								<data.component key={data.id} text={data.text} image={data.image} />
							))}
						</div>
					</ThirdContainer>
				</ImageContainer>
			</HistoryLayout>

			{/* <img src={finalphase2} alt='final' /> */}
		</PhaseTwo>
	);
}

const PhaseTwo = styled.div`
	position: relative;
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

const HistoryLayout = styled.div`
	width: 576rem;
	display: flex;
	height: 100%;
	${'' /* gap: 10rem; */}
	flex-direction: row;
	justify-content: space-between;
`;

// 좌측 텍스트 영역
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

		${'' /* 메인 타이틀 */}

		> p:first-child {
			font-size: 16rem;
			color: white;
			display: flex;
			font-weight: 700;
			line-height: 90%;
		}

		${'' /* 서브 타이틀 */}
		> p:last-child {
			font-size: 3.3rem;
			color: white;
			letter-spacing: -0.05156rem;
			display: flex;
			font-weight: 400;
			line-height: 130%;
			width: 70rem;

			animation: ${fadeIn} 1.5s ease-in-out forwards;
		}
	}
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
			top: 15rem;
			left: 10rem;
			position: absolute;
		}

		> div:nth-child(4) {
			top: 56rem;
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
			top: 38.5rem;
			left: 162.5rem;
		}

		> div:nth-child(2) {
			top: 29rem;
			left: 74.5rem;
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
			top: 56rem;
			left: 43rem;
			position: absolute;
		}

		> div:nth-child(10) {
			top: 56rem;
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
			top: 38.5rem;
			left: 5rem;
		}

		> div:nth-child(2) {
			top: 29rem;
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
			left: 129.5rem;
			position: absolute;
		}

		> div:nth-child(7) {
			top: 56rem;
			left: 14rem;
			position: absolute;
		}

		> div:nth-child(8) {
			top: 56rem;
			left: 99rem;
			position: absolute;
		}
	}
`;

const YearContainer = styled.div`
	top: 50.5rem;
	position: absolute;
	width: 466.6rem;
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

export default SecondComponent;
