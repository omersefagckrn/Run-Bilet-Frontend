import { api } from '../../helpers';
import { usersConstants } from '../../constants';

export const updateUserAction =
	({ full_name }) =>
	async (dispatch) => {
		dispatch({ type: usersConstants.UPDATE_USER_REQUEST, request: { full_name } });

		const response = await api.patch({ endpoint: 'users', body: { full_name } });
		if (response.ok) return dispatch({ type: usersConstants.UPDATE_USER_SUCCESS, data: response.data });
		else return dispatch({ type: usersConstants.UPDATE_USER_ERROR, data: response.data });
	};
