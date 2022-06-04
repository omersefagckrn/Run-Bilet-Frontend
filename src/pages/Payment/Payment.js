import React from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { AddPerson, Dropdown, Selection } from '../../assets';

const stepTwoSchema = Yup.object({
	cardNumber: Yup.string().required('Kart Numarası Gereklidir!'),
	cardMonth: Yup.string().required(),
	cardYear: Yup.string().required(),
	cardCvc: Yup.string().required(),
	ticketCode: Yup.string()
});

const stepThreeSchema = Yup.object({
	name: Yup.string().required('İsim gereklidir!'),
	surname: Yup.string().required('Soyisim gereklidir!'),
	phone: Yup.number().required('Telefon Numarası gereklidir!')
});

const data = [
	{ id: 1, title: 'Harun Lale', description: 'Bilet uygulamasına kayıt olmak ücretli mi ?' },
	{ id: 2, title: 'Selin Kısaayak', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' },
	{ id: 3, title: 'Ahmet Meriç Çağlar ', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' },
	{ id: 4, title: 'Ece Binnaz Yurtsever', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' }
];

const Payment = () => {
	const [pageStep, setPageStep] = React.useState(2);
	const [currentDropdown, setShowDropdown] = React.useState(null);
	return (
		<>
			<div className='text-main text-3xl font-bold text-center mt-6 select-none'>
				{pageStep === 1 && (
					<>
						Bilet Seçimi
						<div className='text-xl font-light'>Biletleri alacağınız kişileri ve bilet tipini seçin</div>
					</>
				)}
				{pageStep === 2 && (
					<>
						Ödeme Bilgileri
						<div className='text-xl font-light'>Kredi kartı bilgileriniz Payoneer ödeme aracılığıyla yapılamaktadır ve kart bilgileri tutulmaktadır.</div>
					</>
				)}
				{pageStep === 3 && (
					<>
						Kişi Bilgileri
						<div className='text-xl font-light'>Bilet almak istediğiniz kişinin bilgilerini düzenleyin.</div>
					</>
				)}
			</div>
			<div className='flex flex-col items-center justify-center mt-6'>
				{pageStep === 1 && (
					<>
						{data.map((_item, index) => (
							<div className='mb-2 mt-2' key={index}>
								<div className='bg-whites flex items-start justify-between p-2 w-[20rem] md:w-[25rem]'>
									<div className='text-main'>{_item.title}</div>
									<button className='ml-2'>{currentDropdown !== _item.id ? <Dropdown onClick={() => setShowDropdown(_item.id)} /> : <Dropdown className='rotate-180' onClick={() => setShowDropdown(null)} />}</button>
								</div>
								{currentDropdown === _item.id && (
									<div className='text-whites font-normal p-2 w-[20rem] md:w-[25rem] bg-green flex items-center justify-start'>
										<Selection className='w-6 h-6 mr-2' />
										<div>
											<div>Selin Kısaayak</div>
											<div>1st Class - Önceden Girişli 277tl</div>
										</div>
									</div>
								)}
							</div>
						))}
						<div className='flex items-center justify-center text-main cursor-pointer select-none'>
							<AddPerson className='w-6 h-6 mr-2' /> Yeni Kişi Ekle
						</div>
					</>
				)}
				{pageStep === 2 && (
					<Formik
						validateOnBlur={false}
						validateOnChange={false}
						initialValues={{ cardNumber: '', cardMonth: '', cardYear: '', cardCvc: '', ticketCode: '' }}
						validationSchema={stepTwoSchema}
						onSubmit={(values) => {
							console.log(values);
							setPageStep((prev) => prev + 1);
						}}>
						{({ handleSubmit, handleChange, values, errors }) => (
							<form className='text-center w-[22rem]' onSubmit={handleSubmit}>
								<div className='flex flex-col space-y-2 mt-2'>
									<label className='text-main text-left'>Kart Numarası</label>
									<input pattern='[0-9]+' id='cardNumber' value={values.cardNumber} onChange={handleChange} type='text' placeholder='**** **** **** 7777' className='placeholder:text-main focus:text-center placeholder:text-center bg-whites p-3 w-full' />
									<div className='text-green mt-2'>{errors.cardNumber}</div>
								</div>
								<div className='flex flex-col items-start mt-2'>
									<div className='space-x-24'>
										<label className='text-main text-left'>Ay</label>
										<label className='text-main text-left'>Yıl</label>
										<label className='text-main text-left'>CVC</label>
									</div>
									<div className='flex space-x-1'>
										<input pattern='[0-9]+' maxLength={2} id='cardMonth' value={values.cardMonth} onChange={handleChange} type='text' placeholder='Ay' className='placeholder:text-main w-1/3 placeholder:text-center bg-whites p-3' />
										<input pattern='[0-9]+' maxLength={2} id='cardYear' value={values.cardYear} onChange={handleChange} type='text' placeholder='Yıl' className='placeholder:text-main w-1/3 placeholder:text-center bg-whites p-3' />
										<input pattern='[0-9]+' maxLength={3} id='cardCvc' value={values.cardCvc} onChange={handleChange} type='text' placeholder='CVC' className='placeholder:text-main w-1/3 placeholder:text-center bg-whites p-3' />
									</div>
								</div>
								<div className='text-green mt-2'>{(errors.cardCvc || errors.cardMonth || errors.cardYear) && 'Kart Ek Bilgileri Gereklidir!'}</div>
								<div className='flex flex-col items-center justify-center space-y-2 mt-2'>
									<div className='text-main text-left'>Varsa Etkinlik kodunuzu girin</div>
									<input id='ticketCode' value={values.ticketCode} onChange={handleChange} type='text' placeholder='Etkinlik Kodu' className='focus:text-center placeholder:text-main placeholder:text-center bg-whites p-3 w-full' />
								</div>
								<div className='flex flex-col font-light text-main items-center m-2 mt-4 select-none'>
									<div>Selin Karaelma x1 Backstage - 1st Phase</div>
									<div>Ahmet Meriç Çağlar x 1Backstage - 1st Phase</div>
								</div>
								<div className='font-light text-main'>150 x 2 = 300 TL</div>
								<div className='font-light text-main'>Tüm Vergiler Dahildir.</div>
								<button type='submit' className='text-primary text-2xl mt-2'>
									Ödemeyi Tamamla
								</button>
							</form>
						)}
					</Formik>
				)}
				{pageStep === 3 && (
					<Formik
						validateOnBlur={false}
						validateOnChange={false}
						initialValues={{ name: '', surname: '', phone: '' }}
						validationSchema={stepThreeSchema}
						onSubmit={(values) => {
							console.log(values);
						}}>
						{({ handleSubmit, handleChange, values, errors }) => (
							<form onSubmit={handleSubmit}>
								<div className='flex flex-col items-start space-y-2 mt-2'>
									<input id='name' value={values.name} onChange={handleChange} type='text' placeholder='Name' className='placeholder:text-main bg-whites p-3 w-full' />
									<div className='text-green'>{errors.name}</div>
									<input id='surname' value={values.surname} onChange={handleChange} type='text' placeholder='Surname' className='placeholder:text-main bg-whites p-3 w-full' />
									<div className='text-green'>{errors.surname}</div>
									<input pattern='[0-9]+' maxLength={11} id='phone' value={values.phone} onChange={handleChange} type='text' placeholder='Phone' className='placeholder:text-main bg-whites p-3 w-full' />
									<div className='text-green'>{errors.phone}</div>
								</div>
								<div className='flex items-center m-2 select-none'>
									<button className='text-main w-1/2'>Kişiyi Kaldır</button>
									<button type='submit' className='w-1/2 bg-primary text-center text-whites p-3 ml-2'>
										Kişi Bilgilerini Güncelle
									</button>
								</div>
							</form>
						)}
					</Formik>
				)}
			</div>
		</>
	);
};

export default Payment;
