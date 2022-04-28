import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity } from '../../assets';

const CreateActivity = () => {
	return (
		<div className='flex items-center justify-center flex-col mt-4 mb-4 space-y-2 text-center bg-create_activity'>
			<div className='text-primary text-3xl font-medium w-[22rem] mt-2'>Sende Kendi Etkinliğini Oluşturmak İster misin?</div>
			<Link to='/create-activity'>
				<div className='flex flex-col items-center'>
					<Activity />
					<div className='text-main'>Etkinlik Oluştur</div>
				</div>
			</Link>
		</div>
	);
};

export default CreateActivity;
