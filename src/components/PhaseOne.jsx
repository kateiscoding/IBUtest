import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import CountUp from 'react-countup';
import FlagContainer from './Flags';
import LiveDot from '../assets/icon-rec.png';

function FirstComponent() {
	return (
		<PhaseOne>
			<Counter>
				<div>
					<div>
						<div>
							<img src={LiveDot} alt='livedot' />
							<span>L I V E</span>
						</div>
						<b>TOTAL GLOBAL TESTS</b>
					</div>
				</div>
				{/* 메인 카운트 업 애니메이션  */}
				<CountUp start={100000000} end={134760350} duration={3} />
			</Counter>
			<FlagContainer />
		</PhaseOne>
	);
}

const PhaseOne = styled.div`
	gap: 8rem;
	position: relative;
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;

	> p {
		font-size: 18rem;
		color: white;
	}
`;

const Counter = styled.div`
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

		> div {
			display: flex;
			gap: 11rem;

			> b {
				color: #fff;
				display: flex;
				text-align: center;
				font-size: 4.4rem;
				font-weight: 600;
				letter-spacing: 1rem;
				flex-direction: column;
				align-items: flex-start;
				lineheight: 44;
				wordwrap: 'break-word';
				justify-content: center;
			}

			> div {
				background: #971b2f;
				width: 20.1rem;
				height: 6rem;
				display: flex;
				padding: 0.8rem 1.6rem;
				font-weight: bold;
				line-height: 4rem;
				display: flex;
				border-radius: 0.8rem;
				justify-content: space-around;
				align-items: center;
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

export default FirstComponent;
