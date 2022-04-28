import { baseStatements } from '../index';
import { eventsConstants } from '../../constants';
export const userEventListReducer = (state = baseStatements.initialState, action) => {
	switch (action.type) {
		case eventsConstants.USER_EVENT_LIST_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case eventsConstants.USER_EVENT_LIST_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case eventsConstants.USER_EVENT_LIST_ERROR:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
