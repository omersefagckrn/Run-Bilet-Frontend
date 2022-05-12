export class StorageHelper {
	static setToken(token) {
		localStorage.setItem('auth', token);
	}

	static getToken(name) {
		return JSON.parse(localStorage.getItem(name));
	}
}
