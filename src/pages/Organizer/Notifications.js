import React from 'react';

const Notifications = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center '>
				{[1, 2, 3, 4, 5].map((_i, i) => (
					<div key={i} className='w-[18rem] md:w-[22rem] select-none'>
						<div className='text-justify text-main'>Bakım çalışması nedeniyle etkinlik oluşturma 2 saatliğne kapatılacaktır.</div>
						<div className='text-right text-opacity-50 font-light text-main'>12.10.2021</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Notifications;
