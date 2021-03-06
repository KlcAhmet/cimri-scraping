import axios from "axios"
import store, { firsatlar, searchCimri, headerCimri, login, UserInfo, UserProducts } from "../store/index"
import { history, Events, Const } from "../map/UtilsMap"
import { postGetUserInfo, postGetUserProduct } from "../map/ServiceMap"
import { UserModel, UserInfoModel, UserProductsModel } from "../map/ModelMap"

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
        history.push('/')
    }
    else if (response.data.success === true && response.data.type === "infoadd") { postGetUserInfo(store.getState().User.id) }
    else if (response.data.success === true && response.data.type === "userinfo") {
        UserInfoModel.UserInfo = {
            id: response.data.response['_id'],
            userID: response.data.response.userID,
            name: response.data.response.name,
            surname: response.data.response.surname,
            gender: response.data.response.gender,
            birth: response.data.response.birth,
            city: response.data.response.city,
            address: response.data.response.address
        }
        store.dispatch(UserInfo(UserInfoModel.UserInfo))
        Events(Const.events.userInfo.type)
    }
    else if (response.data.success === true && response.data.type === "productadd") { postGetUserProduct(store.getState().User.id) }
    else if (response.data.success === true && response.data.type === "productinfo") {
        UserProductsModel.UserProducts = {
            id: response.data.response['_id'],
            userID: response.data.response.userID,
            favorite: response.data.response.favorite,
            priceAlarm: response.data.response.priceAlarm
        }
        store.dispatch(UserProducts(UserProductsModel.UserProducts))
        Events(Const.events.productInfo.type)
    }
    else if (response.data.success === true && response.data.type === "changeuserinfo") { Events(Const.events.changeUserInfo.type) }
    else if (response.data.success === true && response.data.type === "changepassword") {
        Events(Const.events.changePassword.type)
    }
    else if (response.data.success === true && response.data.type === "changeproducts") {
        Events(Const.events.changeproducts.type)
    }
    else if (response.data.success === true && response.data.type === "productAlarm" && response.data.response !== false) {
        const productTitle = response.data.response.productTitle
        Events(Const.events.productAlarm.type, productTitle)
    }

    /* response false */
    else if (response.data.success === false && response.data.type === "register") { Events(Const.events.allreadymail.type) }
    else if (response.data.success === false && response.data.type === "login") { Events(Const.events.loginUnsuccess.type) }
    else if (response.data.success === false && response.data.type === "userinfo") { Events(Const.events.loginFirst.type) }
    else if (response.data.success === false && response.data.type === "productadd") { Events(Const.events.systemError.type) }
    else if (response.data.success === false && response.data.type === "productinfo") { /* Events(Const.events.systemError.type) */ }
    else if (response.data.success === false && response.data.type === "changeuserinfo") { Events(Const.events.systemError.type) }
    else if (response.data.success === false && response.data.type === "changepassword") { Events(Const.events.systemError.type) }
    else if (response.data.success === true && response.data.type === "productAlarm" && response.data.response === false) { }

    return response;
}, function (err) {
    try {
        Events(Const.events.systemError.type)
        return Promise.reject(err);
    } catch (error) {
        if (!err.status) {
            Events(Const.events.systemError.type)
        }
        return Promise.reject(err)
    }
});