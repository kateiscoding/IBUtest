import './styles/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Paths from './constants/path';

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
