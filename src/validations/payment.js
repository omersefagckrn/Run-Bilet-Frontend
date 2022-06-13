import * as Yup from 'yup';

export const stepTwoSchema = Yup.object({
	cardOwner: Yup.string().required('Kart Sahibi Gereklidir!'),
	cardNumber: Yup.string().required('Kart Numarası Gereklidir!'),
	cardMonth: Yup.string().required(),
	cardYear: Yup.string().required(),
	cardCvc: Yup.string().required(),
	ticketCode: Yup.string()
});


