import { StorageHelper } from './';
export default class ApiHelper {
	// constructor
	constructor() {
		this.endPointBuilder = this.endPointBuilder.bind(this);
		this.responseHandler = this.responseHandler.bind(this);
		this.request = this.request.bind(this);
		
	}
	endPointBuilder(endPoint, params = '') {
		// handling endpoint with params
		// localhost300 will be turned in environment variable when api deployed
		if (params !== '') {
			return `http://localhost:3000/${endPoint}?${params}`;
		} else {
			return `http://localhost:3000/${endPoint}`;
		}
	}


	async responseHandler(response) {
		if (response.ok) return { ok: response.ok, status: response.status, data: await response.json() };
		else return { ok: response.ok, status: response.status, data: await response.json() };
	}
	async request({ method, endpoint, body = null, params = '' }) {
		const token = StorageHelper.getToken();
		let headers;
			if (endpoint === 'users/upload-profile-image') {
				headers = {
					'Content-Type': 'multipart/form-data',
					'Authorization': token ? token: null
				};
			}
			if (endpoint === 'users/login' || endpoint === 'users/create') {
				headers = {
					'Content-Type': 'application/json'
				};
			} else {
				headers = {
					'Content-Type': 'application/json',
					'Authorization': token ? token: null
				};
			}
		
		const opt = {
			method: method,
			headers: headers,
			body: JSON.stringify(body)
		};
		return await this.responseHandler(await fetch(this.endPointBuilder(endpoint, params), opt));
		
	}
	async post({ endpoint, body = null, params = '' }) {
		return await this.request({
			method: 'POST',
			endpoint: endpoint,
			body: body,
			params: params
		});
	}
	async get({ endpoint, params = '' }) {
		return await this.request({
			method: 'GET',
			endpoint,
			params: params
		});
	}
	async delete({ endpoint, body = null, params = '' }) {
		return await this.request({
			method: 'DELETE',
			endpoint,
			body,
			params
		});
	}
	async patch({ endpoint, body = null, params = '' }) {
		return await this.request({
			method: 'PATCH',
			endpoint,	
			body,
			params
		});
	}
}
