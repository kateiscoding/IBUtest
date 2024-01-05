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
function HistoryComponent() {
	return (
		<IconContainer>
			<HistoryCard>
				<HistoryLineDown>
					<div />
					<div />
				</HistoryLineDown>

				<TextSection>
					<p>Inbody, born in South Korea, provides precise body measurements without complexity.</p>{' '}
				</TextSection>
				<ImageSection>
					<img src={cardImage} alt='card' />
				</ImageSection>
			</HistoryCard>

			<HistoryCard2>
				<ImageSection2>
					<img src={cardImage} alt='card' />
				</ImageSection2>

				<HistoryLineUp>
					<div />
					<div />
				</HistoryLineUp>
				<TextSection2>
					<p>First oversea subsidiary in USA InBody receives FDA Approval</p>{' '}
				</TextSection2>
			</HistoryCard2>

			{/* Left Bottom  */}
			<HistoryCard3>
				<TextSection>
					<p>First oversea subsidiary in USA InBody receives FDA Approval</p>{' '}
				</TextSection>

				<HistoryLineUp>
					<div />
					<div />
				</HistoryLineUp>

				<ImageSection2>
					<img src={cardImage} alt='card' />
				</ImageSection2>
			</HistoryCard3>

			{/* RIght Top  */}
			<HistoryCard4>
				<HistoryLineDown>
					<div />
					<div />
				</HistoryLineDown>
				<ImageSection>
					<img src={cardImage} alt='card' />
				</ImageSection>

				<TextSection>
					<p>Inbody, born in South Korea, provides precise body measurements without complexity.</p>{' '}
					{/* 오른쪽 상단에 텍스트 */}
				</TextSection>
			</HistoryCard4>
		</IconContainer>
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

const HistoryCard = styled.div`
	width: 43.2rem;
	height: 35.9rem;
	display: grid;
	grid-template-columns: 1fr 2fr; /* 한 칸, 두 칸으로 컬럼 정의 */
	gap: 2rem 1.2rem;
`;

const HistoryCard4 = styled.div`
	width: 43.2rem;
	height: 35.9rem;
	display: grid;
	grid-template-columns: 1fr 2fr; /* 한 칸, 두 칸으로 컬럼 정의 */
	gap: 2rem 1.2rem;
`;
const HistoryCard2 = styled.div`
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
		width: 100%;
		height: 100%;
		background-color: black;
		border-radius: 9999%;
		border: 0.42rem white solid;
	}

	> div:last-child {
		width: 0rem;
		height: 33.5rem;
		flex-shrink: 0;
		stroke-width: 3rem;
		stroke: #fff;
		border: 0.3rem white solid;
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

const TextSection2 = styled.div`
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

const ImageSection2 = styled.div`
	display: flex;
	${'' /* justify-content: flex-end; */}
	border-radius: 0.5rem;
	width: 100%;
	${'' /* height: 18.8rem; */}
	padding-top: 6.4rem;
	flex-direction: column;

	> div {
		width: 100%;
	}
`;

const IndustryCard = styled.div`
	width: 100%;

	> img {
		max-width: 100%;
		height: auto;
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

export default HistoryComponent;
