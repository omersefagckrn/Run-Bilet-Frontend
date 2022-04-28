import { baseStatements } from '../index';
import { usersConstants } from '../../constants';

export const resetPasswordReducer = (state = baseStatements.initialState, action) => {
	switch (action.type) {
		case usersConstants.RESET_PASSWORD_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case usersConstants.RESET_PASSWORD_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case usersConstants.RESET_PASSWORD_ERROR:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
