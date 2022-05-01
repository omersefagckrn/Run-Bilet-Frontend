import React from 'react';
import { Link } from 'react-router-dom';

import { Dropdown, Logo, QrCode } from '../../assets';

const Card = ({ card }) => {
	return (
		<>
			<div className='w-44'>
				<Link to={`/cards/${card.id}`}>
					<div className='flex flex-col bg-whites'>
						<div className='flex relative flex-col'>
							<img className='h-24' src={card.img} alt='' />
							<Logo className='absolute bottom-0 w-9 h-9 object-scale-down' />
						</div>
						<div className='text-main flex flex-col uppercase'>
							<div className='mt-1'>{card.title}</div>
							<div className='text-sm text-main font-light'>{card.date}</div>
							<div className='text-sm text-main font-light'>{card.activityTime}</div>
							<div className='text-sm text-main font-light'>{card.activity}</div>
							<div className='text-xs text-main font-light self-end mt-2 opacity-40 mb-1'>Değişim Mimarı</div>
						</div>
					</div>
				</Link>
				<div className='bg-whites mt-1 py-2'>
					<div className='flex items-center justify-between mx-2'>
						<div className='flex items-center justify-start'>
							<QrCode className='w-6 h-6' />
							<div className='text-main text-xs ml-1'>Etkinlik QR</div>
						</div>
						<Dropdown className='w-6 h-6 cursor-pointer' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
