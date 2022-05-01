import { api } from '../../helpers';
import { organisatorsConstants } from '../../constants';

export const removeOrganisatorAction =
	({ params }) =>
	async (dispatch) => {
		dispatch({ type: organisatorsConstants.REMOVE_ORGANISATOR_REQUEST, request: { organisator_name } });
		const response = await api.delete({ endpoint: 'organisators', params: { params } });
		if (response.ok) return dispatch({ type: organisatorsConstants.REMOVE_ORGANISATOR_SUCCESS, data: response.data });
		else return dispatch({ type: organisatorsConstants.REMOVE_ORGANISATOR_FAILURE, data: response.data });
	};
