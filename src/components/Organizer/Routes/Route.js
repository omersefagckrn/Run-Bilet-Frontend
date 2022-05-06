import { Activity, Help, Home, Notification, Organization, Ticket, TicketOffice } from '../../../assets';

export const MobileMenuRoute = [
	{
		Image: TicketOffice,
		route: 'ticket-office',
		title: 'Bilet Gişesi'
	},
	{
		Image: Ticket,
		title: 'Etkinliklerim',
		route: 'activities'
	},

	{
		Image: Activity,
		title: 'Etkinlik Oluştur',
		route: 'create-activity'
	},
	{
		Image: Organization,
		title: 'Organizasyonum',
		route: '/organizer/:id'
	},
	{
		Image: Notification,
		title: 'Bildirimler',
		route: 'notifications'
	},
	{
		Image: Help,
		title: 'Yardım ve İletişim',
		route: 'help'
	},
	{
		Image: Home,
		title: 'Anasayfaya Dön',
		route: '/'
	}
];

export const MenuRoute = [
	{
		title: 'Runbilet',
		route: '/'
	},
	{
		title: 'Bilet Gişesi',
		route: 'ticket-office'
	},
	{
		title: 'Etkinliklerim',
		route: 'activities'
	},
	{
		title: 'Etkinlik Oluştur',
		route: 'create-activity'
	},

	{
		title: 'Firma Kimliğim',
		route: 'company-identity'
	},
	{
		title: 'Tahsilat Bilgilerim',
		route: 'financial-details'
	},
	{
		title: 'Etkinlik Mekanlarım',
		route: 'location'
	},

	{
		title: 'Bildirimler',
		route: 'notifications'
	},

	{
		title: 'Yardım ve İletişim',
		route: 'help'
	},
	{
		title: 'Anasayfaya Dön',
		route: '/'
	}
];
