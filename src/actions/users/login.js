import { api } from '../../helpers';
import { usersConstants } from '../../constants';

export const loginAction =
	({ email, password }) =>
	async (dispatch) => {
		dispatch({ type: usersConstants.LOGIN_REQUEST, request: { email, password } });

		const response = await api.post({ endpoint: 'users/login', body: { email, password } });
		if (response.ok) return dispatch({ type: usersConstants.LOGIN_SUCCESS, data: response.data });
		else return dispatch({ type: usersConstants.LOGIN_ERROR, data: response.data });
	};
