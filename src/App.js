import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';

import { Panel, CardDetail, LoginCardDetail } from './components';
import { Activities, Home, Tickets, TicketOffice, Help, Notifications, Payment } from './pages';

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/tickets' element={<Tickets />} />

				<Route path='/cards/:id' element={<CardDetail />} />

				<Route path='/login/cards/:id' element={<LoginCardDetail />} />
				<Route path='/payment/:id' element={<Payment />} />
				<Route path='organizer/:id' element={<Panel />}>
					<Route index element={<Navigate to='ticket-office' replace />} />
					<Route path='ticket-office' element={<TicketOffice />} />
					<Route path='activities' element={<Activities />} />
					<Route path='help' element={<Help />} />
					<Route path='notifications' element={<Notifications />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default App;
