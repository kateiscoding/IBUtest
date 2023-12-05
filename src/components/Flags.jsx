import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import InbodyMan from '../assets/inbodyman.png';

const Flag = ({ country, population, image }) => {
	return (
		<Flagbox>
			<FlagContent>
				<p>{country}</p>
				<div>{population}</div>
			</FlagContent>
			<RedLine>
				<div />
			</RedLine>
			<Gps>
				<img src={image} alt={`${country} Flag`} />
			</Gps>
		</Flagbox>
	);
};

const FlagContainer = styled.div`
	color: white;
	display: flex;
	gap: 60rem;
	${'' /* height: 30rem; */}
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
	width: 100%;

	position: absolute;
	top: 45rem;
	z-index: 2;
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
`;

const FlagContent = styled.div`
	color: white;
	display: flex;
	width: 24rem;
	height: auto;
	padding: 2rem 3.5rem;
	flex-direction: column;
	align-items: center;
	${'' /* gap: 2.5rem; */}
	display: flex;
	border-radius: 0.75rem;
	background: rgba(255, 255, 255, 0.15);

	box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(12px);
	gap: 2.5rem;
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

// FlagContainer에 적용
const FlagContainerbox = ({ flags }) => {
	return (
		<FlagContainer>
			{flags.map((flagData) => (
				<Flag
					key={flagData.id}
					country={flagData.country}
					population={flagData.population}
					image={flagData.image}
				/>
			))}
		</FlagContainer>
	);
};

const flagData = [
	{ id: '1', country: 'China', population: '1,949,288', image: InbodyMan },
	{ id: '2', country: 'Korea', population: '1,949,288', image: InbodyMan },
	{ id: '3', country: 'Australia', population: '1,949,288', image: InbodyMan },
	{ id: '4', country: 'USA', population: '1,949,288', image: InbodyMan },
	{ id: '5', country: 'Japan', population: '1,949,288', image: InbodyMan },
	{ id: '6', country: 'UK', population: '1,949,288', image: InbodyMan },
];

export default FlagContainer;
