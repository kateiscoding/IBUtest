import './styles/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import MainPage from './pages/main';
import Paths from './constants/path';

const CanvasContainer = styled.div`
	width: 100%;
	height: 100%;
`;

function App() {
	const [showMainPage, setShowMainPage] = useState(true);

	return <div>{showMainPage && <MainPage />}</div>;
}

export default App;
