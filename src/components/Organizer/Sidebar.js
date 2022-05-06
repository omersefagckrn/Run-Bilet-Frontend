import React from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';

import { TicketOffice, Ticket, Notification, Activity, Organization, Help, Home, Account, Locations, FinancialDetails } from '../../assets';

const Sidebar = () => {
	return (
		<>
			<ProSidebar className='hidden md:block'>
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
					<MenuItem icon={<Ticket />}>
						<Link to='activities' />
						Etkinliklerim
					</MenuItem>
					<MenuItem icon={<Activity />}>
						<Link to='create-activity' />
						Etkinlik Oluştur
					</MenuItem>

					<SubMenu icon={<Organization />} title='Organizasyonum'>
						<MenuItem icon={<Account />}>
							Firma Kimliğim
							<Link to='company-identity' />
						</MenuItem>
						<MenuItem icon={<FinancialDetails />}>
							Tahsilat Bilgilerim
							<Link to='financial-details' />
						</MenuItem>

						<MenuItem icon={<Locations />}>
							Etkinlik Mekanlarım
							<Link to='location' />
						</MenuItem>
					</SubMenu>

					<MenuItem icon={<Notification />}>
						<Link to='notifications' />
						Bildirimler
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
		</>
	);
};

export default Sidebar;
