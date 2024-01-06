import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';

import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import RedLineImage from '../assets/phase3-line.png';

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
					<p>hi</p>
				</ContentBox>
			</MainContainer>
			<RedLineContainer>
				<img src={RedLineImage} alt='red-line' />
			</RedLineContainer>
		</PhaseThree>
	);
}

const RedLineContainer = styled.div`
	position: absolute;
	width: 100%;
	height: auto;
	display: flex;
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

	${
		'' /* > p {
		font-size: 18rem;
		font-color: white;
		color: white;
	} */
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
