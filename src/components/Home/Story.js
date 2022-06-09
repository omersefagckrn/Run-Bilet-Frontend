import React from 'react';
import { Modals } from '../Modals';

const Story = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const handleOpen = () => setIsOpen((prev) => !prev);

	return (
		<>
			{isOpen && <Modals.StoryModal />}
			<div className='text-3xl text-main ml-4'>Öne Çıkanlar</div>
			<div className='flex items-center justify-start scrollbar '>
				<div onClick={handleOpen} className='ml-4 w-16 h-16 rounded-full bg-primary bg-opacity-40 border-primary border-2' />
				<div onClick={handleOpen} className='ml-4 w-16 h-16 rounded-full bg-primary bg-opacity-40 border-primary border-2' />
				<div onClick={handleOpen} className='ml-4 w-16 h-16 rounded-full bg-primary bg-opacity-40 border-primary border-2' />
			</div>
		</>
	);
};

export default Story;
