import { StorageHelper } from './';
export default class ApiHelper {
	// constructor
	constructor() {
		this.endPointBuilder = this.endPointBuilder.bind(this);
		this.responseHandler = this.responseHandler.bind(this);
		this.request = this.request.bind(this);
		this.headerBuilder = this.headerBuilder.bind(this);
	}
	endPointBuilder(endPoint, params = null) {
		// handling endpoint with params
		// localhost300 will be turned in environment variable when api deployed
		return `http://localhost:3000/${endPoint}/${params ? `${params}` : ''}`;
	}
	headerBuilder({ header }) {
		return {
			...header
		};
	}

	async responseHandler(response) {
		if (response.ok) return { ok: response.ok, status: response.status, data: await response.json() };
		else return { ok: response.ok, status: response.status, data: await response.json() };
	}
	async request({ method, endpoint, body = null, params = null }) {
		const token = StorageHelper.getToken('auth');
		let headers;
		if (endpoint !== 'users/upload-profile-image') {
			headers = {
				'Content-Type': 'multipart/form-data',
				Authorization: token
			};
		}
		if (endpoint === 'users/login' || endpoint === 'users/register') {
			headers = {
				'Content-Type': 'application/json'
			};
		} else {
			headers = {
				'Content-Type': 'application/json',
				Authorization: token
			};
		}

		const opt = {
			method,
			headers: this.headerBuilder({ headers }),
			body: body ? JSON.stringify(body) : null
		};
		return await this.responseHandler(await fetch(this.endPointBuilder(endpoint, params), opt));
	}
	async post({ endpoint, body = null, params = null }) {
		return await this.request({
			method: 'POST',
			endpoint,
			body,
			params
		});
	}
	async get({ endpoint, body = null, params = null }) {
		return await this.request({
			method: 'GET',
			endpoint,
			body: body,
			params: params
		});
	}
	async delete({ endpoint, body = null, params = null }) {
		return await this.request({
			method: 'DELETE',
			endpoint,
			body,
			params
		});
	}
	async patch({ endpoint, body = null, params = null }) {
		return await this.request({
			method: 'PATCH',
			endpoint,
			body,
			params
		});
	}
}
