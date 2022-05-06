import React from 'react';
import { QrCode } from '../../assets';
import { Cards } from '../../components';

const TicketOffice = () => {
	return (
		<>
			<div className='flex items-center justify-center flex-col'>
				<div className='flex flex-col md:flex-row select-none mb-4 mt-4'>
					<div className='flex items-center justify-center bg-whites p-3 w-[11rem]'>
						<QrCode />
						<div className='text-main ml-2'>Etkinlik QR</div>
					</div>
					<div className='text-center text-whites bg-main p-3 w-[11rem]'>
						<div>BNU girin</div>
					</div>
					<div className='text-center text-whites bg-primary p-3 w-[11rem]'>
						<div>Bileti Kontrol Et</div>
					</div>
				</div>
				<div className='select-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
					<Cards />
				</div>
			</div>
		</>
	);
};

export default TicketOffice;
