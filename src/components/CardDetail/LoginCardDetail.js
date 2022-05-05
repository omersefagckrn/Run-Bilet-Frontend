import React, { useState } from 'react';
import { Navbar } from '../';
import { Logo, QrCode, Selection } from '../../assets';

const LoginCardDetail = () => {
	const [isOpen, setIsOpen] = useState(null);
	return (
		<>
			<div className='min-h-screen'>
				<Navbar tab='Ticket' />
				<div className='text-center font-medium text-3xl text-main mt-8'>Etkinlik Giriş Bileti</div>
				<div className='flex items-center justify-center flex-col'>
					<div className='bg-whites mt-4 mb-4 w-44 select-none'>
						<div className='flex flex-col'>
							<div className='flex relative flex-col'>
								<img className='h-24' src='https://picsum.photos/800/100' alt='' />
								<Logo className='absolute bottom-0 w-9 h-9 object-scale-down' />
							</div>
							<div className='select-none'>
								<div className='text-main flex flex-col'>
									<div className='mt-1'>ZAMANI ÜRETKEN KULLANMA</div>
									<div className='text-sm text-main font-light'>04 Mart Cuma</div>
									<div className='text-sm text-main font-light'>Geçmiş Etkinlik</div>
									<div className='text-sm text-main font-light'>Çevrimiçi</div>
									<div className='text-xs text-main font-light self-end mt-2 opacity-40'>Değişim Mimarı</div>
								</div>
							</div>
						</div>
					</div>
					<div className='grid md:grid-cols-2 gap-4 cursor-pointer'>
						{[1, 2, 3, 4].map((item, index) => (
							<div
								key={index}
								onClick={() => {
									if (isOpen === index) setIsOpen(null);
									else setIsOpen(index);
								}}
								className='flex flex-col select-none'>
								<div className='flex items-center justify-start bg-green w-[18rem] md:w-[20rem] p-1'>
									<Selection className='ml-2' />
									<div className='ml-2 text-whites text-left font-extralight'>
										<div>Hasan Soyadıgüzel</div>
										<div>1st Class - Önceden Girişli</div>
									</div>
								</div>
								{isOpen === index && (
									<div className='flex items-start justify-between p-2 mt-2'>
										<div className='text-main space-y-3 ml-4'>
											<div>+90 (555) 528 78 24 {`${index && index}`}</div>
											<div>452152333289</div>
											<div>HEKS6SCX</div>
										</div>
										<QrCode className='w-24 h-auto' />
									</div>
								)}
							</div>
						))}
					</div>
					<div className='text-center space-y-4 mt-16 cursor-pointer'>
						<div className='text-main bg-whites p-3'>Ayrıntıları Gizle / Göster</div>
						<div className='text-main bg-whites p-3'>PDF olarak Kaydet</div>
						<div className='text-main bg-whites p-3'>Yazdır</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginCardDetail;
