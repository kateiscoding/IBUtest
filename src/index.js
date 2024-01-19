import React from 'react';
import { createRoot } from 'react-dom/client';

import { defineCustomElements } from 'shooting-stars/dist/loader';
import App from './App';

const root = document.getElementById('root');

if (root) {
	// Create a root and render App component
	const reactRoot = createRoot(root);
	reactRoot.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);

	// Define custom elements for Shooting Stars
	defineCustomElements(window);
}
