import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import EarthImage from '../../../assets/earth-image-2.png';
import InbodyMan from '../../../assets/inbodyman.png';
import FlagContainer from '../../Flags';

function MainPage() {
	return (
		<Main>
			<Counter>
				<div>
					<b>TOTAL</b>

					<p>110,000,378</p>
					<div>
						<span>LIVE</span>
					</div>
				</div>
			</Counter>
			<FlagContainer />
			{/* <FlagContainer>
				<Flagbox>
					<FlagContent>
						<p>China</p>
						<div>1,949,288</div>
					</FlagContent>
					<RedLine>
						<div />
					</RedLine>
					<Gps>
						<img src={InbodyMan} alt='InbodyMan' />
					</Gps>
				</Flagbox>
				<Flagbox>
					<FlagContent>
						<p>Korea</p>
						<div>1,949,288</div>
					</FlagContent>
					<RedLine>
						<div />
					</RedLine>
					<Gps>
						<img src={InbodyMan} alt='InbodyMan' />
					</Gps>
				</Flagbox>
				<Flagbox>
					<FlagContent>
						<p>Australia</p>
						<div>1,949,288</div>
					</FlagContent>
					<RedLine>
						<div />
					</RedLine>
					<Gps>
						<img src={InbodyMan} alt='InbodyMan' />
					</Gps>
				</Flagbox>
				<Flagbox>
					<FlagContent>
						<p>Japan</p>
						<div>1,949,288</div>
					</FlagContent>
					<RedLine>
						<div />
					</RedLine>
					<Gps>
						<img src={InbodyMan} alt='InbodyMan' />
					</Gps>
				</Flagbox>
			</FlagContainer> */}
			<EarthContainer>
				<EarthImageComponent src={EarthImage} alt='earth-image' />
			</EarthContainer>
		</Main>
	);
}

const Main = styled.main`
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	gap: 10rem;
`;

const Counter = styled.div`
	height: 60rem;
	width: 100%;
	display: flex;
	margin-top: 14rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> div {
		> b {
			color: #fff;
			display: flex;
			text-align: center;
			font-size: 2.75rem;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			letter-spacing: 0.66rem;
			flex-direction: column;
			align-items: flex-start;
		}
		> div {
			background: #971b2f;
			width: 9.5rem;
			height: 3.1rem;
			font-size: 2.75rem;
			display: flex;
			display: inline-flex;
			padding: 0rem 1rem;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;

			> span {
				color: #000;

				text-align: center;

				font-size: 2.5rem;
				font-style: normal;
				font-weight: 700;
				line-height: normal;
			}
		}
		> p {
			color: #fff;

			text-align: center;
			font-size: 16rem;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
		}
	}
`;

// const FlagContainer = styled.div`
// 	color: white;
// 	display: flex;
// 	gap: 60rem;
// 	${'' /* height: 30rem; */}
// 	flex-direction: row;
// 	justify-content: center;
// 	align-items: flex-end;
// 	width: 100%;

// 	position: absolute;
// 	top: 45rem;
// 	z-index: 2;
// `;

// const RedLine = styled.div`
// 	display: flex;

// 	flex-direction: column;
// 	align-items: center;

// 	> div {
// 		width: 1px;
// 		height: 15rem;
// 		border-left: 4px dashed #971b2f;

// 		flex-shrink: 0;
// 		display: flex;
// 	}
// `;

// const Flagbox = styled.div`
// 	display: flex;
// 	flex-direction: column;
// `;

// const FlagContent = styled.div`
// 	color: white;
// 	display: flex;
// 	width: 24rem;
// 	height: auto;
// 	padding: 2rem 3.5rem;
// 	flex-direction: column;
// 	align-items: center;
// 	${'' /* gap: 2.5rem; */}
// 	display: flex;
// 	border-radius: 0.75rem;
// 	background: rgba(255, 255, 255, 0.15);

// 	box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.3);
// 	backdrop-filter: blur(12px);
// 	gap: 2.5rem;
// 	> p {
// 		color: #fff;
// 		text-align: center;
// 		font-size: 4rem;
// 		font-style: normal;
// 		font-weight: 700;
// 		line-height: normal;
// 	}

// 	> div {
// 		display: flex;
// 		padding: 0.5rem 0.25rem;
// 		justify-content: center;
// 		align-items: center;
// 		gap: 0.5rem;
// 		align-self: stretch;
// 		border-radius: 0.25rem;
// 		background: rgba(255, 255, 255, 0.1);
// 	}
// `;

// const Gps = styled.div`
// 	display: flex;
// 	justify-content: center;
// `;

const EarthContainer = styled.div`
	width: 100%;
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
	width: 120%;
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
