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
 /* 이미지의 최대 너비 */
	max-width: 100%; /* 부모 요소의 너비에 맞게 조정 */
	display: block; /* 이미지 간격과 레이아웃을 조정하기 위해 사용 */
	overflow: hidden;

	${'' /* background-image: url(${EarthImage}); */}
	background-size: cover;
	${'' /* position: relative; */}
	${'' /* top: -60rem; */}
	width: 900rem; /* 이미지의 최대 너비 */
	max-width: 100%; /* 화면에 맞게 조정 */
	display: block;
	overflow: hidden;
	/* 중앙 정렬을 위한 마진 수정 */
	${'' /* transform: scale(0.64);  */}
	transform-origin: top; /* 확대/축소 기준 설정 */

	> img {
	}
`;
export default MainPage;
