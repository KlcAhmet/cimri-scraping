import axios from "axios"
import store, { firsatlar, searchCimri, headerCimri } from "../store/index"

axios.interceptors.response.use(function (response) {








    /* fırsatlar */
    // if (-1 < response.config.url.search("https://www.cimri.com/firsatlar")) store.dispatch(firsatlar(Cimri.firsatlarCimri(response.data)))
    /* arama */
    // else if (-1 < response.config.url.search("https://www.cimri.com/arama?")) store.dispatch(searchCimri(Cimri.searchCimri(response.data, response.config.url)))
    //  else if (response.config.url === store.getState().searchCimriSubCategoryLink) store.dispatch(searchCimri(Cimri.searchCimri(response.data, response.config.url)))
    /* header */
    // else if (-1 < response.config.url.search("https://www.cimri.com/")) store.dispatch(headerCimri(Cimri.headerCimri(response.data, response.config.url)))

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