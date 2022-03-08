import {http} from "../utils/http";

export class Admin {

    async getAll() {
        const res = await http.get('/transaction');
        return res;
    }

    async getDetail(id) {
        const res = await http.get(`/${id}`);
        return res;
    }

    async create(data) {
        const res = await http.post('/transaction').send(data);
        this.getAll();
        return res;
    }

    async update(id, data) {
        const res = await http.post(`/transaction/${id}`).send(data);
        this.getAll();
        return res;
    }

    async delete(id) {
        const res = await http.del(`/delete/${id}`);
        this.getAll();
        return res;
    }
}