import { api } from '../../helpers';
import { usersConstants } from '../../constants';

export const updateUserAction =
	({ profile_image }) =>
	async (dispatch) => {
		let headers = {
			// authorization haeder will add
			'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
		};
		dispatch({ type: usersConstants.UPDATE_USER_PROFILE_IMAGE_REQUEST, request: { profile_image } });
		const response = await api.post({ endpoint: 'users/upload-profile-image', headers, body: { profile_image } });
		if (response.ok) return dispatch({ type: usersConstants.UPDATE_USER_PROFILE_IMAGE_SUCCESS, data: response.data });
		else return dispatch({ type: usersConstants.UPDATE_USER_PROFILE_IMAGE_ERROR, data: response.data });
	};
