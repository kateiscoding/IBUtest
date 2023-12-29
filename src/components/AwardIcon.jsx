import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import kosdoq from '../assets/svgs/ic_kosdaq.svg';

function AwardComponent() {
	return (
		<AwardIcon>
			<div>
				<p>
					Listed on
					<br />
					KOSDAQ
				</p>
				<div>
					<img src={kosdoq} alt='kosdaqicon' />
				</div>
			</div>
		</AwardIcon>
	);
}

const AwardIcon = styled.div`
	${'' /* width: 16.1rem; */}
	width: 100%;
	height: 9rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;

	padding: 1.6rem 2rem 0rem 0rem;

	> div {
		border-radius: 1rem;
		background-color: rgba(255, 255, 255, 0.3);
		font-size: 1.935rem;
		line-height: 2.1rem;
		height: 7.4rem;
		${'' /* width: 14.1rem; */}
		flex-shrink: 0;
		padding: 1.6rem 4rem 1.6rem 1.6rem;
		color: white;
		display: flex;
		align-items: center;
		flex-direction: row;

		> p {
			display: flex;
			font-size: 1.9rem;
			font-style: normal;
			font-weight: 600;
			line-height: 110%; /* 1.33063rem */
			letter-spacing: -0.03025rem;
		}

		> div {
			position: absolute;
			width: 5.6rem;
			height: 5.6rem;
			justify-content: center;
			align-items: center;
			gap: 0.625rem;
			flex-shrink: 0;
			border-radius: 2.8rem;
			border: 0.4rem solid #fff;
			${'' /* position: absolute; */}
			top: 0;
			right: 0;
			background: var(--BrandCI, #971b2f);
		}
	}
`;

export default AwardComponent;
