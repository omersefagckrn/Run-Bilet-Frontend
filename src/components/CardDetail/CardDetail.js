import React from 'react';
import { useParams } from 'react-router-dom';

import { Navbar } from '../';

const CardDetail = () => {
	const params = useParams();
	console.log(params.id);
	// localhost:5000/cards/:id axios

	return (
		<>
			<Navbar />
			<div>CardDetail</div>
		</>
	);
};

export default CardDetail;
