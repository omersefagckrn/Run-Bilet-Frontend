import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { stepTwoSchema, stepThreeSchema } from '../../validations/payment';
import { Navbar, Footer } from '../../components';
import { FcSimCardChip } from 'react-icons/fc';

import { Formik } from 'formik';

import { AddPerson, Dropdown, Selection } from '../../assets';

const data = [
	{ id: 1, title: 'Harun Lale', description: 'Bilet uygulamasına kayıt olmak ücretli mi ?' },
	{ id: 2, title: 'Selin Kısaayak', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' },
	{ id: 3, title: 'Ahmet Meriç Çağlar ', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' },
	{ id: 4, title: 'Ece Binnaz Yurtsever', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' }
];

const useQuery = () => {
	const { search } = useLocation();
	return useMemo(() => new URLSearchParams(search), [search]);
};

const Payment = () => {
	let query = useQuery();
	const [pageStep, setPageStep] = useState(2);
	const [currentDropdown, setShowDropdown] = useState(null);
	const [cardState, setCardState] = useState({
		cardOwner: '***** *******',
		cardNumber: '**** **** **** ****',
		cardMonth: '**',
		cardYear: '***'
	});
	return (
		<>
			<Navbar Tab='Payment' />
			<div className='flex flex-col items-center justify-center mt-6'>
				{pageStep === 1 && (
					<div className='w-[1144px]'>
						<div className='flex justify-between items-center bg-main bg-opacity-5'>
							<div className='space-y-4 ml-4'>
								<h2 className='font-semibold text-2xl'>Zamanı Üretken Kullanma</h2>
								<p className='text-lg font-light'>5 Ağustos 2022 - Cuma</p>
								<p className=' font-light'>Istanbul</p>
							</div>
							<div>
								<img src={'https://picsum.photos/400/250'} alt='' />
							</div>
						</div>
						<div className='mt-4 bg-main bg-opacity-5 p-4'>
							<div className='rounded bg-green bg-opacity-60 flex justify-between items-center h-16 p-4 mb-4'>
								<p className='text-lg text-green'>Seçtiğiniz biletleri sizin için ayırdık. Lütfen size ayrılan bu sürede işlemleri tamamlayın.</p>
								<div className='rounded py-3 px-6 border-2 border-red-700 cursor-pointer'>
									<p className='text-red-700'>Vazgeç</p>
								</div>
							</div>
							<h2 className='font-semibold text-lg '>Katılımcı Bilgilerini Girin</h2>
							<div className='flex justify-between'>
								<div>
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
								</div>
								<div className='w-[20rem] space-y-4'>
									<div>
										<h2 className='font-semibold'>Başlangıç Tarihi</h2>
										<p className='font-light'>05 Ağustos 2022 Cuma 12:00</p>
									</div>
									<div>
										<h2 className='font-semibold'>Bitiş Tarihi</h2>
										<p className='font-light'>07 Ağustos 2022 Pazar 23:55</p>
										<div className='opacity-10 bg-main w-full h-1 mt-2'></div>
									</div>
									<div>
										<h2 className='font-semibold'>Konum</h2>
										<p className='font-light'>Uludağ, Kirazlı Mh. Uludağ Oteller Bölgesi Osmangazi/BURSA, Osmangazi, Bursa</p>
									</div>
								</div>
							</div>
							<div className='flex items-center text-whites bg-primary w-[25rem] py-3 px-2 cursor-pointer select-none'>
								<AddPerson className='w-6 h-6 mr-2 color-whites' /> Yeni Kişi Ekle
							</div>
							<div className='mt-20'>
								<h2 className='font-semibold text-lg '>Fatura Bilgileri</h2>
								<div className='flex gap-y-4 flex-col w-[20rem] md:w-[25rem] p-2'>
									<select className='p-2' name='' id=''>
										<option value=''>Bireysel</option>
										<option value=''>Tüzel</option>
									</select>
									<input className='p-2 focus:outline-none' type='text' value='İsim Soyisim' id='' />
									<input className='p-2 focus:outline-none' type='text' value='Adres' id='' />
								</div>
							</div>
							<button className='bg-primary text-whites px-6 py-3 mt-4'>Ödeme Adımına Geç</button>
						</div>
					</div>
				)}
				{pageStep === 2 && (
					<div className='w-[1144px]'>
						<div className='bg-main bg-opacity-95 rounded-lg'>
							<div className='p-3'>
								<span className='text-white text-3xl mb-2 font-bold select-none'>Ödeme Yöntemleri</span>
								<span>
									<div className='border rounded-lg mt-2 p-3'>
										<div className='text-xl font-bold text-whites mb-2 select-none'>Kredi Kartı Tek Çekim</div>
										<div className='grid md:grid-cols-2 md:gap-4'>
											<div className='text-whites'>
												<Formik
													validateOnBlur={false}
													validateOnChange={false}
													initialValues={{ cardOwner: '', cardNumber: '', cardMonth: '', cardYear: '', cardCvc: '', ticketCode: '' }}
													validationSchema={stepTwoSchema}
													onSubmit={(values) => {
														console.log(values);
														setCardState({
															cardOwner: values.cardOwner,
															cardNumber: values.cardNumber,
															cardMonth: values.cardMonth,
															cardYear: values.cardYear
														});
														/* setPageStep((prev) => prev + 1); */
													}}>
													{({ handleSubmit, handleChange, values, errors }) => (
														<form onSubmit={handleSubmit}>
															<div className='flex items-center justify-between mt-2'>
																<label className='select-none'>Kart Sahibi</label>
																<input id='cardOwner' value={values.cardOwner} onChange={handleChange} type='text' placeholder='Kart Sahibi' className='placeholder:text-main w-[60%] focus:outline-none text-main bg-whites p-3' />
															</div>
															<div className='text-red mt-2'>{errors.cardOwner}</div>
															<div className='flex items-center justify-between mt-2'>
																<label className='select-none'>Kart Numarası</label>
																<input id='cardNumber' maxLength={19} value={values.cardNumber} onChange={handleChange} type='text' placeholder='**** **** **** 7777' className='placeholder:text-main text-main bg-whites p-3 w-[60%] focus:outline-none' />
															</div>
															<div className='text-red mt-2'>{errors.cardNumber}</div>
															<div className='flex items-center justify-between mt-2'>
																<div className='select-none'>Son Kullanma Tarihi</div>
																<div className='flex items-center space-x-2 w-[60%]'>
																	<input id='cardMonth' pattern='[0-9]+' maxLength={2} value={values.cardMonth} onChange={handleChange} type='text' placeholder='Ay' className='placeholder:text-main text-main bg-whites w-1/2 p-3 focus:outline-none' />
																	<input id='cardYear' pattern='[0-9]+' maxLength={2} value={values.cardYear} onChange={handleChange} type='text' placeholder='Yıl' className='placeholder:text-main text-main bg-whites w-1/2 p-3 focus:outline-none' />
																</div>
															</div>
															<div className='flex items-center justify-between mt-2'>
																<div className='select-none'>CVV</div>
																<input id='cardCvc' pattern='[0-9]+' maxLength={3} value={values.cardCvc} onChange={handleChange} type='text' placeholder='CVC' className='placeholder:text-main w-[60%] text-main bg-whites p-3 focus:outline-none' />
															</div>
															<div className='text-red mt-2'>{(errors.cardCvc || errors.cardMonth || errors.cardYear) && 'Kart Ek Bilgileri Gereklidir!'}</div>
															<div className='flex items-center justify-between mt-2'>
																<div className='select-none'>Varsa Etkinlik Kodu</div>
																<input id='ticketCode' value={values.ticketCode} onChange={handleChange} type='text' placeholder='Etkinlik Kodu' className='placeholder:text-main w-[60%] text-main bg-whites p-3 focus:outline-none' />
															</div>

															<button type='submit' className='text-main hover:text-red select-none bg-whites text-2xl mt-4 rounded-lg p-3 w-[60%]'>
																Ödemeyi Tamamla
															</button>
														</form>
													)}
												</Formik>
											</div>
											<div className='flex items-start justify-center mt-2 select-none'>
												<div className='bg-whites text-main p-5 w-[20rem] rounded-lg'>
													<FcSimCardChip className='w-10 h-10' />
													<div>{cardState.cardNumber}</div>
													<div className='flex items-center justify-between mt-6'>
														<span>{cardState.cardOwner}</span>
														<span>
															{cardState.cardMonth} / {cardState.cardYear}
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</span>
							</div>
						</div>
					</div>
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
			<Footer />
		</>
	);
};

export default Payment;
