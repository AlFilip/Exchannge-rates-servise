import axios from "axios";


export const initApp = {
    getList() {
        return axios.get('https://api.coingate.com/v2/currencies');
    },
    getAllCourses() {
        return axios.get('https://api.coingate.com/v2/rates').then(data => data)
    }
}

export const ConverterApi = {
    getCourse(from, to) {
        return axios.get(`https://api.coingate.com/v2/rates/merchant/${from}/${to}`).then(data=>data.data)
    }
}