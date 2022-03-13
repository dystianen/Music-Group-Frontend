import {http} from "../utils/http";

export class Admin {

    async getAll() {
        const res = await http.get('/transaction');
        return res;
    }

    async getDetail(id) {
        const res = await http.get(`/transaction/${id}`);
        return res;
    }

    async create(data) {
        const res = await http.post('/transaction').send(data);
        return res;
    }

    async update(id, data) {
        const res = await http.put(`/transaction/${id}`).send(data);
        return res;
    }

    async delete(id) {
        const res = await http.del(`/transaction/${id}`);
        return res;
    }
}