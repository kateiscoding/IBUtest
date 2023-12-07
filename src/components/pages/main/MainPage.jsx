import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Image } from '@react-three/drei';
import EarthImage from '../../../assets/earth-image-2.png';
import InbodyMan from '../../../assets/inbodyman.png';
import FlagContainer from '../../Flags';
import MyThreeJSComponent from '../../MyThreeJSComponent';
import LiveDot from '../../../assets/icon-rec.png';

function MainPage() {
	return (
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
					<p>110,000,378</p>
				</div>
			</Counter>
			<FlagContainer />
			<EarthContainer>
				<EarthImageComponent src={EarthImage} alt='earth-image' />
			</EarthContainer>
			{/* <MyThreeJSComponent /> */}
		</Main>
	);
}

const Main = styled.main`
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	gap: 8rem;
`;

const Counter = styled.div`
	height: 60rem;
	width: 100%;
	display: flex;
	margin-top: 22rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> div {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;

		> p {
			color: #fff;

			text-align: center;
			font-size: 22.4rem;
			font-style: normal;
			font-weight: 600;
			line-height: 1;
		}

		> div {
			display: flex;
			gap: 12.1rem;

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
			}

			> div {
				background: #971b2f;
				width: 20rem;
				height: 6rem;
				font-size: 2.75rem;
				display: flex;
				padding: 0.5rem 1rem;

				display: inline-flex;
				border-radius: 0.5rem;
				justify-content: center;
				align-items: center;
				border-radius: 0.5rem;
				gap: 0.5rem;

				> span {
					// LIVE
					color: 'black';
					fontsize: 44;
					fontweight: '600';
					lineheight: 44;
					letterspacing: 10.56;
					wordwrap: 'break-word';
				}
			}
		}
	}
`;

const EarthContainer = styled.div`
	width: 150%;
	${'' /* display: flex; */}
	overflow: hidden;
	${
		'' /* display: flex;
	overflow: hidden;
	flex-direction: column;
	align-items: center; */
	}

	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

const EarthImageComponent = styled.img`
	${'' /* object-fit: cover; */}
	${'' /* clip-path: inset(0 0 50% 0); */}
	${
		'' /* transform: rotate(45deg);
	flex-shrink: 0;
	width: 100%;

	position: relative; */
	}
	width: 110%;
	${'' /* height: 100%; */}
	${'' /* max-width: 100vw; */}
	display: flex;
	overflow: hidden;

	${'' /* background-image: url(${EarthImage}); */}
	background-size: cover;
	${'' /* position: relative; */}
	${'' /* top: -60rem; */}

	> img {
	}
`;
export default MainPage;
