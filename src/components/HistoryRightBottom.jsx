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
const HistoryRightBottomComponent = ({ text, image }) => {
	return (
		<RightBottomCard>
			<HistoryLineDown>
				<div />
				<div />
			</HistoryLineDown>

			<TextSection>
				<p>{text}</p>
			</TextSection>
			<ImageSection>
				<img src={image} alt='card' />
			</ImageSection>
		</RightBottomCard>
	);
};

const RightBottomCard = styled.div`
	width: 43.2rem;
	height: 35.9rem;
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 2rem 1.2rem;
`;

const HistoryLineDown = styled.div`
	height: 35.9rem;
	grid-row: span 2;
	width: 2.4rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	> div:first-child {
		width: 0rem;
		height: 33.5rem;
		flex-shrink: 0;
		stroke-width: 3rem;
		stroke: #fff;
		border: 0.3rem white solid;
	}

	> div:last-child {
		width: 100%;
		height: 100%;
		background-color: black;
		border-radius: 9999%;
		border: 0.42rem white solid;
	}
`;

const TextSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 39.6rem;
	height: auto;
	> p {
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 400;
		line-height: 120%; /* 2.88rem */
		letter-spacing: -0.06rem;
		color: white;
	}
`;

const HistoryCard3 = styled.div`
	width: 43.2rem;
	height: 35.9rem;
	display: grid;
	grid-template-columns: 1fr 2fr; /* 한 칸, 두 칸으로 컬럼 정의 */
	gap: 2rem 1.2rem;
`;

const ImageSection = styled.div`
	display: flex;
	${'' /* justify-content: flex-end; */}
	border-radius: 0.5rem;
	width: 100%;
	${'' /* height: 18.8rem; */}
	padding-bottom: 9rem;
	flex-direction: column;

	> div {
		width: 100%;
	}
`;

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

export default HistoryRightBottomComponent;
