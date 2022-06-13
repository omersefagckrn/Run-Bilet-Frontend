import React, { useState } from 'react';

import { stepTwoSchema, stepThreeSchema } from '../../validations/payment';
import { Navbar, Footer, Modals } from '../../components';
import { FcSimCardChip } from 'react-icons/fc';

import { Formik } from 'formik';

import { AddPerson, Dropdown, Selection } from '../../assets';

const data = [
	{ id: 1, title: 'Harun Lale', description: 'Bilet uygulamasına kayıt olmak ücretli mi ?' },
	{ id: 2, title: 'Selin Kısaayak', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' },
	{ id: 3, title: 'Ahmet Meriç Çağlar ', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' },
	{ id: 4, title: 'Ece Binnaz Yurtsever', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys' }
];



const Payment = () => {

	const [pageStep, setPageStep] = useState(1);
	const [currentDropdown, setShowDropdown] = useState(null);
	const [cardState, setCardState] = useState({
		cardOwner: '***** *******',
		cardNumber: '**** **** **** ****',
		cardMonth: '**',
		cardYear: '***'
	});

	const AddUser = () => {
		Modals.AddUser();
	}
	return (
		<>
			<Navbar Tab='Payment' />
			<div className='flex flex-col items-center justify-center mt-6'>
				{pageStep === 1 && (
					<div className='w-[1144px]'>
						<div className='flex justify-between items-center bg-gray-50'>
							<div className='space-y-4 ml-4'>
								<h2 className='font-semibold text-2xl'>Zamanı Üretken Kullanma</h2>
								<p className='text-lg font-light'>5 Ağustos 2022 - Cuma</p>
								<p className=' font-light'>Istanbul</p>
							</div>
							<div>
								<img src={'https://picsum.photos/400/250'} alt='' />
							</div>
						</div>
						<div className='mt-4 bg-gray-50 p-4'>
							<div className='rounded bg-lime-200 flex justify-between items-center h-16 p-4 mb-4'>
								<p className='text-lg text-green'>Seçtiğiniz biletleri sizin için ayırdık. Lütfen size ayrılan bu sürede işlemleri tamamlayın.</p>
								<div className='rounded py-3 px-6 border-2 border-red cursor-pointer'>
									<p className='text-red'>Vazgeç</p>
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
							<div onClick={AddUser} className='flex items-center text-whites bg-primary w-[25rem] py-3 px-2 cursor-pointer select-none'>
								<AddPerson className='w-6 h-6 mr-2 color-whites' /> Yeni Kişi Ekle
							</div>
							<div className='mt-20'>
								<h2 className='font-semibold text-lg '>Fatura Bilgileri</h2>
								<div className='flex gap-y-6 flex-col w-[20rem] md:w-[25rem] p-2'>
									<select className='p-2 border border-gray-300' name='' id=''>
										<option value=''>Bireysel</option>
										<option value=''>Tüzel</option>
									</select>
									<div className='relative'>
										<input name='name' className='peer placeholder-transparent h-10 w-full p-2 border border-gray-300 focus:outline-none' type='text' placeholder='İsim Soyisim' id='' />
										<label className='absolute transition-all left-1 px-1 -top-3.5 text-sm bg-gray-50 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:bg-white peer-focus:-top-3.5 peer-focus:bg-gray-50 peer-focus:text-base' htmlFor="name">İsim Soyisim</label>
									</div>
									<div className='relative'>
										<input name='adres' className='peer placeholder-transparent h-10 w-full p-2 border border-gray-300 focus:outline-none' type='text' placeholder='Adres' id='' />
										<label className='absolute transition-all left-1 px-1 -top-3.5 text-sm bg-gray-50 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:bg-white peer-focus:-top-3.5 peer-focus:bg-gray-50 peer-focus:text-base' htmlFor="adres">Adres</label>
									</div>
								</div>
							</div>
							<button onClick={() => { setPageStep((prev) => prev + 1) }} className='bg-primary text-whites px-6 py-3 mt-4'>Ödeme Adımına Geç</button>
							<p className='mt-4 text-sm'>* Devam etmeyi seçerek <span className='text-primary'>kullanıcı ve mesafeli satış sözleşmesini</span> onaylıyorum.</p>
						</div>
					</div>
				)}
				{pageStep === 2 && (
					<div className='w-[1144px]'>
						<div className='flex justify-between items-center bg-gray-50'>
							<div className='space-y-4 ml-4'>
								<h2 className='font-semibold text-2xl'>Zamanı Üretken Kullanma</h2>
								<p className='text-lg font-light'>5 Ağustos 2022 - Cuma</p>
								<p className=' font-light'>Istanbul</p>
							</div>
							<div>
								<img src={'https://picsum.photos/400/250'} alt='' />
							</div>
						</div>
						<div className='mt-4 bg-gray-50 p-4'>
							<div className='rounded bg-lime-200 flex justify-around items-center h-16 p-4 mb-4'>
								<p className='text-lg text-green'>Seçtiğiniz biletleri sizin için ayırdık. Lütfen size ayrılan bu sürede işlemleri tamamlayın.</p>
								<div className='rounded py-3 px-6 border-2 border-red cursor-pointer'>
									<p className='text-red'>Vazgeç</p>
								</div>
							</div>
							<div>anan</div>
							<div className='flex justify-between'>
								<div>
									<div className='flex justify-between w-[35rem]'>
										<div>
											<p className='text-lg font-semibold'>Seçimleriniz</p>
										</div>
										<div className='flex justify-between w-[10rem]'>
											<p className='text-lg font-semibold'>Adet</p>
											<p className='text-lg font-semibold'>Tutar</p>
										</div>

									</div>
									<div className='mt-4 space-y-4'>
										<div className='flex justify-between w-[35rem]'>
											<div>
												<p className=' text-base'>Kombine Bilet</p>
											</div>
											<div className='flex justify-between w-[10rem]'>
												<p className='text-base'>2 x 150 TRY</p>
												<p className='text-base'>300 TRY</p>
											</div>

										</div>
										<div className='flex justify-between w-[35rem]'>
											<div>
												<p className='text-base'>Hizmet Bedeli</p>
											</div>
											<div className='flex justify-between w-[10rem]'>
												<p className='text-base'>2 x 5 TRY</p>
												<p className='text-base'>10 TRY</p>
											</div>

										</div>
										<div className='py-5 flex justify-between w-[35rem] border-t-2 border-gray-300'>
											<div className='font-semibold text-base text-primary'>TOPLAM</div>
											<div className='font-semibold text-base text-primary'>310 TRY</div>
										</div>
										<div className='w-[35rem] flex items-center'>
											<div className='w-[25rem]'>
												<input className='w-full h-10 focus:outline-none border border-gray-300 p-2' placeholder='İndirim kodu veya E-posta' type="text" />
											</div>
											<div className='ml-2 w-[10]'>
												<button className='bg-primary text-whites h-10 px-4'>UYGULA</button>
											</div>
										</div>
									</div>
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

							<div className='bg-opacity-95 rounded-lg'>
								<div className='p-3 mt-4'>
									<span>
										<div className='border rounded-lg mt-2 p-3'>
											<div className='text-xl font-bold  mb-2 select-none'>Kredi Kartı</div>
											<div className='grid md:grid-cols-2 md:gap-4'>
												<div className=''>
													<Formik
														validateOnBlur={false}
														validateOnChange={false}
														initialValues={{ cardOwner: '', cardNumber: '', cardMonth: '', cardYear: '', cardCvc: '', ticketCode: '' }}
														validationSchema={stepTwoSchema}
														onSubmit={(values) => {
															{/*console.log(values);*/ }
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
																	<input id='cardOwner' value={values.cardOwner} onChange={handleChange} type='text' placeholder='Kart Sahibi' className='placeholder:text-main w-[60%] border border-gray-300 focus:outline-none text-main bg-whites p-3' />
																</div>
																<div className='text-red mt-2'>{errors.cardOwner}</div>
																<div className='flex items-center justify-between mt-2'>
																	<label className='select-none'>Kart Numarası</label>
																	<input id='cardNumber' maxLength={19} value={values.cardNumber} onChange={handleChange} type='text' placeholder='**** **** **** 7777' className='placeholder:text-main border border-gray-300 text-main bg-whites p-3 w-[60%] focus:outline-none' />
																</div>
																<div className='text-red mt-2'>{errors.cardNumber}</div>
																<div className='flex items-center justify-between mt-2'>
																	<div className='select-none'>Son Kullanma Tarihi</div>
																	<div className='flex items-center space-x-2 w-[60%]'>
																		<input id='cardMonth' pattern='[0-9]+' maxLength={2} value={values.cardMonth} onChange={handleChange} type='text' placeholder='Ay' className='placeholder:text-main border border-gray-300 text-main bg-whites w-1/2 p-3 focus:outline-none' />
																		<input id='cardYear' pattern='[0-9]+' maxLength={2} value={values.cardYear} onChange={handleChange} type='text' placeholder='Yıl' className='placeholder:text-main border border-gray-300 text-main bg-whites w-1/2 p-3 focus:outline-none' />
																	</div>
																</div>
																<div className='flex items-center justify-between mt-2'>
																	<div className='select-none'>CVV</div>
																	<input id='cardCvc' pattern='[0-9]+' maxLength={3} value={values.cardCvc} onChange={handleChange} type='text' placeholder='CVC' className='placeholder:text-main w-[60%] border border-gray-300 text-main bg-whites p-3 focus:outline-none' />
																</div>
																<div className='text-red mt-2'>{(errors.cardCvc || errors.cardMonth || errors.cardYear) && 'Kart Ek Bilgileri Gereklidir!'}</div>
																<div className='flex items-center justify-between mt-2'>
																	<div className='select-none'>Varsa Etkinlik Kodu</div>
																	<input id='ticketCode' value={values.ticketCode} onChange={handleChange} type='text' placeholder='Etkinlik Kodu' className='placeholder:text-main w-[60%] border border-gray-300 text-main bg-whites p-3 focus:outline-none' />
																</div>

																<button type='submit' className='text-whites hover:text-red select-none bg-primary text-2xl mt-4 rounded-lg p-3 w-[60%]'>
																	Ödemeyi Tamamla
																</button>
															</form>
														)}
													</Formik>
												</div>
												<div className='flex items-start justify-center mt-2 select-none'>
													<div className=' bg-slate-400 text-main p-5 w-[20rem] rounded-lg'>
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


					</div>
				)}
				{pageStep === 3 && (
					<div>Ödeme başarılıdır.</div>
				)}
			</div>
			<Footer />
		</>
	);
};

export default Payment;
