import { baseStatements } from '../index';
import { usersConstants } from '../../constants';

export const updateProfileImageReducer = (state = baseStatements.initialState, action) => {
	switch (action.type) {
		case usersConstants.UPDATE_USER_PROFILE_IMAGE_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case usersConstants.UPDATE_USER_PROFILE_IMAGE_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case usersConstants.UPDATE_USER_PROFILE_IMAGE_ERROR:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
