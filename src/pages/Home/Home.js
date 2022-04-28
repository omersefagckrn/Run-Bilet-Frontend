import React from 'react';

import { Banner, Navbar, Filter, Activities, CreateActivity } from '../../components';

const Home = () => {
	return (
		<>
			<Navbar Tab='Home' />
			<Banner />
			<Filter />
			<Activities />
			<CreateActivity />
			<Activities />
		</>
	);
};

export default Home;
