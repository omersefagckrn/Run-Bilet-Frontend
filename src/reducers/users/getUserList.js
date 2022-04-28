import { baseStatements } from '../index';
import { usersConstants } from '../../constants';

export const getUserListReducer = (state = baseStatements.initialState, action) => {
	switch (action.type) {
		case usersConstants.GET_USER_LIST_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case usersConstants.GET_USER_LIST_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case usersConstants.GET_USER_LIST_ERROR:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
