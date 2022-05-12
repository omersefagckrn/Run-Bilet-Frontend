export class StorageHelper {
	static setToken(token) {
		if(!localStorage.getItem('auth')) {
			localStorage.setItem('auth', token);
		}
		
	}
	static getToken() {
		return localStorage.getItem('auth');
	}
}
