import { api } from '../../helpers';
import { usersConstants } from '../../constants';

export const resetPasswordAction =
	({ email }) =>
	async (dispatch) => {
		dispatch({ type: usersConstants.RESET_PASSWORD_REQUEST, request: { email } });

		const response = await api.post({ endpoint: 'users/reset-password', body: { email } });
		if (response.ok) return dispatch({ type: usersConstants.RESET_PASSWORD_SUCCESS, data: response.data });
		else return dispatch({ type: usersConstants.RESET_PASSWORD_ERROR, data: response.data });
	};
