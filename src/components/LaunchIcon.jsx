import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import kosdoq from '../assets/svgs/ic_kosdaq.svg';

function LaunchComponent() {
	return (
		<LaunchIcon>
			<div>
				<p>LAUNCHED</p>

				<div>
					<div>2013</div>
					<div>570</div>
				</div>
			</div>
		</LaunchIcon>
	);
}

const LaunchIcon = styled.div`
	border-radius: 0.31rem;
	background-color: #e8e8e8;
	width: 12.4rem;
	height: 6.8rem;
	flex-shrink: 0;
	padding: 1.2rem;

	> div {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		>p: first-child {
			color: var(--BrandCI, #971b2f);
			font-size: 1.8rem;
			font-style: normal;
			font-weight: 600;
			line-height: 110%; /* 1.275rem */
			letter-spacing: -0.029rem;
		}
		> div {
			display: flex;
			${'' /* gap: 0.8rem; */}
			font-size: 1.8rem;
			font-style: normal;
			font-weight: 600;
			line-height: 110%; /* 1.275rem */
			letter-spacing: -0.029rem;
			flex-direction: row;
			gap: 0.5rem;
			justify-content: space-around;
			${'' /* justify-content: space-between; */}

			${
				'' /* color: var(--BrandCI, #971b2f);
			color: white; */
			}

			>div: first-child {
				color: var(--BrandCI, #971b2f);
				display: flex;
				font-size: 1.85rem;
				font-weight: 600;
				flex-direction: row;
				align-items: center;
			}
			>div: last-child {
				display: flex;
				border-radius: 0.5rem;
				padding: 0.2rem 0.8rem;
				width: 4.9rem;
				height: 2.3rem;
				font-size: 1.85rem;
				font-weight: 600;
				line-height: 110;
				flex-shrink: 0;
				background: #971b2f;
				color: white;
				align-items: center;

				> div {
					color: white;
					font-size: 1.85rem;
					font-weight: 600;
					line-height: 18.55;
					margin: 0;
				}
			}
		}
	}
`;

export default LaunchComponent;
