import { api } from '../../helpers';
import { organisatorsConstants } from '../../constants';

export const getOrganisatorListAction = () => async (dispatch) => {
	dispatch({ type: organisatorsConstants.GET_ORGANISATOR_LIST_REQUEST, request: { information: 'get Method' } });
	const response = await api.get({ endpoint: 'organisators' });
	if (response.ok) return dispatch({ type: organisatorsConstants.GET_ORGANISATOR_LIST_SUCCESS, data: response.data });
	else return dispatch({ type: organisatorsConstants.GET_ORGANISATOR_LIST_FAILURE, data: response.data });
};
