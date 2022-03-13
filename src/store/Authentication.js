import {http} from "../utils/http";

export class Authentication {

    constructor(context) {
        this.context = context;
    }

    async login(data) {
        const res = await http.post('/auth/login').send(data);
        return res;
    }

    async register(data) {
        const res = await http.post('/auth/register').send(data);
        return res;
    }

    async logout() {
        localStorage.removeItem('access_token');
    }
}