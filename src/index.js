import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';

const root = document.getElementById('root');

if (root) {
	createRoot(root).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
