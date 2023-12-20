import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Image } from '@react-three/drei';

function ThirdComponent() {
	return (
		<Component3>
			<p>Hello this is 3rd</p>
		</Component3>
	);
}

const Component3 = styled.div`
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
