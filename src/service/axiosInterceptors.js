import axios from "axios"
import store, { firsatlar, searchCimri, headerCimri, login, UserInfo } from "../store/index"
import { history, Events, Const } from "../map/UtilsMap"
import { postGetUserInfo } from "../map/ServiceMap"
import { UserModel, UserInfoModel } from "../map/ModelMap"


/* axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.dir(config)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
}); */


axios.interceptors.response.use(function (response) {

    if (response.data.success === true && response.data.type === "header") { store.dispatch(headerCimri(response.data.data)) }
    else if (response.data.success === true && response.data.type === "firsatlar") { store.dispatch(firsatlar(response.data.data)) }
    else if (response.data.success === true && response.data.type === "search" && response.data.data === false) { history.push("/notfound") }
    else if (response.data.success === true && response.data.type === "search" && response.data !== null) { store.dispatch(searchCimri(response.data.data, response.config.url)) }
    else if (response.data.success === true && response.data.type === "subcategory") { store.dispatch(searchCimri(response.data.data, response.config.url)) }
    else if (response.data.success === true && response.data.type === "register") { Events(Const.events.registerSuccess.type) }
    else if (response.data.success === true && response.data.type === "login") {
        UserModel.User = {
            id: response.data.response['_id'],
            userMail: response.data.response.userMail,
            userPassword: response.data.response.userPassword
        }
        store.dispatch(login(UserModel.User))
        Events(Const.events.loginSuccess.type)
    }
    else if (response.data.success === true && response.data.type === "infoadd") { postGetUserInfo(store.getState().User.id) }
    else if (response.data.success === true && response.data.type === "userinfo") {
        UserInfoModel.UserInfo = {
            userID: response.data.response['_id'],
            name: response.data.response.name,
            surname: response.data.response.surname,
            gender: response.data.response.gender,
            birth: response.data.response.birth,
            city: response.data.response.city,
            address: response.data.response.address
        }
        store.dispatch(UserInfo(UserInfoModel.UserInfo))
    }
    else if (response.data.success === true && response.data.type === "productadd") { console.log("productAdd true"); }
    else if (response.data.success === true && response.data.type === "productinfo") { console.log("productinfo true"); }

    /* response false */
    else if (response.data.success === false && response.data.type === "register") { Events(Const.events.allreadymail.type) }
    else if (response.data.success === false && response.data.type === "login") { Events(Const.events.loginUnsuccess.type) }
    else if (response.data.success === false && response.data.type === "userinfo") { Events(Const.events.loginFirst.type) }
    else if (response.data.success === false && response.data.type === "productadd") { console.log("productAdd false"); }
    else if (response.data.success === false && response.data.type === "productinfo") { console.log("productinfo false"); }

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