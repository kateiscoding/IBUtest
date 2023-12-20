import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';

function FourthComponent() {
	return (
		<Component4>
			<p>Hello this is 4th</p>
		</Component4>
	);
}

const Component4 = styled.div`
	gap: 8rem;

	position: relative; /* 추가 */
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

export default FourthComponent;
