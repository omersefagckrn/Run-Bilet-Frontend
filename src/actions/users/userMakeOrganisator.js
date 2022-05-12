import { api } from '../../helpers';
import { usersConstants } from '../../constants';

export const userMakeOrganisator =
	({ params }) =>
	async (dispatch) => {
		dispatch({ type: usersConstants.USER_MAKE_ORGANISATOR_REQUEST, request: { params } });
		const response = await api.patch({ endpoint: 'users/', body: {}, params: { params } });
		if (response.ok) return dispatch({ type: usersConstants.USER_MAKE_ORGANISATOR_SUCCESS, data: response.data });
		else return dispatch({ type: usersConstants.USER_MAKE_ORGANISATOR_ERROR, data: response.data });
	};
