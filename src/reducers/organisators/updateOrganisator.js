import { organisatorsConstants } from '../../constants';
import { baseStatements } from '..';

export const updateOrganisatorReducer = (state = baseStatements, action) => {
	switch (action.type) {
		case organisatorsConstants.UPDATE_ORGANISATOR_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case organisatorsConstants.UPDATE_ORGANISATOR_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case organisatorsConstants.UPDATE_ORGANISATOR_FAILURE:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
