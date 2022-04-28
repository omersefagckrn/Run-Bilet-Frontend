import { baseStatements } from '../index';
import { eventsConstants } from '../../constants';
export const removeEventReducer = (state = baseStatements.initialState, action) => {
	switch (action.type) {
		case eventsConstants.REMOVE_EVENT_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case eventsConstants.REMOVE_EVENT_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case eventsConstants.REMOVE_EVENT_ERROR:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
