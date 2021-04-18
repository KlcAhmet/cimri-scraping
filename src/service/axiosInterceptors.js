import axios from "axios"
import { Cimri } from '../map/UtilsMap'
import store, { firsatlar } from "../store/index"

axios.interceptors.response.use(function (response) {
    if (response.config.url === "https://www.cimri.com/firsatlar") store.dispatch(firsatlar(Cimri.firsatlarCimri(response.data)))
    else if (response.config.url.substring(0, 30) === "https://www.cimri.com/arama?q=") Cimri.searchCimri(response.data)

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