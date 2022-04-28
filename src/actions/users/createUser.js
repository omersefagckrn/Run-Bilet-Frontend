import { api } from '../../helpers';
import { usersConstants } from '../../constants';

export const createUserAction =
	({ full_name, email, password }) =>
	async (dispatch) => {
		dispatch({ type: usersConstants.CREATE_USER_REQUEST, request: { full_name, email, password } });

		const response = await api.post({ endpoint: 'users/', body: { full_name, email, password } });
		if (response.ok) return dispatch({ type: usersConstants.CREATE_USER_SUCCESS, data: response.data });
		else return dispatch({ type: usersConstants.CREATE_USER_ERROR, data: response.data });
	};
