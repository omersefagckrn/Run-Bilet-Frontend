import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../';
import { Selection } from '../../assets';
import { Footer } from '../Home';
import { Modals } from '../Modals';

const CardDetail = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const handleOpen = () => setIsOpen((prev) => !prev);
	const { id } = useParams();

	return (
		<>
			<Navbar />
			{isOpen && <Modals.ChooseTicket href={`cards/${id}/buy`} />}
			<div className='flex items-center justify-center bg-primary h-16 mt-2 select-none'>
				<div className='ml-2 text-whites text-3xl font-semibold'>Zamanı Üretken Kullanmak</div>
			</div>
			<div className='flex items-center justify-center'>
				<div className='grid md:grid-cols-2 gap-10 mt-4'>
					<img className='select-none w-[28rem]' src='https://picsum.photos/400/300' alt='' />
					<div className='flex items-start justify-between flex-col'>
						<div className='space-y-4'>
							{[1, 2, 3].map((_i, i) => (
								<div key={i} className='flex select-none'>
									<div className='text-main bg-whites p-3 w-[18rem]'>Normal Bilet</div>
									<div className='text-whites bg-main p-3 w-[6rem]'>12000 TL</div>
								</div>
							))}
						</div>
						<div>
							<div onClick={handleOpen} className='text-center bg-main text-whites w-[24rem] py-4 mb-2 mt-4 mb:mt-0 cursor-pointer block'>
								Bileti Al
							</div>
							<div className='text-center bg-primary text-whites w-[24rem] py-4'>Paylaş</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center mt-8'>
				<div className='grid md:grid-cols-2 gap-10'>
					<div className='flex items-start flex-col justify-start w-[28rem] space-y-4 mb-10'>
						<div className='text-main text-left'>
							İstanbul, Üsküdar Bağlarbaşı Metro istasyon girişinin yanı Beklenen Etkinlik Süresi: 4 saat <br /> Arcu duis placerat scelerisque dolor sed feugiat tristique. Porttitor egestas faucibus fusce turpis. Massa, neque, integer euismod ornare tellus. Consequat aliquet feugiat quis nullam augue viverra viverra venenatis sed. Massa ac a
							a imperdiet. Tellus vulputate tincidunt sed volutpat rhoncus, morbi donec sit. Convallis consequat, consectetur urna faucibus sit pretium. Sem pretium, scelerisque ultrices congue. Malesuada volutpat tellus integer sed elementum aliquam. Euismod congue neque, sed arcu, semper ac purus turpis. Egestas dignissim morbi augue aenean
							dolor eget mauris. Proin semper tincidunt integer facilisi. Mauris egestas etiam proin erat et ullamcorper urna semper. Amet, rhoncus, tortor blandit viverra fusce. Amet nisl porta consequat viverra tristique sagittis, justo faucibus. Quam pellentesque ac malesuada augue aenean malesuada enim leo egestas. Justo duis quis ut quis
							arcu lacus, arcu. Tincidunt eleifend purus cras porttitor dignissim tempus. Eu egestas etiam fermentum, semper varius. Aliquam massa semper convallis ornare at dictum tempor.
						</div>
					</div>
					<div className='flex items-start flex-col w-[24rem]'>
						<div className='p-4 bg-main'>
							<div className='font-bold text-whites'>Başlangıç Tarihi</div>
							<div className='font-light text-whites opacity-85'>03 Haziran 2022 Cuma 21:00</div>
							<div className='font-bold mt-2 text-whites'>Bitiş Tarihi</div>
							<div className='font-light text-whites opacity-85'>03 Haziran 2022 Cuma 21:00</div>
							<div className='border-[0.5px] mb-2 mt-2 border-whites opacity-40'></div>
							<div className='font-bold mt-2 text-whites'>Konum</div>
							<div className='font-light text-whites opacity-85'>The Q, Çukurambar, 1480. SK. Besakule A Blok Çankaya, Ankara, 06510 Çankaya/Ankara, Çankaya, Ankara</div>
						</div>
						<div className='flex items-start flex-col justify-start mt-4'>
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
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CardDetail;
