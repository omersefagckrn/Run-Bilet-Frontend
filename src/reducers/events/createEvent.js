import { baseStatements } from '../index';
import { eventsConstants } from '../../constants';
export const createEventReducer = (state = baseStatements.initialState, action) => {
	switch (action.type) {
		case eventsConstants.CREATE_EVENT_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case eventsConstants.CREATE_EVENT_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case eventsConstants.CREATE_EVENT_ERROR:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
