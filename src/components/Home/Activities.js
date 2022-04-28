import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Logo } from '../../assets/';

const Activities = () => {
	return (
		<>
			<div className='ml-4 mt-4 mr-4'>
				<div className='font-medium text-main text-3xl select-none'>Elektronik Müzik Partileri</div>
				<Swiper
					breakpoints={{
						300: {
							slidesPerView: 1.8,
							spaceBetween: 30
						},
						500: {
							slidesPerView: 2.8,
							spaceBetween: 30
						},
						768: {
							slidesPerView: 3.8,
							spaceBetween: 30
						},
						1024: {
							slidesPerView: 6,
							spaceBetween: 30
						},
						1500: {
							slidesPerView: 9.5,
							spaceBetween: 10
						}
					}}
					grabCursor={true}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_item, i) => (
						<SwiperSlide key={i}>
							<div className='bg-whites mt-4 mb-4'>
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
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default Activities;
