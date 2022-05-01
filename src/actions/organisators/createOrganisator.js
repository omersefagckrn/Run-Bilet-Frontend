import { api } from '../../helpers';
import { organisatorsConstants } from '../../constants';

export const createOrganisatorAction =
	({ organisator_name }) =>
	async (dispatch) => {
		dispatch({ type: organisatorsConstants.CREATE_ORGANISATOR_REQUEST, request: { organisator_name } });
		const response = await api.post({ endpoint: 'organisators', body: { organisator_name } });
		if (response.ok) return dispatch({ type: organisatorsConstants.CREATE_ORGANISATOR_SUCCESS, data: response.data });
		else return dispatch({ type: organisatorsConstants.CREATE_ORGANISATOR_FAILURE, data: response.data });
	};
