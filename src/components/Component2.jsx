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
				<FirstContainer>
					<TextContainer>
						<div>
							<p>We are worldwide leader in body composition technology.</p>

							<p>
								CEO Dr.Kichul Cha, Recognized an opportunity improve on current BIA methods and set
								out to innovate new BIA solutions that could provide accurate and precise body
								composition measurements.
							</p>
						</div>
					</TextContainer>
				</FirstContainer>
				<SecondContainer>
					<p>second</p>
				</SecondContainer>
				<ThirdContainer>
					<p>third</p>
				</ThirdContainer>
			</HistoryLayout>
		</Component2>
	);
}

const HistoryLayout = styled.div`
	${
		'' /* width: 576rem;
	display: flex;
	height: 100%; */
	}

	width: 576rem;
	display: flex;
	height: 100%;
	flex-direction: row;
	justify-content: center;
`;
const FirstContainer = styled.div`
	width: 192rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 17rem;
	align-items: flex-start;
`;

const SecondContainer = styled.div`
	width: 192rem;
	display: flex;
`;

const ThirdContainer = styled.div`
	width: 192rem;
	display: flex;
`;
const TextContainer = styled.div`
	color: white;
	display: flex;
	${'' /* margin: 33rem 17rem; */}
	width: 134rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 5rem;
	animation: ${fadeIn} 1.5s ease-in-out forwards;

	> div {
		${'' /* margin-top: 16rem; */}
		display: flex;
		flex-direction: column;
		gap: 5rem;
		> p:first-child {
			font-size: 8rem;
			color: white;
			display: flex;
			font-weight: 700;
			line-height: 130%;
		}

		> p:last-child {
			font-size: 4rem;
			color: white;
			display: flex;
			font-weight: 400;
			line-height: 130%;
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
