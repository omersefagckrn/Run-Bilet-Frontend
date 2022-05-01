import { Activity, Help, Home, Info, Moderation, Notification, Organization, Ticket, TicketOffice, Updates } from '../../../assets';

export const MobileMenuRoute = [
	{
		Image: TicketOffice,
		route: 'ticket-office',
		title: 'Bilet Gişesi'
	},
	{
		Image: Moderation,
		route: 'moderation',
		title: 'Moderasyon'
	},
	{
		Image: Ticket,
		title: 'Etkinliklerim',
		route: 'activities'
	},
	{
		Image: Notification,
		title: 'Etkinlik Bildirimleri',
		route: 'notifications'
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
		Image: Updates,
		title: 'Sistem Mesajları',
		route: 'updates'
	},
	{
		Image: Info,
		title: 'Sık Sorulan Sorular',
		route: 'info'
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
		title: 'Moderasyon',
		route: 'moderation'
	},
	{
		title: 'Etkinliklerim',
		route: 'activities'
	},
	{
		title: 'Etkinlik Bildirimleri',
		route: 'notifications'
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
		title: 'Etkinlik Mesajları',
		route: 'event-venues'
	},
	{
		title: 'Tahsilat Bilgilerim',
		route: 'financial-details'
	},
	{
		title: 'İletişim Bilgilerim',
		route: 'contact'
	},
	{
		title: 'Sistem Mesajları',
		route: 'updates'
	},
	{
		title: 'Sık Sorulan Sorular',
		route: 'info'
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
