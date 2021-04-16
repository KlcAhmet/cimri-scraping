import axios from "axios"
import Cimri from '../utils/cheerio/Cimri'

axios.interceptors.response.use(function (response) {
    if (response.config.url === "https://www.cimri.com/firsatlar") Cimri.firsatlarCimri(response.data)
    return response;
}, function (err) {
    try {
        console.log(err);
        return Promise.reject(err);
    } catch (error) {
        if (!err.status) {
            console.log(err);
        }
        return Promise.reject(err)
    }
});