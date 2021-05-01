import axios from "axios"
import store, { firsatlar, searchCimri, headerCimri, login } from "../store/index"
import { history, Events, Const } from "../map/UtilsMap"
import { User } from "../map/ModelMap"


axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.dir(config)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {

    if (response.data.success === true && response.data.type === "header") { store.dispatch(headerCimri(response.data.data)) }
    else if (response.data.success === true && response.data.type === "firsatlar") { store.dispatch(firsatlar(response.data.data)) }
    else if (response.data.success === true && response.data.type === "search" && response.data.data === false) { history.push("/notfound") }
    else if (response.data.success === true && response.data.type === "search" && response.data !== null) { store.dispatch(searchCimri(response.data.data, response.config.url)) }
    else if (response.data.success === true && response.data.type === "subcategory") { store.dispatch(searchCimri(response.data.data, response.config.url)) }
    else if (response.data.success === true && response.data.type === "register") { Events(Const.events.registerSuccess.type) }
    else if (response.data.success === true && response.data.type === "login") {
        const model = new User(response.data.response['_id'], response.data.response.userMail, response.data.response.userPassword)
        store.dispatch(login(model))
        Events(Const.events.loginSuccess.type)
    }

    /* response false */
    else if (response.data.success === false && response.data.type === "register") { Events(Const.events.allreadymail.type) }
    else if (response.data.success === false && response.data.type === "login") { Events(Const.events.loginUnsuccess.type) }

    console.dir(response)

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