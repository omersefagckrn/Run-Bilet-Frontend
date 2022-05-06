import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';

import { Sidebar } from '..';
import { MenuRoute, MobileMenuRoute } from '../';

import { Profile } from '../../assets';

const Panel = () => {
	const location = useLocation();

	return (
		<div className='min-h-screen flex'>
			<Sidebar />
			<div className='flex-1 bg-[#fff]'>
				<div className='flex items-center justify-between m-4 md:hidden'>
					<Link to='/' className='text-main font-medium text-3xl'>
						Runbilet
					</Link>
					<HeadlessMenu>
						<HeadlessMenu.Button>
							<Profile className='h-8 w-8' />
						</HeadlessMenu.Button>
						<Transition className='absolute cursor-pointer w-52 mt-[28rem] bg-tickets right-0 z-50 mr-4' enter='transition ease-out duration-100' enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100' leaveTo='transform opacity-0 scale-95'>
							<HeadlessMenu.Items>
								{MobileMenuRoute.map((Route, i) => (
									<Link key={i} to={Route.route} className='text-main'>
										<HeadlessMenu.Item>
											<div className='flex items-center justify-start ml-2 space-x-2 py-4'>
												<Route.Image className='h-6 w-6' />
												<div className='ml-2'>{Route.title}</div>
											</div>
										</HeadlessMenu.Item>
									</Link>
								))}
							</HeadlessMenu.Items>
						</Transition>
					</HeadlessMenu>
				</div>
				<div className='flex items-center justify-between'>
					<div className='text-3xl mt-4 text-center flex-1 text-main font-medium select-none'>
						{MenuRoute.map((Route, index) => (
							<div key={index}>{location.pathname.split('/')[3] === Route.route && Route.title}</div>
						))}
					</div>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default Panel;
