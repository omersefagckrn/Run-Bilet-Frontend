import React from 'react';
import { useParams } from 'react-router-dom';

import { Navbar } from '../';
import { Logo, Selection, Share, TicketWhite } from '../../assets';

const CardDetail = () => {
	const params = useParams();
	console.log(params.id);

	return (
		<>
			<Navbar />
			<div className='flex items-center justify-center bg-primary h-12 mt-32 md:mt-24 select-none'>
				<div className='w-44'>
					<div className='flex flex-col bg-whites'>
						<div className='flex relative flex-col'>
							<img className='h-24' src='https://picsum.photos/400/100' alt='' />
							<Logo className='absolute bottom-0 w-9 h-9 object-scale-down' />
						</div>
						<div className='text-main flex flex-col uppercase'>
							<div className='mt-1'>ZAMANI URETKEN KULLANMA</div>
							<div className='text-sm text-main font-light'>GEÇMİŞ ETKİNLİK</div>
							<div className='text-sm text-main font-light'>01 MART CUMA</div>
							<div className='text-sm text-main font-light'>ÇEVRİMİÇİ</div>
							<div className='text-xs text-main font-light self-end mt-2 opacity-40 mb-1'>Değişim Mimarı</div>
						</div>
					</div>
				</div>
				<div className='ml-8'>
					<div className='flex items-center justify-center mb-8 cursor-pointer'>
						<Share className='w-6 h-6' />
						<div className='ml-2 text-main'>Paylaş</div>
					</div>
					<div className='flex items-center justify-center cursor-pointer mb-14'>
						<TicketWhite className='w-6 h-6' />
						<div className='ml-2 text-whites'>Bilet Al</div>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center mt-32'>
				<div className='grid md:grid-cols-2 gap-10'>
					<div className='flex items-start flex-col justify-start'>
						<div className='mb-2 select-none'>
							<div className='text-3xl text-main font-medium'>Etkinliktekiler </div>
							<div className='text-main'>Sanatçılar, konuşmacılar, sunucular </div>
						</div>
						<div className='ml-2 mt-4 space-y-4'>
							<div className='flex items-center justify-start space-x-2'>
								<Selection />
								<div className='text-black'>Halil Sezai</div>
							</div>
							<div className='flex items-center justify-start space-x-2'>
								<Selection />
								<div className='text-black'>Ceza</div>
							</div>
							<div className='flex items-center justify-start space-x-2'>
								<Selection />
								<div className='text-black'>Buğra Küçükyılmazel</div>
							</div>
							<div className='flex items-center justify-start space-x-2'>
								<Selection />
								<div className='text-black'>Halil Sezai</div>
							</div>
							<div className='flex items-center justify-start space-x-2'>
								<Selection />
								<div className='text-black'>Dana Bilic</div>
							</div>
						</div>
					</div>
					<div className='flex items-start flex-col justify-start w-[20rem] space-y-4 mb-10'>
						<img className='select-none' src='https://picsum.photos/400/300' alt='' />
						<div className='text-main text-xs text-left'>
							İstanbul, Üsküdar Bağlarbaşı Metro istasyon girişinin yanı Beklenen Etkinlik Süresi: 4 saat <br /> Arcu duis placerat scelerisque dolor sed feugiat tristique. Porttitor egestas faucibus fusce turpis. Massa, neque, integer euismod ornare tellus. Consequat aliquet feugiat quis nullam augue viverra viverra venenatis sed. Massa ac a
							a imperdiet. Tellus vulputate tincidunt sed volutpat rhoncus, morbi donec sit. Convallis consequat, consectetur urna faucibus sit pretium. Sem pretium, scelerisque ultrices congue. Malesuada volutpat tellus integer sed elementum aliquam. Euismod congue neque, sed arcu, semper ac purus turpis. Egestas dignissim morbi augue aenean
							dolor eget mauris. Proin semper tincidunt integer facilisi. Mauris egestas etiam proin erat et ullamcorper urna semper. Amet, rhoncus, tortor blandit viverra fusce. Amet nisl porta consequat viverra tristique sagittis, justo faucibus. Quam pellentesque ac malesuada augue aenean malesuada enim leo egestas. Justo duis quis ut quis
							arcu lacus, arcu. Tincidunt eleifend purus cras porttitor dignissim tempus. Eu egestas etiam fermentum, semper varius. Aliquam massa semper convallis ornare at dictum tempor.
						</div>
						{[1, 2, 3].map(() => (
							<div className='flex select-none'>
								<div className='text-main bg-whites p-3 w-[14rem]'>Normal Bilet</div>
								<div className='text-whites bg-main p-3 w-[6rem]'>12000 TL</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CardDetail;
