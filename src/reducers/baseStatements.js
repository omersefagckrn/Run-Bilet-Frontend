export const initialState = {
	loading: false,
	error: false,
	success: false
};
export const request = () => ({
	loading: true,
	error: false,
	success: false
});
export const success = () => ({
	loading: false,
	error: false,
	success: true
});
export const error = () => ({
	loading: false,
	error: true,
	success: false
});
