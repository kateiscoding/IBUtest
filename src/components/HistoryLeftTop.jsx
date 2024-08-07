import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';

const HistoryLeftTopComponent = ({ text, image }) => {
	return (
		<LeftTopCard>
			<LeftTopImageSection>
				<img src={image} alt='history' />
			</LeftTopImageSection>

			<HistoryLineUp>
				<div />
				<div />
			</HistoryLineUp>
			<LeftTopTextSection>
				<p>{text}</p>{' '}
			</LeftTopTextSection>
		</LeftTopCard>
	);
};

const HistoryLineUp = styled.div`
	height: 41rem;
	grid-row: span 2;
	width: 2.4rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	> div:first-child {
		width: 100%;
		height: 100%;
		background-color: black;
		border-radius: 9999%;
		border: 0.42rem white solid;
	}

	> div:last-child {
		width: 0rem;
		height: 38.6rem;
		flex-shrink: 0;
		stroke-width: 3rem;
		stroke: #fff;
		border: 0.3rem white solid;
	}
`;

const LeftTopCard = styled.div`
	width: 43.2rem;
	height: 35.9rem;
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 2rem 1.2rem;
`;

const LeftTopTextSection = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	width: 100%;
	${'' /* padding: 0 1rem; */}
	text-align: right;
	flex-direction: column;

	> p {
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 400;
		line-height: 120%;
		letter-spacing: -0.06rem;
		color: white;
		margin: 0;
		white-space: pre-line;
	}
`;

const LeftTopImageSection = styled.div`
	display: flex;
	${'' /* justify-content: flex-end; */}
	border-radius: 0.5rem;
	width: 100%;
	${'' /* height: 18.8rem; */}
	padding-top: 14.4rem;
	flex-direction: column;

	> div {
		width: 100%;
	}
`;

export default HistoryLeftTopComponent;
