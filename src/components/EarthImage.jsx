import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import CountUp from 'react-countup';
import EarthImage from '../assets/earth-image-4.png';

function Earth() {
	return (
		<EarthContainer>
			<EarthImageComponent src={EarthImage} alt='earth-image' />
		</EarthContainer>
	);
}

const EarthContainer = styled.div`
	${
		'' /* overflow: hidden;
max-width: 100%;
width: 100%;
max-height: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: flex-start;  */
	}

	overflow: hidden;
	max-width: 100%;
	width: 100%;
	max-height: 100%;
	display: flex;
	top: 54rem;
	position: absolute;
	justify-content: center;
	align-items: flex-start;

	${'' /* 지구 회전 */}
	transition: transform 2s ease; /* 회전 시 애니메이션 효과를 주기 위한 설정 */
	transform: rotate(${(props) => props.rotation}deg); /* 각도에 따라 회전 */
`;

const EarthImageComponent = styled.img`
	display: flex;
	overflow: hidden;
	max-width: 100%;
	${'' /* position: absolute; */}
	background-size: cover;

	transform: scaleX(1.65) scaleY(0.9);
	${'' /* margin-top: -0.4%; */}
	transform-origin: top;
	flex-direction: column;
	align-items: center;
	${'' /* position: absolute; */}
	${'' /* margin-top: -0.4%; */}


> img {
	}
`;

export default Earth;
