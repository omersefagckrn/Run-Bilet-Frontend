import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Panel, CardDetail, LoginCardDetail } from './components';
import { Activities, Home, Tickets, TicketOffice, Help, Notifications, Payment } from './pages';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/tickets' element={<Tickets />} />
			<Route path='/cards/:id' element={<CardDetail />} />
			<Route path='/login/cards/:id' element={<LoginCardDetail />} />

			<Route path='organizer/:id' element={<Panel />}>
				<Route index element={<Navigate to='ticket-office' replace />} />
				<Route path='ticket-office' element={<TicketOffice />} />
				<Route path='activities' element={<Activities />} />
				<Route path='help' element={<Help />} />
				<Route path='notifications' element={<Notifications />} />
			</Route>

			<Route path='/payment' element={<Payment />} />
		</Routes>
	);
};

export default App;
