import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import { MenuRoute } from './Menu';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import { TicketOffice, Moderation, Ticket, Notification, Activity, Organization, Updates, Info, Help, Home, Account, Locations, FinancialDetails, ContactInfo } from '../../assets';

const Panel = () => {
	const [isOpen, setIsOpen] = useState(false);
	const showMenu = () => setIsOpen(!isOpen);

	const location = useLocation();

	return (
		<div className='min-h-screen flex'>
			<ProSidebar className={`${isOpen ? 'hidden' : 'block'} select-none`}>
				<SidebarHeader className='mt-4 ml-5'>
					<Link to='/' className='text-main font-medium text-3xl'>
						Runbilet
					</Link>
				</SidebarHeader>
				<Menu>
					<MenuItem icon={<TicketOffice />}>
						<Link to='ticket-office' />
						Bilet Gişesi
					</MenuItem>

					<MenuItem icon={<Moderation />}>
						<Link to='moderation' />
						Moderasyon
					</MenuItem>
				</Menu>
				<Menu>
					<MenuItem icon={<Ticket />}>
						<Link to='activities' />
						Etkinliklerim
					</MenuItem>

					<MenuItem icon={<Notification />}>
						<Link to='notifications' />
						Etkinlik Bildirimleri
					</MenuItem>

					<MenuItem icon={<Activity />}>
						<Link to='create-activity' />
						Etkinlik Oluştur
					</MenuItem>
				</Menu>

				<Menu>
					<SubMenu icon={<Organization />} title='Organizasyonum'>
						<MenuItem icon={<Account />}>
							Firma Kimliğim
							<Link to='company-identity' />
						</MenuItem>
						<MenuItem icon={<Locations />}>
							Etkinlik Mesajları
							<Link to='event-venues' />
						</MenuItem>
						<MenuItem icon={<FinancialDetails />}>
							Tahsilat Bilgilerim
							<Link to='financial-details' />
						</MenuItem>

						<MenuItem icon={<ContactInfo />}>
							İletişim Bilgilerim
							<Link to='contact' />
						</MenuItem>
					</SubMenu>
					<MenuItem icon={<Updates />}>
						<Link to='updates' />
						Sistem Mesajları
					</MenuItem>
				</Menu>

				<Menu>
					<MenuItem icon={<Info />}>
						<Link to='info' />
						Sık Sorulan Sorular
					</MenuItem>

					<MenuItem icon={<Help />}>
						<Link to='help' />
						Yardım ve İletişim
					</MenuItem>

					<MenuItem icon={<Home />}>
						<Link to='/' />
						Anasayfaya Dön
					</MenuItem>
				</Menu>
			</ProSidebar>

			<div className='flex-1 bg-[#fff]'>
				<div className='flex items-center justify-between'>
					<button onClick={showMenu}>{isOpen ? <GiHamburgerMenu className='text-main' size={30} /> : <AiOutlineClose className='text-main' size={30} />}</button>
					<div className='text-3xl mt-4 text-center flex-1 text-main font-medium select-none'>
						{MenuRoute.map((_route, i) => (
							<span key={i}>{location.pathname.split('/')[3] === _route.route && _route.title}</span>
						))}
					</div>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default Panel;
