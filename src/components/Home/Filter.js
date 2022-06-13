import React from 'react';

const Filter = () => {
	return (
		<div className='flex items-start md:items-center justify-start md:justify-center scrollbar select-none mt-4 bg-filter'>
			<div className='ml-4 md:ml-0 mb-4'>
				<div className='text-title text-center'>Konum</div>
				<select className='text-center focus:outline-none appearance-none text-whites font-medium text-lg p-6 bg-primary shadow-lg rounded-lg w-52'>
					<option>Tümü</option>
				</select>
			</div>
			<div className='ml-4 mb-4'>
				<div className='text-title text-center'>Zaman Aralığı</div>
				<select className='text-center focus:outline-none appearance-none text-whites font-medium text-lg p-6 bg-primary shadow-lg rounded-lg w-52'>
					<option>Her Zaman</option>
				</select>
			</div>
			<div className='ml-4 mb-4'>
				<div className='text-title text-center'>Kategori</div>
				<select className='text-center focus:outline-none appearance-none text-whites font-medium text-lg p-6 bg-primary shadow-lg rounded-lg w-52'>
					<option>Hepsi</option>
				</select>
			</div>
			<div className='ml-4 mb-4'>
				<div className='text-title text-center'>Mekan Tipi</div>
				<select className='text-center focus:outline-none appearance-none text-whites font-medium text-lg p-6 bg-primary shadow-lg rounded-lg w-52'>
					<option>Her Tip</option>
				</select>
			</div>
		</div>
	);
};

export default Filter;
