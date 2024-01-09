import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
   0% {
    
	opacity: 0;
	
  }
`;

const fadeInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(15rem);
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

function FourthComponent() {
	return (
		<PhaseFour>
			<IntroLayout>
				<FirstComponent>
					<MainTitle>
						<p>Explo re Into your Body. </p>
					</MainTitle>
				</FirstComponent>
				<SecondComponent>
					<SubTitle>
						<p>Embracing Change, Empowering Health</p>
					</SubTitle>
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

const SubTitle = styled.div`
	display: flex;
	flex-direction: column;

	> p {
		display: flex;
		color: white;
		font-size: 7rem;
		font-style: normal;
		font-weight: 400;
		line-height: 100%;
	}
`;
const IntroLayout = styled.div`
	display: flex;
	width: 576rem;
	display: flex;
	height: 100%;
	gap: 8.8rem;

	margin-top: 20rem;
	flex-direction: column;
	align-items: center;
`;

const FirstComponent = styled.div`
	display: flex;
	${'' /* width: 192rem; */}
	width: 100%;
	flex-direction: column;
	align-items: center;
	animation: ${fadeInFromBottom} 1.5s ease-in-out forwards;
`;

const SecondComponent = styled.div`
	display: flex;
	${'' /* width: 384rem; */}
	width: 100%;

	flex-direction: column;
	align-items: center;
	z-index: 3;
	animation: ${fadeIn} 2s ease-in-out forwards;
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
