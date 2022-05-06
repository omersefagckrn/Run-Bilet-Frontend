import React from 'react';

const Footer = () => {
	const data = [
		{
			title: 'Nasıl Çalışır?'
		},
		{
			title: 'Hakkımızda'
		},
		{
			title: 'Benzersiz Çözümlerimiz'
		},
		{
			title: 'Runbilet Kontrol Uygulaması'
		},
		{
			title: 'Kayıt Sürecini Basitleştirin'
		},
		{
			title: 'Runbilet iyi Geliyo'
		},
		{
			title: 'İşinizi Kolaylaştıracak ve Kolaylaştıracak'
		}
	];
	return (
		<>
			<div className='flex flex-col items-center justify-center text-whites bg-main mt-6'>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-6'>
					{[1, 2, 3, 4, 5, 6].map((_i, i) => (
						<div key={i} className='space-y-2 mb-6'>
							<div className='text-3xl text-whites font-medium select-none'>Bilgi Kaynakları</div>
							{data.map((item, index) => {
								return (
									<div key={index} className='text-whites font-extralight'>
										<a href='#!'>{item.title}</a>
									</div>
								);
							})}
						</div>
					))}
				</div>
				<div className='mb-4 select-none'>
					<div className='text-primary font-medium text-3xl'>Runbilet</div>
					<div className='text-primary'> © 2022 - Tüm hakları saklıdır. </div>
				</div>
			</div>
		</>
	);
};

export default Footer;
