import { api } from '../../helpers';
import { eventsConstants } from '../../constants';

export const getEventListAction = () => async (dispatch) => {
	dispatch({ type: eventsConstants.EVENT_LIST_REQUEST });
	const response = await api.get({ endpoint: 'events/' });
	if (response.ok) return dispatch({ type: eventsConstants.EVENT_LIST_SUCCESS, data: response.data });
	else return dispatch({ type: eventsConstants.EVENT_LIST_ERROR, data: response.data });
};
