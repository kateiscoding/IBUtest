import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
// import RedLineImage from '../assets/phase3-line.png';
import RedLineImage2 from '../assets/svgs/img-earthLine.svg';
import IndustryLargeBottomRight from './IndustryLargeBottomRight';
import IndustryLargeTopLeft from './IndustryLargeTopLeft';
import IndustrySmallBottomLeft from './IndustrySmallBottomLeft';
import IndustrySmallTopRight from './IndustrySmallTopRight';
import PhaseThreeImage from '../assets/finalphase3.png';

import IndustryImageOne from '../assets/img_industry_1.png';
import IndustryImageTwo from '../assets/img_industry_2.png';
import IndustryImageThree from '../assets/img_industry_3.png';
import IndustryImageFour from '../assets/img_industry_4.png';

const fadeIn = keyframes`
   0% {
    
	opacity: 0;
  }
  100% {
    
	opacity: 1;
  }
`;

const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    clip-path: polygon(0 0, 0 100%, 0 100%, 0 0);
  }
  to {
    opacity: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

// 텍스트 fade in 애니메이션
const fadeInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(4rem);
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

const industryData = [
	{
		id: 1,
		component: IndustryLargeTopLeft,
		title: 'Anti-Aging',
		caption: 'Treatment progression',
		image: IndustryImageOne,
		x: -200,
		y: -200,
	},
	{
		id: 2,
		component: IndustrySmallBottomLeft,
		title: 'Nutrition',
		caption: 'Macro guidance',
		image: IndustryImageTwo,
		x: -200,
		y: 200,
	},
	{
		id: 3,
		component: IndustryLargeBottomRight,
		title: 'Personal Training',
		caption: 'Targeted training',
		image: IndustryImageThree,
		x: 200,
		y: 200,
	},
	{
		id: 4,
		component: IndustrySmallTopRight,
		title: 'Bariatrics',
		caption: 'Post op analysis',
		image: IndustryImageFour,
		x: 300,
		y: -300,
	},
];

const AnimatedIndustryCard = ({
	component: Component,
	title,
	caption,
	image,
	x,
	y,
	delay,
	onAnimationComplete,
}) => {
	const [scaleComplete, setScaleComplete] = useState(false);

	const handleScaleComplete = () => {
		setScaleComplete(true);
	};

	return (
		<motion.div
			initial={{ opacity: 0, x, y, scale: 1 }}
			animate={{
				opacity: 1,
				x: 0,
				y: 0,
				scale: scaleComplete ? [1, 1.1, 1] : 1,
			}}
			transition={{ delay, duration: 0.6, ease: 'easeInOut' }}
			exit={{ opacity: 0, x, y, transition: { duration: 0.3, ease: 'easeInOut' } }}>
			<Component
				title={title}
				caption={caption}
				image={image}
				style={
					{
						// backdropFilter: 'blur(40px)',
					}
				}
			/>
		</motion.div>
	);
};

function ThirdComponent() {
	const [animationIndex, setAnimationIndex] = useState(0);

	const handleAnimationComplete = () => {
		setAnimationIndex((prevIndex) => prevIndex + 1);
	};

	return (
		<PhaseThree>
			<TextContainer>
				<TextContent>
					<div>
						<p>InBody Applications</p>
					</div>
				</TextContent>
			</TextContainer>
			<MainContainer>
				<ContentBox>
					{industryData.map((data, index) => (
						<AnimatedIndustryCard
							key={data.id}
							component={data.component}
							title={data.title}
							caption={data.caption}
							image={data.image}
							x={data.x}
							y={data.y}
							delay={3 + index * 1.0}
							duration={5}
							onAnimationComplete={handleAnimationComplete}
						/>
					))}
				</ContentBox>
			</MainContainer>
			<RedLineContainer>
				{/* <motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 1.3, duration: 0.3 } }}>
					<img src={RedLineImage2} alt='red-line' style={{ width: '100%', height: 'auto' }} />
				</motion.div> */}
				<motion.div
					initial={{ clipPath: 'polygon(-50% 0, 0 0, 0 100%, -50% 100%)', opacity: 0 }}
					animate={{ clipPath: 'polygon(-0% 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
					transition={{ duration: 3.6, ease: 'easeInOut', opacity: { delay: 1.5, duration: 1 } }}>
					{/* transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }} */}
					<RedLineImage
						src={RedLineImage2}
						alt='red-line'
						style={{ width: '100%', height: 'auto' }}
					/>
				</motion.div>
			</RedLineContainer>

			{/* <img src={PhaseThreeImage} alt='final' /> */}
		</PhaseThree>
	);
}

const RedLineImage = styled.img`
	width: 100%;
	height: auto;
`;

const IndustryCardWrapper = styled(motion.div)`
	position: relative;
	overflow: hidden;
	animation: ${fadeIn} 0.5s ease-in-out;

	border-radius: 18.4rem;
	border: 2px solid var(--BandCI_dark, #6c1624);
	background: var(--bwb-07, rgba(63, 63, 63, 0.7));
	box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(40px);
`;

const RedLineContainer = styled.div`
	position: absolute;
	${'' /* width: 100%; */}
	height: auto;
	display: flex;
	z-index: 2;
	${
		'' /* animation: ${fadeIn} 0.3s ease-in-out forwards;
	animation-delay: 1.3s; */
	}
	> img {
		width: 100%;
		display: flex;
		height: auto;
	}
`;

const AnimatedImage = styled(motion.img)`
	width: 100%;
	height: auto;
	animation: ${fadeInFromLeft} 1s ease-in-out;
`;

const MainContainer = styled.div`
	width: 384rem;
	display: flex;
	height: 100%;
	z-index: 4;
	animation: ${fadeIn} 0.3s ease-in-out forwards;
`;

const ContentBox = styled.div`
	width: 192rem;
	height: auto;
	display: flex;
	z-index: 5;

	${
		'' /* animation-delay: 1.8s;
	animation: ${fadeIn} 0.3s ease-in-out forwards; */
	}

	> div:first-child {
		top: 10rem;
		left: -5rem;
		position: relative;
		z-index: 5;
	}

	> div:nth-child(2) {
		top: 50rem;
		left: -19rem;
		position: relative;
	}

	> div:nth-child(3) {
		top: 5rem;
		left: -29.5rem;
		position: relative;
	}

	> div:nth-child(4) {
		top: 50rem;
		left: -38rem;
		position: relative;
	}

	> ${AnimatedIndustryCard} {
		// 여기에 블러 효과 스타일 추가
		filter: blur(40px);
	}
`;

const PhaseThree = styled.div`
	gap: 8rem;

	position: relative;
	background-color: black;
	display: flex;
	flex-direction: row;
	height: 108rem;
	align-items: flex-end;
	${'' /* gap: 5rem; */}

	> img {
		position: fixed;
		opacity: 0.8;
	}
`;

const TextContainer = styled.div`
	width: 192rem;
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	${'' /* margin-left: 17.5rem; */}
	align-items: flex-start;
	animation-delay: 0.8s;
	animation: ${fadeInFromBottom} 0.6s ease-in-out forwards;
`;

const TextContent = styled.div`
	color: white;
	display: flex;
	${'' /* margin: 33rem 17rem; */}
	width: 74rem;
	margin-left: 25rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 5rem;

	> div {
		${'' /* margin-top: 16rem; */}
		display: flex;
		flex-direction: column;
		gap: 6.4rem;
		${'' /* width: 74rem; */}

		> p:first-child {
			font-size: 16rem;
			color: white;
			display: flex;
			font-weight: 700;
			line-height: 90%;
		}
	}
`;

export default ThirdComponent;
