// store for redux
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { eventReducers, usersReducers, organisatorsReducers } from '../reducers';

const logger = createLogger();
// this rootReducer will be combined all of api endpoint reducers

export const rootReducer = combineReducers({
	users: combineReducers({
		login: usersReducers.loginReducer,
		resetPassword: usersReducers.resetPasswordReducer,
		createUser: usersReducers.createUserReducer,
		removeUser: usersReducers.removeUserReducer,
		updateUser: usersReducers.updateUserReducer,
		changePassword: usersReducers.changePasswordReducer,
		updateUserProfileImage: usersReducers.updateProfileImageReducer,
		getUserList: usersReducers.getUserListReducer
	}),
	events: combineReducers({
		eventList: eventReducers.eventListReducer,
		removeEvent: eventReducers.removeEventReducer,
		userEventList: eventReducers.userEventListReducer,
		createEvent: eventReducers.createEventReducer,
		updateEvent: eventReducers.updateEventReducer
	}),
	organisators: combineReducers({
		createOrganisator: organisatorsReducers.createOrganisatorReducer,
		updateOrganisator: organisatorsReducers.updateOrganisatorReducer,
		getOrganisatorList: organisatorsReducers.getOrganisatorListReducer,
		removeOrganisator: organisatorsReducers.removeOrganisatorReducer
	})
});
const middlewares = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middlewares);

export { store };
