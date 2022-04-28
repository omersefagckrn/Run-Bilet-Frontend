import React from 'react';
import { Cards } from '../../components';

const Activities = () => {
	return (
		<div className='flex items-center justify-center mt-4'>
			<div className='select-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
				<Cards />
			</div>
		</div>
	);
};

export default Activities;
