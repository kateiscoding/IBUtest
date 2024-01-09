import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';

import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import RedLineImage from '../assets/phase3-line.png';
import IndustryLargeBottomRight from './IndustryLargeBottomRight';
import IndustryLargeTopLeft from './IndustryLargeTopLeft';
import IndustrySmallBottomLeft from './IndustrySmallBottomLeft';
import IndustrySmallTopRight from './IndustrySmallTopRight';
import PhaseThreeImage from '../assets/finalphase3.png';
import IndustryImageOne from '../assets/img-industry-1.png';
import IndustryImageTwo from '../assets/img-industry-2.png';
import IndustryImageThree from '../assets/img-industry-3.png';
import IndustryImageFour from '../assets/img-industry-4.png';

const fadeIn = keyframes`
   0% {
    
	opacity: 0;
  }
  100% {
    
	opacity: 1;
  }
`;

function ThirdComponent() {
	return (
		<PhaseThree>
			<TextContainer>
				<TextContent>
					<div>
						<p>InBody Applications</p>
					</div>
				</TextContent>
			</TextContainer>
			<MainContainer>
				<ContentBox>
					<IndustryLargeTopLeft
						title='Anti-Aging'
						caption='Treatment progression'
						image={IndustryImageOne}
					/>
					<IndustrySmallBottomLeft
						title='Nutrition'
						caption='Macro guidance'
						image={IndustryImageTwo}
					/>
					<IndustryLargeBottomRight
						title='Personal Training'
						caption='Targeted training'
						image={IndustryImageThree}
					/>
					<IndustrySmallTopRight
						title='Bariatrics'
						caption='Post op analysis'
						image={IndustryImageFour}
					/>
				</ContentBox>
			</MainContainer>
			<RedLineContainer>
				<img src={RedLineImage} alt='red-line' />
			</RedLineContainer>

			{/* <img src={PhaseThreeImage} alt='final' /> */}
		</PhaseThree>
	);
}

const RedLineContainer = styled.div`
	position: absolute;
	${'' /* width: 100%; */}
	height: auto;
	display: flex;
	z-index: 2;

	> img {
		width: 100%;
		display: flex;
		height: auto;
	}
`;

const MainContainer = styled.div`
	width: 384rem;
	display: flex;
	height: 100%;
	animation-delay: 1.5s;
`;

const ContentBox = styled.div`
	width: 192rem;
	height: auto;
	display: flex;

	> div:first-child {
		top: 10rem;
		left: 4rem;
	}

	> div:nth-child(2) {
		top: 50rem;
		left: -3rem;
	}

	> div:nth-child(3) {
		top: 5rem;
		left: -13rem;
	}

	> div:nth-child(4) {
		top: 50rem;
		left: -13rem;
	}
`;

const PhaseThree = styled.div`
	gap: 8rem;

	position: relative;
	background-color: black;
	display: flex;
	flex-direction: row;
	height: 108rem;
	align-items: flex-end;
	${'' /* gap: 5rem; */}

	> img {
		position: fixed;
		opacity: 0.2;
	}
`;

const TextContainer = styled.div`
	width: 192rem;
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	${'' /* margin-left: 17.5rem; */}
	align-items: flex-start;
	animation: ${fadeIn} 1.5s ease-in-out forwards;
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
	}
`;

export default ThirdComponent;
