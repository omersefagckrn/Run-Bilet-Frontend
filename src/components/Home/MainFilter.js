import React from 'react';

const MainFilter = () => {
	return (
		<div className='flex items-start md:items-center justify-start md:justify-center scrollbar select-none mt-4 bg-[#f4fdff]'>
			<div className='ml-4 md:ml-0 mb-4'>
				<div className='text-title'>Konum</div>
				<div className='text-center text-main font-[500] text-lg p-6 bg-primary rounded-lg w-52'>İstanbul</div>
			</div>
			<div className='ml-4 mb-4'>
				<div className='text-title'>Zaman Aralığı</div>
				<div className='text-center text-main font-[500] text-lg p-6 rounded-lg shadow-lg w-52'>Her Zaman</div>
			</div>
			<div className='ml-4 mb-4'>
				<div className='text-title'>Kategori</div>
				<div className='text-center text-main font-[500] text-lg p-6 rounded-lg shadow-lg w-52'>Hepsi</div>
			</div>
			<div className='ml-4 mb-4'>
				<div className='text-title'>Mekan Tipi</div>
				<div className='text-center text-main font-[500] text-lg p-6 rounded-lg shadow-lg w-52'>Her Tip</div>
			</div>
		</div>
	);
};

export default MainFilter;
