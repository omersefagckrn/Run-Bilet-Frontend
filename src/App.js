import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Tickets } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tickets' element={<Tickets />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
