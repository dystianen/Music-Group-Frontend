import {http} from "../utils/http";

export class Authentication {
    username = [];

    async login(data) {
        const res = await http.post('/api/login').send(data);
        localStorage.setItem('username', res.body.data?.user?.name);
        return res;
    }

    async logout() {
        localStorage.removeItem('access_token');
    }
}