import axios from 'axios'
import './axiosInterceptors'


const addressCimri = "https://www.cimri.com/"

// eslint-disable-next-line
export default {
    postCimriFirsatlar() {
        return axios.get(`${addressCimri}firsatlar`)
    },
    postCimriSearcher(link) {
        return axios.get(`${addressCimri}${link}`)
    }
}