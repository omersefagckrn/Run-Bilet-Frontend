import { baseStatements } from '../index';
import { usersConstants } from '../../constants';

export const removeUserReducer = (state = baseStatements.initialState, action) => {
	switch (action.type) {
		case usersConstants.REMOVE_USER_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case usersConstants.REMOVE_USER_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case usersConstants.REMOVE_USER_ERROR:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
