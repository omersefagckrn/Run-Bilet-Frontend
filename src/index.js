import React from 'react';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './helpers';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-pro-sidebar/dist/css/styles.css';
import './style/index.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
