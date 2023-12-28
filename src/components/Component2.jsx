import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';

const fadeIn = keyframes`
   0% {
    
	opacity: 0;
  }
  100% {
    
	opacity: 1;
  }
`;

function SecondComponent() {
	return (
		<Component2>
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
						<div>1996</div>
						<div>2000</div>
						<div>2009</div>
						<div>2013</div>
						<div>2014</div>
						<div>2015</div>
						<div>2016</div>
						<div>2017</div>
						<div>2019</div>
						<div>2020</div>
						<div>2023</div>
					</YearContainer>
					<FirstContainer>
						<p>third</p>
					</FirstContainer>
					<SecondContainer>
						<p>third</p>
					</SecondContainer>
					<ThirdContainer>
						<p>third</p>
					</ThirdContainer>
					<LaunchIcon>
						<p>LAUNCHED</p>

						<div>
							<div>2013</div>
							<div>570</div>
						</div>
					</LaunchIcon>
					<AwardIcon>
						<p>Listed on</p>
						<p>KOSDAQ</p>
					</AwardIcon>
				</ImageContainer>
			</HistoryLayout>
		</Component2>
	);
}

const LaunchIcon = styled.div`
	border-radius: 0.618rem;
	background-color: #e8e8e8;
	width: 12.7rem;
	height: 6.8rem;
	flex-shrink: 0;
	padding: 0.9rem;

	>p: first-child {
		color: var(--BrandCI, #971b2f);
		font-size: 1.85rem;
		font-style: normal;
		font-weight: 600;
		line-height: 110%; /* 1.275rem */
		letter-spacing: -0.029rem;
	}

	> div {
		display: flex;
		${'' /* gap: 1.3rem; */}
		font-size: 1.85rem;
		font-style: normal;
		font-weight: 600;
		line-height: 110%; /* 1.275rem */
		letter-spacing: -0.029rem;
		flex-direction: row;
		justify-content: space-between;

		>div: first-child {
			color: var(--BrandCI, #971b2f);
			display: flex;
			font-size: 1.85rem;
			flex-direction: row;
			align-items: center;
		}
		>div: last-child {
			display: flex;
			border-radius: 0.33488rem;
			width: 4.8rem;
			height: 2.5rem;
			color: white;
			font-size: 1.85rem;
			font-weight: 600;
			line-height: 110;
			flex-shrink: 0;
			background: #971b2f;
		}
	}
`;

const AwardIcon = styled.div`
	border-radius: 1rem;
	background-color: rgba(255, 255, 255, 0.3);
	${'' /* width: 12.7rem; */}
	font-size: 1.935rem;
	line-height: 2.1rem;
	height: 6.8rem;
	flex-shrink: 0;
	padding: 1.6rem 4.5rem 1.6rem 1.6rem;
	color: white;
`;

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

const FirstContainer = styled.div`
	${'' /* width: 468rem; */}
	display: flex;
`;

const SecondContainer = styled.div`
	${'' /* width: 468rem; */}
	display: flex;
`;

const ThirdContainer = styled.div`
	${'' /* width: 468rem; */}
	display: flex;
`;

const FourthContainer = styled.div`
	${'' /* width: 468rem; */}
	display: flex;
`;

const YearContainer = styled.div`
	top: 50rem;
	position: absolute;
	width: 457.5rem;
	height: 6rem;
	flex-shrink: 0;
	background: linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0) 5.8%),
		linear-gradient(90deg, #000 -0.39%, rgba(0, 0, 0, 0) 8.89%), #6c1624;
	display: flex;
	gap: 20rem;
	align-items: center;
	> div {
		color: white;
		display: flex;
		font-size: 4.2rem;
		font-weight: 600;
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
	animation: ${fadeIn} 1.5s ease-in-out forwards;

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
		}
	}
`;

const Component2 = styled.div`
	position: relative;
	${'' /* background-color: black; */}
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 5rem; */}
	z-index: 2;
`;

export default SecondComponent;
