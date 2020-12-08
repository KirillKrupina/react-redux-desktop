export default class DesktopService {

    _apiBase = 'http://localhost:3000/data';

    async getResourse() {
        const res = await fetch(`${this._apiBase}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}` + `, received ${res.status}`)
        }

        return await res.json();
    }

    getData = async() => {
        const res = await this.getResourse();
        return res;
    };
}