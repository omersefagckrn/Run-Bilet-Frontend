import * as Yup from 'yup';
import { Formik } from 'formik';
import { confirmAlert } from 'react-confirm-alert';
// import { Mail, Password } from '../../assets';

const loginSchema = Yup.object({
	email: Yup.string().email().required('Lütfen e-mail adresinizi girin.'),
	password: Yup.string().required('Lütfen şifrenizi girin.')
});

const LoginModal = () => {
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
							console.log(values);
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

export { LoginModal };
