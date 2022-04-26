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
			<div className='flex items-center justify-center mt-2 select-none'>
				<div className='text-main text-left w-[360px]'>
					Bilgi ve destek için <span className='text-green'>Whatsapp</span> hattımıza erişip bizle iletişim kurabilirsiniz. Firmalogo ile ilgili öneri ve isteklerinizi ise <span className='text-primary'>mail</span> aracılığıyla ayrıntılı bir şekilde iletebilirsiniz.
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				{data.map((_i, index) => (
					<div className='flex items-start justify-center'>
						<div className='select-none p-1 w-[20rem] md:w-[24rem]'>
							<div className='bg-whites flex items-start justify-between'>
								<div className='mt-2 mb-2'>
									<div className='text-main'>{_i.title}</div>
								</div>
								<div className='m-2 cursor-pointer'>{currentDropdown !== index ? <Dropdown onClick={() => setShowDropdown(index)} /> : <Dropdown className='rotate-180' onClick={() => setShowDropdown(null)} />}</div>
							</div>
							{currentDropdown === index && (
								<div className='bg-whites text-main font-normal'>
									<div>{_i.description}</div>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Help;
