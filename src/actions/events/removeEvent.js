import { api } from '../../helpers';
import { eventsConstants } from '../../constants';

export const removeEventAction =
	({ params }) =>
	async (dispatch) => {
		const Authorization = 'alksfnalkfnaksf';
		dispatch({ type: eventsConstants.REMOVE_EVENT_REQUEST, request: { params } });
		const response = await api.delete({ endpoint: 'events/', headers: { Authorization }, params: { params } });
		if (response.ok) return dispatch({ type: eventsConstants.REMOVE_EVENT_SUCCESS, data: response.data });
		else return dispatch({ type: eventsConstants.REMOVE_EVENT_ERROR, data: response.data });
	};
