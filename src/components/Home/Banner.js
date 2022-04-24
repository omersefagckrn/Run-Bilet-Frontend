import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import Swipers from '../../assets/swiper.svg';
import Logo from '../../assets/logo.svg';

const Banner = () => {
	return (
		<div className='mt-4 bg-[#f4fdff]'>
			<Swiper
				slidesPerView={2.7}
				spaceBetween={10}
				centeredSlides={true}
				grabCursor={true}
				loop={true}
				pagination={{
					clickable: true
				}}
				autoplay={{
					delay: 2000
				}}
				modules={[Autoplay, Pagination]}>
				{[1, 2, 3, 4, 5, 6, 7].map((_item, i) => (
					<SwiperSlide key={i}>
						{({ isActive }) => (
							<div className='relative'>
								<img className={`${isActive && 'mt-5'}`} src={Swipers} alt='' />
								<img className='absolute bottom-0 w-9 h-9 object-scale-down' src={Logo} alt='' />
							</div>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Banner;
