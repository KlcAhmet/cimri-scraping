import axios from 'axios'
import './axiosInterceptors'


const addressCimri = "https://www.cimri.com"

// eslint-disable-next-line
export default {
    postCimri() {
        return axios.get(addressCimri)
    }
}