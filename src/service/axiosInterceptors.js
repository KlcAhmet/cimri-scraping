import axios from "axios"

axios.interceptors.response.use(function (response) {
    console.log(response);
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