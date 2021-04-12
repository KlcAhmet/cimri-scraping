import axios from "axios"


axios.interceptors.response.use(function (response) {

    return response;
}, function (err) {
    try {

        return Promise.reject(err);
    } catch (error) {
        if (!err.status) {
            console.log(error);
        }
        return Promise.reject(err)
    }
});