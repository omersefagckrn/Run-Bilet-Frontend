import React from 'react';

import { Banner, Navbar, Filter, Activities, CreateActivity, Footer } from '../../components';

const Home = () => {
	return (
		<>
			<Navbar Tab='Home' />
			<Banner />
			<Filter />
			<Activities />
			<CreateActivity />
			<Activities />
			<Footer />
		</>
	);
};

export default Home;
