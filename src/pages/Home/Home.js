import React from 'react';

import { Banner, Navbar, Filter, Activities, CreateActivity, Footer, Story } from '../../components';

const Home = () => {
	return (
		<>
			<Navbar Tab='Home' />
			<Banner />
			<Filter />
			<Story />
			<Activities />
			<CreateActivity />
			<Activities />
			<Footer />
		</>
	);
};

export default Home;
