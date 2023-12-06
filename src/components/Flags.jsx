import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import InbodyMan from '../assets/pin-large.png';

const Flag = ({ country, population, image }) => {
	const flagData = [
		{ id: '1', country: 'China', population: '1,949,288', image: InbodyMan },
		{ id: '2', country: 'Korea', population: '1,949,288', image: InbodyMan },
		{ id: '3', country: 'Australia', population: '1,949,288', image: InbodyMan },
		{ id: '4', country: 'Japan', population: '1,949,288', image: InbodyMan },
		{ id: '5', country: 'USA', population: '1,949,288', image: InbodyMan },
		{ id: '6', country: 'UK', population: '1,949,288', image: InbodyMan },
		{ id: '7', country: 'EU', population: '1,949,288', image: InbodyMan },
	];

	const getPosition = (index, total) => {
		const angle = 270 - (((360 / total) * index - 90) % 360); // 각 요소의 각도를 계산
		const x = Math.sin((angle * Math.PI) / 180) * 15; // x 좌표
		const y = Math.cos((angle * Math.PI) / 180) * 15; // y 좌표
		const z = index * 1; // z-index 값

		return {
			gridColumn: 'auto / span 1',
			gridRow: 'auto / span 1',
			transform: `translate(${x}rem, ${y}rem)`,
			zIndex: z,
		};
	};

	return (
		<FlagContainer>
			{flagData.map((flag, index) => (
				<Flagbox key={flag.id} style={getPosition(index, flagData.length)}>
					<FlagContent key={flag.id}>
						<p>{flag.country}</p>
						<div>{flag.population}</div>
					</FlagContent>
					{/* 
					<RedLine>
						<div />
					</RedLine> */}
					<Gps>
						<img src={InbodyMan} alt='inbodyMan' />
					</Gps>
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
	display: grid;
	grid-template-columns: repeat(7, 1fr);
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
	${'' /* gap: 5rem; */}
`;

const FlagContent = styled.div`
	color: white;
	display: flex;
	width: 23.375rem;
	height: auto;
	padding: 2rem 1.25rem 1.25rem 1.25rem;
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

	> p {
		color: #fff;
		text-align: center;
		font-size: 4rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

	> div {
		display: flex;
		padding: 0.5rem 0.25rem;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		align-self: stretch;
		border-radius: 0.25rem;
		background: rgba(255, 255, 255, 0.1);
	}
`;

const Gps = styled.div`
	display: flex;
	justify-content: center;
`;

export default Flag;
