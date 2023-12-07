import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import InbodyMan from '../assets/pin-large-2.png';

const Flag = ({ country, population, image }) => {
	const flagData = [
		{
			id: '1',
			country: 'China',
			population: '1,949,288',
			image: InbodyMan,
			gps: { top: '10em', left: '-255rem' },
		},
		{ id: '2', country: 'Korea', population: '1,949,288', image: InbodyMan },
		{ id: '3', country: 'Australia', population: '1,949,288', image: InbodyMan },
		{ id: '4', country: 'Japan', population: '1,949,288', image: InbodyMan },
		{ id: '5', country: 'USA', population: '1,949,288', image: InbodyMan },
		{ id: '6', country: 'UK', population: '1,949,288', image: InbodyMan },
		{ id: '7', country: 'EU', population: '1,949,288', image: InbodyMan },
	];

	const getPosition = (index, total) => {
		const distanceBetween = 20; // Flagbox 간의 간격 설정
		const left = index * distanceBetween; // 각 Flagbox의 가로 위치 계산

		return {
			left: `${left}rem`, // Flagbox의 가로 위치
			top: '0', // Flagbox의 세로 위치, 필요한 경우 조정 가능
			zIndex: total - index, // zIndex 역순으로 배치
		};
	};

	return (
		<FlagContainer>
			{flagData.map((flag, index) => (
				<Flagbox key={flag.id} className={`flag-${index + 1}`}>
					<FlagContent key={flag.id} className={`flag-${index + 1}`}>
						<p>{flag.country}</p>
						<div>{flag.population}</div>
					</FlagContent>
					{/* 
					<RedLine>
						<div />
					</RedLine> */}
				</Flagbox>
			))}
		</FlagContainer>
	);
};

const FlagContainer = styled.div`
	${
		'' /* color: white;
	display: flex;
	gap: 10rem; */
	}
	${'' /* height: 30rem; */}
	${
		'' /* flex-direction: row;
	justify-content: center;
	align-items: flex-end;
	width: 100%;

	position: absolute;
	top: 45rem;
	z-index: 2; */
	}

	color: white;
	display: flex;
	${'' /* grid-template-columns: repeat(7, 1fr); */}
	justify-items: center;
	position: absolute;
	top: 60rem;
	gap: 5rem;
	z-index: 2;
	${'' /* transform: rotate(-45deg); */}
`;

const RedLine = styled.div`
	display: flex;

	flex-direction: column;
	align-items: center;

	> div {
		width: 1px;
		height: 15rem;
		border-left: 4px dashed #971b2f;

		flex-shrink: 0;
		display: flex;
	}
`;

const Flagbox = styled.div`
	display: flex;
	flex-direction: column;

	position: absolute;

	&.flag-1 {
		top: 10em;
		left: -255rem;
	}
	&.flag-2 {
		top: -10rem;
		left: -224rem;
	}
	&.flag-3 {
		top: -20rem;
		left: -180rem;
	}
	&.flag-4 {
		top: -30rem;
		left: -136rem;
	}
	&.flag-5 {
		top: -30rem;
		left: 110rem;
	}
	&.flag-6 {
		top: -5rem;
		left: 170rem;
	}
	&.flag-7 {
		top: 20rem;
		left: 215rem;
	}

	${'' /* gap: 5rem; */}
`;

const FlagContent = styled.div`
	color: white;
	display: flex;
	width: 37.4rem;
	height: 21.2rem;
	padding: 3.2rem 2rem 2rem 2rem;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	display: flex;
	border-radius: 0.75rem;
	border-radius: 1rem;
	border: 2px solid var(--brand-ci-05, rgba(151, 27, 47, 0.5));
	background: var(--bwb-07, rgba(63, 63, 63, 0.7));

	/* Shadow/Black_blur */
	box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(20px);

	&.flag-5 {
		display: flex;
		width: 47.6rem;
		height: 28.4rem;
		padding: 4rem 2.4rem 2.4rem 2.4rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4rem;
		border-radius: 1rem;
		border: 2px solid var(--brand-ci-05, rgba(151, 27, 47, 0.5));
		background: var(--bwb-07, rgba(63, 63, 63, 0.7));
		/* Shadow/Red_blur */
		box-shadow: 0px 4px 50px 0px rgba(151, 27, 47, 0.5);
		backdrop-filter: blur(20px);

		> p {
			color: var(--bw-white, #fff);
			text-align: center;
			/* H2_80px */
			font-family: Lexend;
			font-size: 8rem;
			font-style: normal;
			font-weight: 700;
			line-height: 100%; /* 5rem */
		}

		> div {
			width: 42.8rem;
			height: 10rem;
			color: var(--bw-white, #fff);
			text-align: center;
			/* Body1_60px */
			font-family: Lexend;
			font-size: 6rem;
			font-style: normal;
			font-weight: 400;
			border-radius: 0.8rem;
			line-height: 100%; /* 3.75rem */
		}
	}

	> p {
		color: #fff;
		text-align: center;
		font-size: 5.6rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

	> div {
		width: 33.4rem;
		height: 8rem;
		display: flex;
		padding: 0.5rem 0.25rem;
		justify-content: center;
		align-items: center;
		gap: 2.4rem;
		align-self: stretch;
		border-radius: 0.25rem;
		background: rgba(255, 255, 255, 0.1);
		font-size: 4rem;
		font-weight: 400;
		line-height: 100%;
	}
`;

const Gps = styled.div`
	display: flex;
	justify-content: center;
`;

export default Flag;
