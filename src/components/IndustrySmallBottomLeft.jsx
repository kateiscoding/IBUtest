import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';

function IndustrySmallBottomLeft({ title, caption, image }) {
	return (
		<IndustryCardSmallBottomLeft>
			<div>
				<div>
					<p>{title}</p>
					<p>{caption}</p>
				</div>
			</div>
			<div>
				{/* 사진 */}
				<img src={image} alt='industry-sample' />
			</div>
		</IndustryCardSmallBottomLeft>
	);
}

const IndustryCardSmallBottomLeft = styled.div`
	width: 48rem;
	height: 48rem;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	position: relative;

	> div:nth-child(1) {
		border-radius: 18.4rem;
		border: 2px solid var(--BandCI_dark, #6c1624);
		background: var(--bwb-07, rgba(63, 63, 63, 0.7));
		box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(40px);
		align-items: center;
		top: 0;
		position: absolute;
		display: flex;
		width: 31.2rem;
		height: 31.2rem;
		padding: 0.8rem 5.6rem;
		flex-direction: column;
		justify-content: center;
		z-index: 4;
		gap: 3.2rem;
		flex-shrink: 0;

		> div {
			display: flex;
			gap: 3.2rem;
			flex-direction: column;

			> p:nth-child(1) {
				color: white;
				text-align: center;
				font-size: 4rem;
				font-style: normal;
				font-weight: 600;
				line-height: 100%;
				align-self: stretch;
			}

			> p:nth-child(2) {
				color: var(--BW-White, #fff);
				text-align: center;
				font-size: 2.4rem;
				font-style: normal;
				font-weight: 400;
				line-height: 120%;
				letter-spacing: -0.06rem;
			}
		}
	}

	> div:nth-child(2) {
		width: 40rem;
		height: 40rem;
		left: 0rem;
		bottom: 0;
		flex-shrink: 0;
		display: flex;
		z-index: 3;
		position: absolute;
	}
`;

export default IndustrySmallBottomLeft;
