import React from 'react';
import { Link } from 'react-router-dom';

import { Home, RunTicket, Profile, Ticket, Activity, ActiveActivity, ActiveHome, ActiveTicket, Search } from '../../assets';

const Navbar = ({ Tab }) => {
	return (
		<>
			<div className='flex items-center justify-between mx-4 select-none bg-navbar'>
				<div className='flex items-center justify-center'>
					<Link to='/'>
						<RunTicket className='w-32' />
					</Link>
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
							<Profile className='rounded-full' />
							<div className='text-main hidden md:block'>Hesabım</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
