import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-pro-sidebar/dist/css/styles.css';
import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
