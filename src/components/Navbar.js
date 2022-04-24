import React from 'react';
import { Link } from 'react-router-dom';

import RunTicket from '../assets/runTicket.svg';
import Avatar from '../assets/avatar.svg';

import { ReactComponent as ActiveActivity } from '../assets/activeActivity.svg';
import { ReactComponent as Activity } from '../assets/activity.svg';

import { ReactComponent as ActiveHome } from '../assets/activeHome.svg';
import { ReactComponent as Home } from '../assets/home.svg';

import { ReactComponent as ActiveTicket } from '../assets/activeTicket.svg';
import { ReactComponent as Ticket } from '../assets/ticket.svg';

import { ReactComponent as Search } from '../assets/search.svg';

const Navbar = ({ Tab }) => {
	return (
		<>
			<div className='flex items-center justify-between mx-4 select-none'>
				<div className='flex items-center justify-center'>
					<img src={RunTicket} alt='' className='w-32' />
				</div>
				<div className='md:flex items-center justify-center hidden'>
					<Search />
					<input placeholder='Etkinlik, Eğitim, Seminer, Eğlence Ara' className='ml-2 placeholder:text-main md:w-72 outline-none text-main' type='text' />
				</div>
				<div className='flex cursor-pointer text-center mt-2'>
					<Link to='/'>
						<div className='flex flex-col items-center justify-center'>
							{Tab === 'Home' ? <ActiveHome /> : <Home />}
							<div className={`hidden md:block ${Tab === 'Home' ? 'text-primary' : 'text-main'}`}>Anasayfa</div>
						</div>
					</Link>
					<Link to='/create-activity'>
						<div className='flex flex-col items-center justify-center ml-2 md:ml-4'>
							{Tab === 'Activity' ? <ActiveActivity /> : <Activity />}
							<div className={`hidden md:block ${Tab === 'Activity' ? 'text-primary' : 'text-main'}`}>Etkinlik Oluştur</div>
						</div>
					</Link>
					<Link to='/tickets'>
						<div className='flex flex-col items-center justify-center ml-2 md:ml-4'>
							{Tab === 'Ticket' ? <ActiveTicket /> : <Ticket />}
							<div className={`hidden md:block ${Tab === 'Ticket' ? 'text-primary' : 'text-main'}`}>Biletlerim</div>
						</div>
					</Link>
					<Link to='/profile'>
						<div className='flex flex-col items-center justify-center ml-2 md:ml-4'>
							<img className='rounded-full' src={Avatar} alt='' />
							<div className='text-main hidden md:block'>Hesabım</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
