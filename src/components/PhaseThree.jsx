import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import RedLineImage from '../assets/phase3-line.png';
import IndustryLargeBottomRight from './IndustryLargeBottomRight';
import IndustryLargeTopLeft from './IndustryLargeTopLeft';
import IndustrySmallBottomLeft from './IndustrySmallBottomLeft';
import IndustrySmallTopRight from './IndustrySmallTopRight';
import PhaseThreeImage from '../assets/finalphase3.png';
import IndustryImageOne from '../assets/img-industry-1.png';
import IndustryImageTwo from '../assets/img-industry-2.png';
import IndustryImageThree from '../assets/img-industry-3.png';
import IndustryImageFour from '../assets/img-industry-4.png';

const fadeIn = keyframes`
   0% {
    
	opacity: 0;
  }
  100% {
    
	opacity: 1;
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

const scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const scaleDown = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
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

function ThirdComponent() {
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
					{/* <motion.div
						initial={{ opacity: 0, x: -200, y: -200 }}
						animate={{
							opacity: 1,
							x: 0,
							y: 0,

							transition: { delay: 2.1, duration: 0.6, ease: 'easeOut' },
						}}>
						<IndustryLargeTopLeft
							title='Anti-Aging'
							caption='Treatment progression'
							image={IndustryImageOne}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -200, y: +200 }}
						animate={{
							opacity: 1,
							x: 0,
							y: 0,
							transition: { delay: 2.1, duration: 0.6, ease: 'easeOut' },
						}}>
						<IndustrySmallBottomLeft
							title='Nutrition'
							caption='Macro guidance'
							image={IndustryImageTwo}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: +200, y: +200 }}
						animate={{
							opacity: 1,
							x: 0,
							y: 0,
							transition: { delay: 2.1, duration: 0.6, ease: 'easeOut' },
						}}>
						<IndustryLargeBottomRight
							title='Personal Training'
							caption='Targeted training'
							image={IndustryImageThree}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: +300, y: -300 }}
						animate={{
							opacity: 1,
							x: 0,
							y: 0,
							transition: { delay: 2.1, duration: 0.6, ease: 'easeOut' },
						}}>
						<IndustrySmallTopRight
							title='Bariatrics'
							caption='Post op analysis'
							image={IndustryImageFour}
						/>
					</motion.div> */}
					{industryData.map((data, index) => (
						<AnimatedIndustryCard
							key={data.id}
							component={data.component}
							title={data.title}
							caption={data.caption}
							image={data.image}
							x={data.x}
							y={data.y}
							delay={2.1}
						/>
					))}
				</ContentBox>
			</MainContainer>
			<RedLineContainer>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 1.3, duration: 0.3 } }}>
					<img src={RedLineImage} alt='red-line' />
				</motion.div>
			</RedLineContainer>

			{/* <img src={PhaseThreeImage} alt='final' /> */}
		</PhaseThree>
	);
}

// const createAnimatedIndustryCard = (Component, title, caption, image, x, y, delay) => (
// 	<motion.div
// 		initial={{ opacity: 0, x, y }}
// 		animate={{
// 			opacity: 1,
// 			x: 0,
// 			y: 0,
// 			transition: { delay, duration: 0.6, ease: 'easeInOut' },
// 		}}
// 		exit={{ opacity: 0, x, y, transition: { duration: 0.3, ease: 'easeInOut' } }}>
// 		<Component title={title} caption={caption} image={image} />
// 		<motion.div
// 			key='scale-up'
// 			initial={{ transform: 'scale(1)' }}
// 			animate={{ transform: 'scale(1.1)' }}
// 			transition={{ delay: 3, duration: 0.5 }}
// 		/>
// 		<motion.div
// 			key='scale-down'
// 			initial={{ transform: 'scale(1.1)' }}
// 			animate={{ transform: 'scale(1)' }}
// 			transition={{ delay: 5, duration: 0.5 }}
// 		/>
// 	</motion.div>
// );

const ScaleUpAndDownAnimation = () => (
	<>
		<motion.div
			key='scale-up'
			initial={{ transform: 'scale(1)' }}
			animate={{ transform: 'scale(1.1)' }}
			transition={{ duration: 0.5 }}
		/>
		<motion.div
			key='scale-down'
			initial={{ transform: 'scale(1.1)' }}
			animate={{ transform: 'scale(1)' }}
			transition={{ duration: 0.5 }}
		/>
	</>
);

const createAnimatedIndustryCard = (Component, title, caption, image, x, y, delay) => (
	<motion.div
		initial={{ opacity: 0, x, y, scale: 1 }}
		animate={{
			opacity: 1,
			x: 0,
			y: 0,
			scale: [1, 1.1, 1], // Animate scale: start with 1, scale up to 1.1, then scale back to 1
		}}
		transition={{ delay, duration: 0.6, ease: 'easeInOut' }}
		exit={{ opacity: 0, x, y, transition: { duration: 0.3, ease: 'easeInOut' } }}>
		<Component title={title} caption={caption} image={image} />
	</motion.div>
);

// const AnimatedIndustryCard = ({ component: Component, title, caption, image, x, y, delay }) => (
// 	<div>
// 		{createAnimatedIndustryCard(Component, title, caption, image, x, y, delay)}
// 		{ScaleUpAndDownAnimation(Component, title, caption, image, x, y, delay)}
// 	</div>
// );

// const AnimatedIndustryCard = ({ component: Component, title, caption, image, x, y, delay }) => (
// 	<motion.div
// 		initial={{ opacity: 0, x, y }}
// 		animate={{
// 			opacity: 1,
// 			x: 0,
// 			y: 0,
// 			// scale: [1, 1.1, 1],
// 		}}
// 		transition={{ delay, duration: 0.6, ease: 'easeInOut' }}
// 		exit={{ opacity: 0, x, y, scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } }}>
// 		<motion.div
// 			key='scale-up'
// 			initial={{ opacity: 0, scale: 1 }}
// 			animate={{ opacity: 1, scale: 1.1 }}
// 			transition={{ duration: 5, delay: 1.5 }}
// 		/>
// 		<motion.div
// 			key='scale-down'
// 			initial={{ opacity: 1, scale: 1.1 }}
// 			animate={{ opacity: 0, scale: 1 }}
// 			transition={{ duration: 5, delay: 3.5 }}
// 		/>
// 		<Component title={title} caption={caption} image={image} />
// 	</motion.div>
// );

// const AnimatedIndustryCard = ({ component: Component, title, caption, image, x, y, delay }) => (
// 	<motion.div
// 		initial={{ opacity: 0, x, y, scale: 1 }}
// 		animate={{
// 			opacity: 1,
// 			x: 0,
// 			y: 0,
// 			scale: [1, 1.1, 1],
// 		}}
// 		transition={{ delay, duration: 0.6, ease: 'easeInOut' }}>
// 		<motion.div
// 			key='scale-up-down'
// 			initial={{ opacity: 0, scale: 1 }}
// 			animate={[
// 				{ opacity: 1, scale: 1.1, transition: { duration: 5, delay: 1.5 } },
// 				{ opacity: 1, scale: 1, transition: { duration: 5, delay: 3.5 } },
// 			]}
// 		/>
// 		<Component title={title} caption={caption} image={image} />
// 	</motion.div>
// );

const AnimatedIndustryCard = ({ component: Component, title, caption, image, x, y, delay }) => (
	<motion.div
		initial={{ opacity: 0, x, y, scale: 1 }}
		animate={{
			opacity: 1,
			x: 0,
			y: 0,
			scale: [1, 1.1, 1],
		}}
		transition={{ delay, duration: 0.6, ease: 'easeInOut' }}>
		<motion.div
			key='scale-up-down'
			initial={{ opacity: 0, scale: 1 }}
			animate={[
				{ opacity: 1, scale: 1.1, transition: { duration: 1, delay: 0.6 } }, // 첫 번째 컴포넌트 scale up
				{ opacity: 1, scale: 1, transition: { duration: 1, delay: 1.6 } }, // 첫 번째 컴포넌트 scale down
				{ opacity: 1, scale: 1.1, transition: { duration: 1, delay: 2.6 } }, // 두 번째 컴포넌트 scale up
				{ opacity: 1, scale: 1, transition: { duration: 1, delay: 3.6 } }, // 두 번째 컴포넌트 scale down
			]}
		/>
		<Component title={title} caption={caption} image={image} />
	</motion.div>
);

const IndustryCardWrapper = styled(motion.div)`
	position: relative;
	overflow: hidden;
	animation: ${fadeIn} 0.5s ease-in-out;
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
