import { api } from '../../helpers';
import { organisatorsConstants } from '../../constants';

export const updateOrganisatorAction =
	({ params, organisator_name }) =>
	async (dispatch) => {
		dispatch({ type: organisatorsConstants.UPDATE_ORGANISATOR_REQUEST, request: { organisator_name } });
		const response = await api.patch({ endpoint: 'organisators', params: { params }, body: { organisator_name } });
		if (response.ok) return dispatch({ type: organisatorsConstants.UPDATE_ORGANISATOR_SUCCESS, data: response.data });
		else return dispatch({ type: organisatorsConstants.UPDATE_ORGANISATOR_FAILURE, data: response.data });
	};
