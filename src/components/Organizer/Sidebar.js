import React from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';

import { TicketOffice, Moderation, Ticket, Notification, Activity, Organization, Updates, Info, Help, Home, Account, Locations, FinancialDetails, ContactInfo, Profile } from '../../assets';

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
		</>
	);
};

export default Sidebar;
