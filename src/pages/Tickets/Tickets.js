import React from 'react';

import { Navbar } from '../../components';

import QrCode from '../../assets/qrCode.svg';
import Dropdown from '../../assets/dropdown.svg';
import Logo from '../../assets/logo.svg';

const Tickets = () => {
	return (
		<>
			<Navbar Tab='Ticket' />
			<div className='text-main text-3xl font-[500] text-center select-none'>Biletlerim</div>
			<div className='grid grid-rows-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mb-2 select-none lg:mx-20 xl:mx-60'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_item, i) => (
					<div className='flex items-center justify-center ml-2 md:ml-0 mr-2 md:mr-0'>
						<div key={i} className='mt-4 w-44'>
							<div className='flex bg-[#fafafa] flex-col'>
								<div className='flex relative flex-col'>
									<img className='h-24' src='https://picsum.photos/400/100' alt='' />
									<img className='absolute bottom-0 w-9 h-9 object-scale-down' src={Logo} alt='' />
								</div>
								<div>
									<div className='text-main flex flex-col'>
										<div className='mt-1'>ZAMANI ÜRETKEN KULLANMA</div>
										<div className='text-sm text-main font-[300]'>04 Mart Cuma</div>
										<div className='text-sm text-main font-[300]'>Geçmiş Etkinlik</div>
										<div className='text-sm text-main font-[300]'>Çevrimiçi</div>
										<div className='text-xs text-main font-[300] self-end mt-2 opacity-40 mb-1'>Değişim Mimarı</div>
									</div>
								</div>
							</div>
							<div className='bg-[#fafafa] mt-1 py-2'>
								<div className='flex items-center justify-between mx-2'>
									<div className='flex items-center justify-start'>
										<img src={QrCode} alt='' className='w-6 h-6' />
										<div className='text-main text-xs ml-1'>Etkinlik QR</div>
									</div>
									<div>
										<img src={Dropdown} alt='' className='w-6 h-6 cursor-pointer' />
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Tickets;
