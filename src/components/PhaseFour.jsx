import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';

const fadeIn = keyframes`
   0% {
    
	opacity: 0;+-


	
  }
`;

function FourthComponent() {
	return (
		<PhaseFour>
			<IntroLayout>
				<FirstComponent>
					<MainTitle>
						<p>Dive Deep,</p>
					</MainTitle>
				</FirstComponent>
				<SecondComponent>
					<MainTitle>
						<p>Explore Into your Body.</p>
					</MainTitle>
				</SecondComponent>
			</IntroLayout>
		</PhaseFour>
	);
}

const MainTitle = styled.div`
	display: flex;
	flex-direction: column;

	> p {
		display: flex;
		color: white;
		font-size: 30rem;
		font-style: normal;
		font-weight: 600;
		line-height: 100%;
	}
`;
const IntroLayout = styled.div`
	display: flex;
	width: 576rem;
	display: flex;
	height: 100%;
	margin-top: 20rem;
`;

const FirstComponent = styled.div`
	display: flex;
	width: 192rem;
	flex-direction: column;
	align-items: center;
	animation: ${fadeIn} 1.5s ease-in-out forwards;
`;

const SecondComponent = styled.div`
	display: flex;
	width: 384rem;
	animation: ${fadeIn} 3s ease-in-out forwards;
`;

const PhaseFour = styled.div`
	gap: 8rem;

	position: relative;
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 5rem; */}

	> p {
		font-size: 18rem;
		font-color: white;
		color: white;
	}
`;

export default FourthComponent;
