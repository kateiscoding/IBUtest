import React, { useRef, useState } from 'react';

import styled, { keyframes } from 'styled-components';
import CountUp from 'react-countup';
import InbodyMan from '../assets/pin-large-2.png';

const animateRedLine = keyframes`
   0% {
    
	opacity: 0;
  }
  100% {
    
	opacity: 1;
  }
`;

// 가이드라인 애니메이션
const AnimatedRedLine = styled.div`
	width: 53rem;
	height: 3.6rem;
	margin-left: 19rem;
	border-top-right-radius: 2.4rem;
	border-bottom-right-radius: 2.4rem;
	border-bottom-left-radius: 2.4rem;
	border-left: 4px #6c1624 dotted;
	border-bottom: 4px #6c1624 dotted;
	animation: ${animateRedLine} 2s ease-in-out forwards;
`;

// 국가별 데이터
const Flag = ({ country, count, image }) => {
	const flagData = [
				{
			id: '1',
			country: 'China',
			count: '2204800',
			image: InbodyMan,
		},
		{ id: '2', country: 'Korea', count: '79637390', image: InbodyMan },
		{ id: '3', country: 'Australia', count: '1741688', image: InbodyMan },
		{ id: '4', country: 'Japan', count: '15330975', image: InbodyMan },
		{ id: '5', country: 'USA', count: '22657105', image: InbodyMan },
		{ id: '6', country: 'UK', count: '2260083', image: InbodyMan },
		{ id: '7', country: 'EU', count: '2309651', image: InbodyMan },
	];

	const gpsData = [
		{ id: '1', top: '10em', left: '-215rem' },
		{ id: '2', top: '10em', left: '-225rem' },
		{ id: '3', top: '10em', left: '-245rem' },
		{ id: '4', top: '10em', left: '-255rem' },
		{ id: '5', top: '10em', left: '-275rem' },
		{ id: '6', top: '10em', left: '-295rem' },
		{ id: '7', top: '10em', left: '-255rem' },
	];

	const line = [
		{
			id: '1',
			width: '53rem',
			height: '3.5rem',
			top: '5rem',
			left: '-15rem',
			borderTopRightRadius: '2.4rem',
			borderBottomRightRadius: '2.4rem',
			borderBottomLeftRadius: '2.4rem',
		},
		{
			id: '2',
			width: '37.4rem',
			height: '18.4rem',
			top: '8rem',
			left: '-25rem',
			borderTopRightRadius: '2.4rem',
			borderBottomRightRadius: '2.4rem',
			borderBottomLeftRadius: '2.4rem',
		},
		{
			id: '3',
			width: '22.3rem',
			height: '37.1rem',
			top: '10rem',
			left: '-20rem',

			borderTopRightRadius: '2.4rem',
			borderBottomRightRadius: '2.4rem',
			borderBottomLeftRadius: '2.4rem',
		},
		{
			id: '4',
			width: '0rem',
			height: '34.7rem',
			top: '10rem',
			left: '-19rem',
			marginLeft: '18rem',
			borderTopRightRadius: '2.4rem',
			borderBottomRightRadius: '2.4rem',
			borderBottomLeftRadius: '2.4rem',
		},
		{
			id: '5',
			width: '0rem',
			height: '30rem',
			marginLeft: '23.5rem',
			top: '10rem',
			left: '-20rem',
		},
		{
			id: '6',
			width: '0rem',
			height: '26rem',
			top: '10rem',
			left: '-20rem',
			marginLeft: '18.8rem',
			borderTopRightRadius: '2.4rem',
			borderBottomRightRadius: '2.4rem',
			borderBottomLeftRadius: '2.4rem',
			borderLeft: '4px #6c1624 dotted',
			borderBottom: '4px #6c1624 dotted',
		},
		{
			id: '7',
			width: '30rem',
			height: '3.6rem',
			marginLeft: '-11rem',
			top: '10rem',
			left: '-20rem',
			borderTopLeftRadius: '0rem',
			borderTopRightRadius: '0rem',
			borderBottomRightRadius: '0rem',
			borderBottomLeftRadius: '0rem',
			borderRight: '4px #6c1624 dotted',
			borderLeft: '4px #6c1624 dotted',
			borderBottom: '4px #6c1624 dotted',
		},
	];

	return (
		<FlagContainer>
			{flagData.map((flag, index) => (
				<Flagbox key={`flag-${index + 1}`} className={`flag-${index + 1}`}>
					<FlagContent key={`flag-content-${index + 1}`} className={`flag-${index + 1}`}>
						<p>{flag.country}</p>
						<div>
							<CountUp start={1000000} end={flag.count} />
						</div>
					</FlagContent>

					<Gps className={`gps-${index + 1}`}>
						<img src={flag.image} alt={`gps-${flag.country}`} />
					</Gps>

					<AnimatedRedLine
						key={line[index].id}
						style={{
							width: line[index].width,
							height: line[index].height,
							marginLeft: line[index].marginLeft,
							top: line[index].top,
							left: line[index].left,
							borderLeft: line[index].borderLeft,
							borderRight: line[index].borderRight,
							borderTopRightRadius: line[index].borderTopRightRadius,
						}}
					/>
				</Flagbox>
			))}
		</FlagContainer>
	);
};

const FlagContainer = styled.div`
	color: white;
	display: flex;
	justify-items: center;
	position: absolute;
	z-index: 2;
	animation: ${animateRedLine} 1s ease-in-out forwards;
`;

// flag 박스 위치 지정

const Flagbox = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;

	&.flag-1 {
		top: 76.8rem;
		left: -263rem;
	}
	&.flag-2 {
		top: 48.7rem;
		left: -229rem;
	}
	&.flag-3 {
		top: 36.9rem;
		left: -185rem;
	}
	&.flag-4 {
		top: 27.3rem;
		left: -140rem;
	}
	&.flag-5 {
		top: 27.3rem;
		left: 109rem;
	}
	&.flag-6 {
		top: 51rem;
		left: 169rem;
	}
	&.flag-7 {
		top: 76.8rem;
		left: 219rem;
	}
`;

// flag 스타일 지정

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
			color: white;
			text-align: center;
			/* H2_80px */
			font-family: Lexend;
			font-size: 8rem;
			font-style: normal;
			font-weight: 700;
			line-height: 100%;
		}

		> div {
			width: 42.8rem;
			height: 10rem;
			color: white;
			text-align: center;
			/* Body1_60px */
			font-family: Lexend;
			font-size: 6rem;
			font-style: normal;
			font-weight: 400;
			border-radius: 0.8rem;
			line-height: 100%;
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

// flag gps 핀 위치 지정
const Gps = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;

	&.gps-1 {
		top: 18rem;
		left: 66rem;
	}
	&.gps-2 {
		top: 33rem;
		left: 49rem;
	}
	&.gps-3 {
		top: 51rem;
		left: 35rem;
	}
	&.gps-4 {
		top: 50rem;
		left: 11.8rem;
	}
	&.gps-5 {
		top: 50rem;
		left: 17.5rem;
	}
	&.gps-6 {
		top: 38rem;
		left: 12.5rem;
	}
	&.gps-7 {
		top: 18rem;
		left: -18rem;
	}
`;

export default Flag;
