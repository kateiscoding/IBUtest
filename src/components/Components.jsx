import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import kosdoq from '../assets/svgs/ic_kosdaq.svg';
import cardImage from '../assets/img-history.png';
import industryImage from '../assets/img-industry.png';

// 삭제 예정 컴포넌트 분리 완료

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
			<IndustryCardLargeTopLeft>
				<div>
					<div>
						<div>
							<p>Title</p>
							<p>Caption</p>
						</div>
					</div>
				</div>
				<div>
					{/* 사진 */}
					<img src={industryImage} alt='industry-sample' />
				</div>
			</IndustryCardLargeTopLeft>

			<IndustryCardLargeBottomRight>
				<div>
					<div>
						<div>
							<p>Title</p>
							<p>Caption</p>
						</div>
					</div>
				</div>
				<div>
					{/* 사진 */}
					<img src={industryImage} alt='industry-sample' />
				</div>
			</IndustryCardLargeBottomRight>

			<IndustryCardSmallBottomRight>
				<div>
					<div>
						<p>Title</p>
						<p>Caption</p>
					</div>
				</div>
				<div>
					{/* 사진 */}
					<img src={industryImage} alt='industry-sample' />
				</div>
			</IndustryCardSmallBottomRight>

			<IndustryCardSmallTopRight>
				<div>
					<div>
						<p>Title</p>
						<p>Caption</p>
					</div>
				</div>
				<div>
					{/* 사진 */}
					<img src={industryImage} alt='industry-sample' />
				</div>
			</IndustryCardSmallTopRight>
		</IconContainer>
	);
}

const IndustryCardLargeTopLeft = styled.div`
	width: 63.8rem;
	height: 63.8rem;

	${'' /* 일단 해봄 */}
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	position: relative;

	> div:nth-child(1) {
		width: 54rem;
		height: 54rem;
		flex-shrink: 0;
		bottom: 0;
		right: 0;
		border-radius: 54rem;
		display: flex;
		border: 4px dashed var(--BandCI_dark, #6c1624);
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		z-index: 4;

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
					line-height: 100%; /* 4rem */
					align-self: stretch;
				}

				> p:nth-child(2) {
					color: var(--BW-White, #fff);
					text-align: center;

					font-size: 2.4rem;
					font-style: normal;
					font-weight: 400;
					line-height: 120%; /* 2.88rem */
					letter-spacing: -0.06rem;
				}
			}
		}
	}

	> div:nth-child(2) {
		width: 47.2rem;
		height: 47.2rem;
		left: 0;
		top: 0;
		flex-shrink: 0;
		display: flex;
		z-index: 2;
		position: absolute;
	}
`;

const IndustryCardLargeBottomRight = styled.div`
	width: 63.8rem;
	height: 63.8rem;

	${'' /* 일단 해봄 */}
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
		z-index: 4;

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
					line-height: 100%; /* 4rem */
					align-self: stretch;
				}

				> p:nth-child(2) {
					color: var(--BW-White, #fff);
					text-align: center;

					font-size: 2.4rem;
					font-style: normal;
					font-weight: 400;
					line-height: 120%; /* 2.88rem */
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
		z-index: 2;
		position: absolute;
	}
`;

const IndustryCardSmallBottomRight = styled.div`
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
				line-height: 100%; /* 4rem */
				align-self: stretch;
			}

			> p:nth-child(2) {
				color: var(--BW-White, #fff);
				text-align: center;

				font-size: 2.4rem;
				font-style: normal;
				font-weight: 400;
				line-height: 120%; /* 2.88rem */
				letter-spacing: -0.06rem;
			}
		}
	}

	> div:nth-child(2) {
		width: 40rem;
		height: 40rem;
		left: 0;
		bottom: 0;
		flex-shrink: 0;
		display: flex;
		z-index: 2;
		position: absolute;
	}
`;

const IndustryCardSmallTopRight = styled.div`
	width: 48rem;
	height: 48rem;

	${'' /* 일단 해봄 */}
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
		bottom: 0;
		left: 0;
		position: absolute;

		display: flex;
		width: 31.2rem;
		height: 31.2rem;
		padding: 0.8rem 5.6rem;
		flex-direction: column;
		justify-content: center;
		z-index: 3;
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
				line-height: 100%; /* 4rem */
				align-self: stretch;
			}

			> p:nth-child(2) {
				color: var(--BW-White, #fff);
				text-align: center;

				font-size: 2.4rem;
				font-style: normal;
				font-weight: 400;
				line-height: 120%; /* 2.88rem */
				letter-spacing: -0.06rem;
			}
		}
	}

	> div:nth-child(2) {
		width: 40rem;
		height: 40rem;
		right: 0;
		top: 0;
		flex-shrink: 0;
		display: flex;
		z-index: 2;
		position: absolute;
	}
`;
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
