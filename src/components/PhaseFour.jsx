import React, { useRef, useState, useEffect } from 'react';
import { ShootingStars } from 'shooting-stars';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
						<p>Celebrating 24 years</p>
					</MainTitle>
				</FirstComponent>
				<SecondComponent>
					<SubTitle>
						<p>with gratitude for your ongoing support!</p>
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
	opacity: 0;
	animation: ${fadeIn} 1.5s ease-in-out forwards;
	animation-delay: 1.5s;

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
	width: 100%;
	flex-direction: column;
	align-items: center;
	animation: ${fadeInFromBottom} 1.8s ease-in-out forwards;
`;

const SecondComponent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	z-index: 3;
`;

const PhaseFour = styled.div`
	gap: 8rem;
	position: relative;
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;

	> p {
		font-size: 18rem;
		font-color: white;
		color: white;
	}
`;

export default FourthComponent;
