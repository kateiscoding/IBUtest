import './styles/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import styled from 'styled-components';

import Main from './pages/main';
import Paths from './constants/path';

const CanvasContainer = styled.div`
	width: 100%;
	height: 100%;
`;

function App() {
	return (
		<Router>
			<Routes>
				<Route path={Paths.main} element={<Main />} />
			</Routes>
		</Router>
	);
}

export default App;
