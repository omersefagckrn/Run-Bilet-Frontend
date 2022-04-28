import { api } from '../../helpers';
import { usersConstants } from '../../constants';

export const changePasswordAction =
	({ password }) =>
	async (dispatch) => {
		dispatch({ type: usersConstants.USER_CHANGE_PASSWORD_REQUEST, request: { password } });

		const response = await api.post({ endpoint: 'users/change-password', body: { password } });
		if (response.ok) return dispatch({ type: usersConstants.USER_CHANGE_PASSWORD_SUCCESS, data: response.data });
		else return dispatch({ type: usersConstants.USER_CHANGE_PASSWORD_ERROR, data: response.data });
	};
