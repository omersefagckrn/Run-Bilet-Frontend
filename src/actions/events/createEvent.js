import { api } from '../../helpers';
import { eventsConstants } from '../../constants';

export const createEventAction =
	({ name }) =>
	async (dispatch) => {
		dispatch({ type: eventsConstants.CREATE_EVENT_REQUEST, request: { name } });
		const response = await api.post({ endpoint: 'events', body: { name } });
		if (response.ok) return dispatch({ type: eventsConstants.CREATE_EVENT_SUCCESS, data: response.data });
		else return dispatch({ type: eventsConstants.CREATE_EVENT_ERROR, data: response.data });
	};
