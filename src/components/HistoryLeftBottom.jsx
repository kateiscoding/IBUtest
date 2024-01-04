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
const HistoryLeftBottomComponent = ({ text, image }) => {
	return (
		<LeftBottomCard>
			<LeftBottomTextSection>
				<p>{text}</p>{' '}
			</LeftBottomTextSection>
			<HistoryLineUp>
				<div />
				<div />
			</HistoryLineUp>
			<LeftBottomImageSection>
				<img src={image} alt='history' /> {/* 왼쪽 상단단에 이미지 */}
			</LeftBottomImageSection>
		</LeftBottomCard>
	);
};

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

const LeftBottomCard = styled.div`
	width: 43.2rem;
	height: 35.9rem;
	display: grid;
	grid-template-columns: 1fr 2fr; /* 한 칸, 두 칸으로 컬럼 정의 */
	gap: 2rem 1.2rem;
`;

const LeftBottomTextSection = styled.div`
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

const LeftBottomImageSection = styled.div`
	display: flex;
	${'' /* justify-content: flex-end; */}
	border-radius: 0.5rem;
	width: 100%;
	${'' /* height: 18.8rem; */}
	padding-bottom: 8.4rem;
	flex-direction: column;

	> div {
		width: 100%;
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
		gap: 8.4rem;
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

export default HistoryLeftBottomComponent;
