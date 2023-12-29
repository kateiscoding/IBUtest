import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';

function ThirdComponent() {
	return (
		<PhaseThree>
			<p>Hello this is 3rd</p>
		</PhaseThree>
	);
}

const PhaseThree = styled.div`
	gap: 8rem;

	position: relative;
	background-color: black;
	display: flex;
	flex-direction: column;
	height: 108rem;
	align-items: center;
	${'' /* gap: 5rem; */}

	> p {
		font-size: 18rem;
		font-color: white;
		color: white;
	}
`;

export default ThirdComponent;
