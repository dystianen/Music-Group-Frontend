import {http} from "../utils/http";

export class Authentication {

    async login(data) {
        const res = await http.post('/auth/login').send(data);
        return res;
    }

    async logout() {
        localStorage.removeItem('access_token');
    }
}