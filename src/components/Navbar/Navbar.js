import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';

import { Home, RunTicket, Profile, Ticket, Activity, ActiveActivity, ActiveHome, ActiveTicket, Search } from '../../assets';

const Navbar = ({ Tab }) => {
	const routeMatch = [
		{
			route: '/',
			name: 'Kayıt Ol / Giriş Yap'
		},
		{ route: '/', name: 'Etkinlik Ara' },
		{ route: '/', name: 'Etkinlik Oluştur' },
		{ route: '/tickets', name: 'Biletlerim' },
		{ route: '/', name: 'Hesap Ayarları' },
		{ route: '/organizer/:id', name: 'Organizasyonum' }
	];
	return (
		<>
			<div className='flex items-center justify-between mx-4 select-none'>
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
					<Menu>
						<Menu.Button className='flex flex-col items-center justify-center ml-2 md:ml-4'>
							<Profile className='rounded-full' />
							<div className='text-main hidden md:block'>Hesabım</div>
						</Menu.Button>
						<Transition className='absolute bg-nav right-0 mt-16 z-50 mr-4' enter='transition ease-out duration-100' enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100' leaveTo='transform opacity-0 scale-95'>
							<Menu.Items>
								{routeMatch.map((Route, index) => (
									<Menu.Item key={index}>
										<Link to={Route.route} className={`${Route.name === 'Kayıt Ol / Giriş Yap' ? 'text-green' : 'text-main'} hover:text-whites hover:bg-main bg-white flex px-4 py-2`}>
											{Route.name}
										</Link>
									</Menu.Item>
								))}
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</>
	);
};

export default Navbar;
