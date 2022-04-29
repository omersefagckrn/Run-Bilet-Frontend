import { api } from '../../helpers';
import { eventsConstants } from '../../constants';

export const getUserEventListAction = () => async (dispatch) => {
	dispatch({ type: eventsConstants.USER_EVENT_LIST_REQUEST });
	const response = await api.get({ endpoint: 'users/events/' });
	if (response.ok) return dispatch({ type: eventsConstants.USER_EVENT_LIST_SUCCESS, data: response.data });
	else return dispatch({ type: eventsConstants.USER_EVENT_LIST_ERROR, data: response.data });
};
