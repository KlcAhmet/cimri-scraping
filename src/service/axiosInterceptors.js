import axios from "axios"
import { Cimri } from '../map/UtilsMap'
import store, { firsatlar, searchCimri } from "../store/index"

axios.interceptors.response.use(function (response) {

    if (response.config.url === "https://www.cimri.com/firsatlar") store.dispatch(firsatlar(Cimri.firsatlarCimri(response.data)))
    else if (response.config.url.substring(0, 28) === "https://www.cimri.com/arama?") store.dispatch(searchCimri(Cimri.searchCimri(response.data, response.config.url)))
    else if (response.config.url === store.getState().searchCimriSubCategoryLink) store.dispatch(searchCimri(Cimri.searchCimri(response.data, response.config.url)))
    else if (-1 < response.config.url.search("https://www.google.com/"))

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