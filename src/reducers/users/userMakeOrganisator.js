import { baseStatements } from '../index';
import { usersConstants } from '../../constants';

export const userMakeOrganisatorReducer = (state = baseStatements.initialState, action) => {
	switch (action.type) {
		case usersConstants.USER_MAKE_ORGANISATOR_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case usersConstants.USER_MAKE_ORGANISATOR_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case usersConstants.USER_MAKE_ORGANISATOR_ERROR:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
