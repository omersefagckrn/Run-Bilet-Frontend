import * as Yup from 'yup';
import { Formik } from 'formik';
import { confirmAlert } from 'react-confirm-alert';
import { usersAction } from '../../actions';
import Stories from 'react-insta-stories';
import { Close } from '../../assets';
import { Link } from 'react-router-dom';

const loginSchema = Yup.object({
	email: Yup.string().email().required('Lütfen e-mail adresinizi girin.'),
	password: Yup.string().required('Lütfen şifrenizi girin.')
});

const LoginModal = ({ dispatch }) => {
	confirmAlert({
		customUI: () => {
			return (
				<>
					<div className='font-medium text-main text-3xl'>Giriş Yap</div>
					<div className='font-medium text-main'>Devam etmek için hesabınızın mailini ve parolanızı girin.</div>
					<Formik
						validateOnBlur={false}
						validateOnChange={false}
						initialValues={{ email: '', password: '' }}
						validationSchema={loginSchema}
						onSubmit={(values) => {
							dispatch(usersAction.loginAction({ email: values.email, password: values.password }));
						}}>
						{({ handleSubmit, handleChange, values, errors }) => (
							<form onSubmit={handleSubmit}>
								<div className='flex flex-col items-start space-y-2 mt-2'>
									<input id='email' value={values.email} onChange={handleChange} type='text' placeholder='mymail@gmail.com' className='placeholder:text-main bg-whites p-3 w-full' />
									<div className='text-green'>{errors.email}</div>
									<input id='password' value={values.password} onChange={handleChange} type='password' placeholder='••••••••••' className='placeholder:text-main bg-whites p-3 w-full' />
									<div className='text-green'>{errors.password}</div>
								</div>
								<div className='flex items-center m-2 select-none'>
									<button className='text-main w-1/2'>Kayıt Ol / Şifremi Unuttum</button>
									<button type='submit' className='w-1/2 bg-primary text-center text-whites p-3 ml-2'>
										Giriş Yap
									</button>
								</div>
							</form>
						)}
					</Formik>
				</>
			);
		}
	});
};

const StoryModal = () => {
	const stories = [
		{
			content: () => <img src={'https://picsum.photos/id/12/1920/1080'} alt='' />
		},
		{
			content: () => <img src={'https://picsum.photos/id/13/1920/1080'} alt='' />
		},
		{
			content: () => <img src={'https://picsum.photos/id/14/1920/1080'} alt='' />
		},
		{
			content: () => <img src={'https://picsum.photos/id/15/1920/1080'} alt='' />
		},
		{
			content: () => <img src={'https://picsum.photos/id/11/1920/1080'} alt='' />
		}
	];
	confirmAlert({
		customUI: ({ onClose }) => {
			return (
				<Stories
					onAllStoriesEnd={() => {
						onClose();
					}}
					width={'40rem'}
					height={'40rem'}
					keyboardNavigation={true}
					stories={stories}
				/>
			);
		}
	});
};

const ChooseTicket = ({ href }) => {
	confirmAlert({
		customUI: ({ onClose }) => {
			return (
				<>
					<div className='bg-whites md:w-[28rem]'>
						<div className='p-6'>
							<div className='flex items-center justify-between'>
								<div className='text-3xl text-main'>Bilet Seç</div>
								<Close onClick={onClose} className='w-8 h-8 cursor-pointer' />
							</div>
							<div className='border-b-4 text-primary w-28 text-center mt-6'>
								<div>19 Haz Paz</div>
							</div>
							<div className='flex items-center justify-between mt-6'>
								<div className='flex items-end justify-between w-[80%] border'>
									<div className='ml-2'>
										<div className='font-bold'>1st Phase</div>
										<div className='font-light'>150,00 TRY</div>
									</div>
									<div className='mr-2 text-primary font-bold'>Bilgi</div>
								</div>
								<div className='w-[20%] border p-3 text-center'>
									<div>KAPALI</div>
								</div>
							</div>
							<div className='flex items-center justify-between mt-6'>
								<div className='flex items-end justify-between w-[80%] border'>
									<div className='ml-2'>
										<div className='font-bold'>1st Phase</div>
										<div className='font-light'>150,00 TRY</div>
									</div>
									<div className='mr-2 text-primary font-bold'>Bilgi</div>
								</div>
								<div className='w-[20%] border p-3 text-center'>
									<select className='w-full outline-none bg-whites border-none text-center'>
										<option defaultChecked disabled>
											Adet Seçiniz
										</option>
										<option>1</option>
										<option>2</option>
									</select>
								</div>
							</div>
						</div>
						<div className='border-[0.5px] mt-4 mb-4'></div>
						<div className='flex items-start justify-between p-6'>
							<div>
								<div>0 Bilet</div>
								<div>Toplam: -</div>
							</div>
							<div className='p-4 bg-primary text-whites'>Seçili Biletleri Al</div>
						</div>
					</div>
				</>
			);
		}
	});
};

export { LoginModal, StoryModal, ChooseTicket };
