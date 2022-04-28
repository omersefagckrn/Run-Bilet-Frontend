import { api } from '../../helpers';
import { usersConstants } from '../../constants';

export const removeUserAction =
	({ params }) =>
	async (dispatch) => {
		dispatch({ type: usersConstants.REMOVE_USER_REQUEST, request: { params } });

		const response = await api.delete({ endpoint: 'users/', params: { params } });
		if (response.ok) return dispatch({ type: usersConstants.REMOVE_USER_SUCCESS, data: response.data });
		else return dispatch({ type: usersConstants.REMOVE_USER_ERROR, data: response.data });
	};
