import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import { Image } from '@react-three/drei';
import CountUp from 'react-countup';
import StarfieldAnimation from 'react-starfield-animation';
// import EarthImage from '../../../assets/earth-image-2.png';
import EarthImage from '../../../assets/svgs/earth.svg';
import InbodyMan from '../../../assets/inbodyman.png';
import FlagContainer from '../../Flags';
import MyThreeJSComponent from '../../MyThreeJSComponent';

import LiveDot from '../../../assets/icon-rec.png';

function MainPage() {
	return (
		<Background>
			<Main>
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
					<CountUp start={105000500} end={105000800} />
				</Counter>

				<FlagContainer />
				<EarthContainer>
					<EarthImageComponent src={EarthImage} alt='earth-image' />
				</EarthContainer>
				<StarfieldAnimation
					style={{ position: 'absolute', width: '100%', height: '108rem', zIndex: 0 }}
					numParticles={100}
					particleSpeed={-1}
					dx={0.000000001} // x speed of stars in px/frame, default 0.05
					dy={0.000000001}
				/>
				{/* <MyThreeJSComponent /> */}
			</Main>
		</Background>
	);
}
const Background = styled.main`
	position: relative;
	width: 100%;
	overflow-x: hidden;
	overflow-y: hidden;
	height: 108rem;
	overflow: hidden;
`;

const Main = styled.main`
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 8rem; */}
	gap: 5rem;
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

	width: 100%;
	display: flex;
	margin-top: 22rem;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	> div {
		display: flex;
		flex-direction: column;
		width: 135rem;
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

const EarthImageComponent = styled.img`
	display: flex;
	overflow: hidden;
	max-width: 100%;

	background-size: cover;

	transform: scaleX(1.7) scaleY(1.9);
	${'' /* margin-top: -0.4%; */}
	transform-origin: top;

	> img {
	}
`;
export default MainPage;
