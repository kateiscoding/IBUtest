import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import CountUp from 'react-countup';
// import StarfieldAnimation from 'react-starfield-animation';
// import EarthImage from '../../../assets/earth-image-2.png';

import FlagContainer from './Flags';
import LiveDot from '../assets/icon-rec.png';

function FirstComponent() {
	return (
		<Component1>
			<Counter>
				<div>
					<div>
						<div>
							<img src={LiveDot} alt='livedot' />
							<span>L I V E</span>
						</div>
						<b>TOTAL GLOBAL TESTS</b>
					</div>
					{/* <p>110,000,378</p> */}
				</div>
				<CountUp start={100000000} end={111385844} />
			</Counter>
			<FlagContainer />
		</Component1>
	);
}

const Component1 = styled.div`
	gap: 8rem;

	position: relative; /* 추가 */
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 5rem; */}
`;

const ImageContainer = styled.div`
	width: 100%;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 15;
	opacity: 0.95;
	width: 100%;
	overflow: hidden;
	max-width: 100%;
	width: 100%;
	max-height: 100%;

	display: flex;
	justify-content: center;
	align-items: flex-start;

	> img {
	}
`;

const FinalImage = styled.img`
	display: flex;
	z-index: 15;
	opacity: 0.8;
	display: flex;
	overflow: hidden;
	max-width: 100%;

	background-size: cover;

	${'' /* margin-top: -0.4%; */}
	transform-origin: top;

	${'' /* position: absolute; */}
	${'' /* margin-top: -0.4%; */}


	> img {
	}
`;

const Counter = styled.div`
	${
		'' /* height: 60rem;
	width: 100%;
	display: flex;
	margin-top: 22rem;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
	}

	height: 30rem;
	z-index: 2;
	width: 100%;
	display: flex;
	margin-top: 19rem;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	> div {
		display: flex;
		flex-direction: column;
		width: 129rem;
		gap: 0.9rem;

		${
			'' /* > p {
			color: #fff;

			text-align: center;
			font-size: 22.4rem;
			font-style: normal;
			font-weight: 600;
			line-height: 1;
		} */
		}

		${
			'' /* > span {
			color: #fff;

			text-align: center;
			font-size: 22.4rem;
			font-style: normal;
			font-weight: 600;
			line-height: 1;
		} */
		}

		> div {
			display: flex;
			gap: 11rem;

			> b {
				color: #fff;
				display: flex;
				text-align: center;
				font-size: 4.4rem;
				${'' /* font-style: normal; */}
				font-weight: 600;
				${'' /* line-height: normal; */}
				letter-spacing: 1rem;
				flex-direction: column;
				align-items: flex-start;
				lineheight: 44;
				${'' /* letterspacing: 10.86; */}
				wordwrap: 'break-word';
				justify-content: center;
			}

			> div {
				background: #971b2f;
				width: 20.1rem;
				height: 6rem;
				${'' /* font-size: 4.4rem; */}
				display: flex;
				padding: 0.8rem 1.6rem;
				font-weight: bold;
				line-height: 4rem;
				display: flex;
				border-radius: 0.8rem;
				justify-content: space-around;
				align-items: center;
				${'' /* letterspacing: 10.56; */}
				border-radius: 0.5rem;
				gap: 0.6rem;

				> span {
					display: flex;
					color: 'black';
					font-size: 4.1rem;
					font-weight: '700';
				}
			}
		}
	}
	${'' /* Count UP */}
	> span {
		color: #fff;
		display: flex;
		text-align: center;
		font-size: 22.4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1;
		width: 129rem;
	}
`;

const CountUpStyled = styled.div`
	color: #fff;

	text-align: center;
	font-size: 22.4rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1;
`;

const EarthContainer = styled.div`
	overflow: hidden;
	max-width: 100%;
	width: 100%;
	max-height: 100%;

	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export default FirstComponent;
