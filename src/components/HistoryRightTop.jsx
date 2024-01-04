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

const HistoryRightTopComponent = ({ text, image }) => {
	return (
		<RightTopCard>
			<HistoryLineUp>
				<div />
				<div />
			</HistoryLineUp>

			{/* 왼쪽 칸에 선을 넣기 위한 빈 div */}

			<RightTopImageSection>
				<img src={image} alt='card' /> {/* 오른쪽 하단에 이미지 */}
			</RightTopImageSection>
			<RightTopTextSection>
				<p>{text}</p> {/* 오른쪽 상단에 텍스트 */}
			</RightTopTextSection>
		</RightTopCard>
	);
};

const RightTopCard = styled.div`
	width: 43.2rem;
	height: 35.9rem;
	display: grid;
	grid-template-columns: 1fr 2fr; /* 한 칸, 두 칸으로 컬럼 정의 */
	gap: 2rem 1.2rem;
`;

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

const RightTopTextSection = styled.div`
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

const RightTopImageSection = styled.div`
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

export default HistoryRightTopComponent;
