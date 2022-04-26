import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Panel } from './components';
import { Activities, Home, Tickets, TicketOffice, Help } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tickets' element={<Tickets />} />

				<Route path='organizer/:id' element={<Panel />}>
					<Route index element={<Navigate to='ticket-office' replace />} />
					<Route path='ticket-office' element={<TicketOffice />} />
					<Route path='activities' element={<Activities />} />
					<Route path='help' element={<Help />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
