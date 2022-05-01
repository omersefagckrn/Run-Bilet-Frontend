import { organisatorsConstants } from '../../constants';
import { baseStatements } from '..';

export const removeOrganisatorReducer = (state = baseStatements, action) => {
	switch (action.type) {
		case organisatorsConstants.REMOVE_ORGANISATOR_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case organisatorsConstants.REMOVE_ORGANISATOR_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case organisatorsConstants.REMOVE_ORGANISATOR_FAILURE:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
