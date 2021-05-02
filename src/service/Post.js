import axios from 'axios'
import './axiosInterceptors'
import { UserInfoModel } from '../map/ModelMap'

const uri = process.env.REACT_APP_SERVER_URI
const port = process.env.REACT_APP_PORT || 5000

function postHeader() {
    return axios.get(`${uri}${port}cimri/`)
}

function postFirsatlar() {
    return axios.get(`${uri}${port}cimri/firsatlar`)
}

function postSearch(search) {
    const data = { searchLink: search }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return axios.post(`${uri}${port}cimri/search`, data, config)
}

function postSearchSubCategory(search) {
    const data = { searchLink: search }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    return axios.post(`${uri}${port}cimri/searchsub`, data, config)
}

function postRegister(mail, password) {
    const data = {
        userMail: mail,
        userPassword: password
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    return axios.post(`${uri}${port}users/signup`, data, config)
}

function postLogin(mail, password) {
    const data = {
        userMail: mail,
        userPassword: password
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    return axios.post(`${uri}${port}users/signin`, data, config)
}

function postGetUserInfo(id) {
    const data = {
        userID: id,
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    return axios.post(`${uri}${port}usersinfo/getuserinfo`, data, config)
}

function postAddUserInfo(id) {
    const body = UserInfoModel.UserInfo = {
        userID: id,
        name: "null",
        surname: "null",
        gender: "None",
        birth: new Date().toISOString().slice(0, 10),
        city: "null",
        address: "null",
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    return axios.post(`${uri}${port}usersinfo/add`, body, config)
}

export { postHeader, postFirsatlar, postSearch, postSearchSubCategory, postRegister, postLogin, postGetUserInfo, postAddUserInfo }