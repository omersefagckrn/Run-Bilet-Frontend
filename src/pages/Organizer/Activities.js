import React from 'react';
import { Dropdown, Logo } from '../../assets';

const Activities = () => {
	return (
		<div className='select-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-2'>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_item, i) => (
				<div key={i} className='flex items-center justify-center ml-2 md:ml-0 mr-2 md:mr-0'>
					<div className='mt-4 w-44'>
						<div className='flex bg-whites flex-col'>
							<div className='flex relative flex-col'>
								<img className='h-24' src='https://picsum.photos/400/100' alt='' />
								<Logo className='absolute bottom-0 w-9 h-9 object-scale-down' />
							</div>
							<div>
								<div className='text-main flex flex-col'>
									<div className='mt-1'>ZAMANI ÜRETKEN KULLANMA</div>
									<div className='text-sm text-main font-light'>04 Mart Cuma</div>
									<div className='text-sm text-main font-light'>Geçmiş Etkinlik</div>
									<div className='text-sm text-main font-light'>Çevrimiçi</div>
									<div className='text-xs text-main font-light self-end mt-2 opacity-40 mb-1'>Değişim Mimarı</div>
								</div>
							</div>
						</div>
						<div className='bg-whites mt-1 py-2'>
							<div className='flex items-center justify-between mx-2'>
								<div className='text-main'>TAMAMLANDI</div>
								<Dropdown className='w-6 h-6 cursor-pointer' />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Activities;