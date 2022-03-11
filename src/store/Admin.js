import {http} from "../utils/http";

export class Admin {

    async getAll() {
        const res = await http.get('/api/admin');
        return res;
    }

    async getDetail(id) {
        const res = await http.get(`/api/admin/${id}`);
        return res;
    }

    async create(data) {
        const res = await http.post('/api/admin/create').send(data);
        return res;
    }

    async update(id, data) {
        const res = await http.put(`/api/admin/${id}`).send(data);
        return res;
    }

    async delete(id) {
        const res = await http.del(`/api/admin/${id}`);
        return res;
    }
}