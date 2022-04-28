import { baseStatements } from '../index';
import { usersConstants } from '../../constants';

export const updateUserReducer = (state = baseStatements.initialState, action) => {
	switch (action.type) {
		case usersConstants.UPDATE_USER_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case usersConstants.UPDATE_USER_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case usersConstants.UPDATE_USER_ERROR:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
