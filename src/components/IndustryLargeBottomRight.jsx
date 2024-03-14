import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';

function IndustryLargeBottomRight({ title, caption, image }) {
	return (
		<IndustryCardLargeBottomRight>
			<div>
				<div>
					<div>
						<p>{title}</p>
						<p>{caption}</p>
					</div>
				</div>
			</div>
			<div>
				{/* 사진 */}
				<img src={image} alt='industry-sample' />
			</div>
		</IndustryCardLargeBottomRight>
	);
}

const IndustryCardLargeBottomRight = styled.div`
	width: 63.8rem;
	height: 63.8rem;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	position: relative;

	> div:nth-child(1) {
		width: 54rem;
		height: 54rem;
		flex-shrink: 0;
		top: 0;
		left: 0;
		border-radius: 54rem;
		display: flex;
		border: 4px dashed var(--BandCI_dark, #6c1624);
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;

		> div {
			border-radius: 18.4rem;
			border: 2px solid var(--BandCI_dark, #6c1624);
			background: var(--bwb-07, rgba(63, 63, 63, 0.7));
			box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(40px);
			display: flex;
			width: 36.8rem;
			height: 36.8rem;
			padding: 0.8rem 5.6rem;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			gap: 3.2rem;
			flex-shrink: 0;
			align-items: center;
			z-index: 4;

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
	}

	> div:nth-child(2) {
		width: 47.2rem;
		height: 47.2rem;
		right: 0;
		bottom: 0;
		flex-shrink: 0;
		display: flex;
		z-index: 3;
		position: absolute;
	}
`;

export default IndustryLargeBottomRight;
