import * as Yup from 'yup';

export const stepTwoSchema = Yup.object({
    cardNumber: Yup.string().required('Kart Numarası Gereklidir!'),
    cardMonth: Yup.string().required(),
    cardYear: Yup.string().required(),
    cardCvc: Yup.string().required(),
    ticketCode: Yup.string()
});

export const stepThreeSchema = Yup.object({
    name: Yup.string().required('İsim gereklidir!'),
    surname: Yup.string().required('Soyisim gereklidir!'),
    phone: Yup.number().required('Telefon Numarası gereklidir!')
});