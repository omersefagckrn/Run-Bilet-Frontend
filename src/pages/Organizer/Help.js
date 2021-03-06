import React, { useState } from 'react';

import { Dropdown } from '../../assets';

const Help = () => {
	const [currentDropdown, setShowDropdown] = useState(null);

	const data = [
		{ id: 1, title: 'Bilet uygulamasına kayıt olmak ücretli mi ?', description: 'Bilet uygulamasına kayıt olmak ücretli mi ?' },
		{ id: 2, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' },
		{ id: 3, title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' },
		{ id: 4, title: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' },
		{ id: 5, title: 'Bilet uygulamasına kayıt olmak ücretli mi ?', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' },
		{ id: 6, title: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' }
	];

	return (
		<>
			<div className='flex items-center justify-center mt-2 mb-2 select-none'>
				<div className='text-main text-center md:text-left md:w-[24rem]'>
					Bilgi ve destek için <span className='text-green'>Whatsapp</span> hattımıza erişip bizle iletişim kurabilirsiniz. Firmalogo ile ilgili öneri ve isteklerinizi ise <span className='text-primary'>mail</span> aracılığıyla ayrıntılı bir şekilde iletebilirsiniz.
				</div>
			</div>
			<div className='flex items-start justify-center select-none'>
				<div className='grid md:grid-cols-2 md:gap-4'>
					{[1, 2, 3, 4].map(() => (
						<>
							<span>
								<div className='text-3xl font-medium mb-1'>Genel Bilgi</div>
								{data.map((_item, index) => (
									<div className='mb-2' key={index}>
										<div className='bg-whites flex items-start justify-between p-2 w-[20rem] md:w-[25rem]'>
											<div className='text-main'>{_item.title}</div>
											<button className='ml-2'>{currentDropdown !== _item.id ? <Dropdown onClick={() => setShowDropdown(_item.id)} /> : <Dropdown className='rotate-180' onClick={() => setShowDropdown(null)} />}</button>
										</div>
										{currentDropdown === _item.id && <div className='text-black font-normal bg-whites p-2 w-[20rem] md:w-[25rem]'>{_item.description}</div>}
									</div>
								))}
							</span>
						</>
					))}
				</div>
			</div>
		</>
	);
};

export default Help;
