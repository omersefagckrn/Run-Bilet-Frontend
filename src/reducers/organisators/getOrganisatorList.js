import { organisatorsConstants } from '../../constants';
import { baseStatements } from '..';

export const getOrganisatorListReducer = (state = baseStatements, action) => {
	switch (action.type) {
		case organisatorsConstants.GET_ORGANISATOR_LIST_REQUEST:
			return {
				...state,
				request: action.request,
				...baseStatements.request()
			};
		case organisatorsConstants.GET_ORGANISATOR_LIST_SUCCESS:
			return {
				...state,
				data: action.data,
				...baseStatements.success()
			};
		case organisatorsConstants.GET_ORGANISATOR_LIST_FAILURE:
			return {
				...state,
				...baseStatements.error(),
				data: action.data
			};
		default:
			return state;
	}
};
