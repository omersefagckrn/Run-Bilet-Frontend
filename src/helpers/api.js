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
	async request({ method, endpoint, body = null, headers, params = null }) {
		const opt = {
			method,
			headers: this.headerBuilder({ headers }),
			body: body ? JSON.stringify(body) : null
		};
		return await this.responseHandler(await fetch(this.endPointBuilder(endpoint, params), opt));
	}
	async post({ endpoint, body = null, params = null }) {
		let headers;
		if (endpoint != 'users/upload-profile-image') {
			headers = {
				'Content-Type': 'application/json',
				Authorization: 'token'
			};
		} else {
			headers = {
				'Content-Type': 'multipart/form-data',
				Authorization: 'token'
			};
		}

		return await this.request({
			method: 'POST',
			endpoint,
			body,
			headers,
			params
		});
	}
	async get({ endpoint, body = null, params = null }) {
		return await this.request({
			method: 'GET',
			endpoint,
			body: body,
			headers,
			params: params
		});
	}
	async delete({ endpoint, body = null, params = null }) {
		return await this.request({
			method: 'DELETE',
			endpoint,
			headers,
			body,
			params
		});
	}
	async patch({ endpoint, body = null, params = null }) {
		return await this.request({
			method: 'PATCH',
			endpoint,
			body,
			headers,
			params
		});
	}
}
