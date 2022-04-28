import { api } from '../../helpers';
import { usersConstants } from '../../constants';

export const getUserListAction = () => async (dispatch) => {
	dispatch({ type: usersConstants.GET_USER_LIST_REQUEST, request: { information: 'this is the get request' } });

	const response = await api.get({ endpoint: 'users/' });
	if (response.ok) return dispatch({ type: usersConstants.GET_USER_LIST_SUCCESS, data: response.data });
	else return dispatch({ type: usersConstants.GET_USER_LIST_ERROR, data: response.data });
};
