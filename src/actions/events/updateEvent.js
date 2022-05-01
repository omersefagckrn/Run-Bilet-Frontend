import { api } from '../../helpers';
import { eventsConstants } from '../../constants';

export const updateEventAction =
	({ name, params }) =>
	async (dispatch) => {
		dispatch({ type: eventsConstants.UPDATE_EVENT_REQUEST, request: { name } });
		const response = await api.patch({ endpoint: 'events/', body: { name }, params: { params } });
		if (response.ok) return dispatch({ type: eventsConstants.UPDATE_EVENT_SUCCESS, data: response.data });
		else return dispatch({ type: eventsConstants.UPDATE_EVENT_ERROR, data: response.data });
	};
