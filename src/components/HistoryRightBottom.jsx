import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import kosdoq from '../assets/svgs/ic_kosdaq.svg';
import cardImage from '../assets/img-history.png';

const fadeIn = keyframes`
   0% {
    
	opacity: 0;
  }
  100% {
    
	opacity: 1;
  }
`;
function HistoryRightBottomComponent() {
	return (
		<RightBottomCard>
			<HistoryLineDown>
				<div />
				<div />
			</HistoryLineDown>

			{/* 왼쪽 칸에 선을 넣기 위한 빈 div */}

			<TextSection>
				<p>Inbody, born in South Korea, provides precise body measurements without complexity.</p>{' '}
				{/* 오른쪽 상단에 텍스트 */}
			</TextSection>
			<ImageSection>
				<img src={cardImage} alt='card' /> {/* 오른쪽 하단에 이미지 */}
			</ImageSection>
		</RightBottomCard>
	);
}

const HistoryLineUp = styled.div`
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

const RightBottomCard = styled.div`
	width: 43.2rem;
	height: 35.9rem;
	display: grid;
	grid-template-columns: 1fr 2fr; /* 한 칸, 두 칸으로 컬럼 정의 */
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
	padding-bottom: 6.4rem;
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

const IconContainer = styled.div`
	${'' /* width: 192rem */}
	display: flex;
	gap: 10rem;
`;

const TextContent = styled.div`
	color: white;
	display: flex;
	${'' /* margin: 33rem 17rem; */}
	width: 74rem;
	margin-left: 25rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 5rem;

	> div {
		${'' /* margin-top: 16rem; */}
		display: flex;
		flex-direction: column;
		gap: 6.4rem;
		${'' /* width: 74rem; */}

		> p:first-child {
			font-size: 16rem;
			color: white;
			display: flex;
			font-weight: 700;
			line-height: 90%;
		}

		> p:last-child {
			font-size: 3.3rem;
			color: white;
			letter-spacing: -0.05156rem;
			display: flex;
			font-weight: 400;
			line-height: 130%;
			width: 74rem;

			animation: ${fadeIn} 1.5s ease-in-out forwards;
		}
	}
`;

export default HistoryRightBottomComponent;
