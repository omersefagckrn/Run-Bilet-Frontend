import { baseStatements } from '../index';
import { eventsConstants } from '../../constants';
export const updateEventReducer = (state = baseStatements.initialState, action) => {
	switch (action.type) {
		case eventsConstants.UPDATE_EVENT_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case eventsConstants.UPDATE_EVENT_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case eventsConstants.UPDATE_EVENT_ERROR:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
