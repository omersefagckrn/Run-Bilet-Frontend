import React from 'react';

import { Cards, Footer, Navbar } from '../../components';

const Tickets = () => {
	return (
		<>
			<Navbar Tab='Ticket' />
			<div className='bg-tickets'>
				<div className='text-main text-3xl font-medium text-center select-none'>Biletlerim</div>
				<div className='flex items-center justify-center mt-4'>
					<div className='select-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
						<Cards />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Tickets;
