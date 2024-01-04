import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import kosdoq from '../assets/svgs/ic_kosdaq.svg';

const AwardComponent = ({ text, image }) => {
	return (
		<AwardIcon>
			<div>
				<p>{text}</p>
				<div>
					<img src={image} alt='icon' />
				</div>
			</div>
		</AwardIcon>
	);
};

const AwardIcon = styled.div`
	${'' /* width: 16.1rem; */}
	width: 100%;
	height: 9.6rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;

	padding: 2rem 2.6rem 0rem 0rem;

	> div {
		border-radius: 1rem;
		background-color: rgba(255, 255, 255, 0.3);

		height: 7.6rem;
		${'' /* width: 14.1rem; */}
		flex-shrink: 0;
		padding: 1.6rem 4rem 1.6rem 1.6rem;
		color: white;
		display: flex;
		flex: 1 0 0;
		align-items: center;
		align-self: stretch;
		flex-direction: row;
		white-space: pre-line;
		> p {
			display: flex;
			font-size: 2rem;
			font-style: normal;
			font-weight: 600;
			line-height: 110%; /* 2.2rem */
			letter-spacing: -0.05rem;
			white-space: pre-line;
		}

		> div {
			position: absolute;
			width: 5.6rem;
			height: 5.6rem;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
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
