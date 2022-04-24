import React from 'react';

import { Banner, Navbar, MainFilter, Cards, CreateActivity } from '../../components';

const Home = () => {
	return (
		<>
			<Navbar Tab='Home' />
			<Banner />
			<MainFilter />
			<Cards />
			<CreateActivity />
			<Cards />
		</>
	);
};

export default Home;
