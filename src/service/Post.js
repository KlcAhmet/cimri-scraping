import axios from 'axios'
import './axiosInterceptors'


const addressCimri = "https://www.cimri.com/"

// eslint-disable-next-line
export default {
    // Cimri
    postCimriFirsatlar() {
        return axios.get(`${addressCimri}firsatlar`)
    },
    postCimriSearcher(link) {
        return axios.get(`${addressCimri}${link}`)
    },
    postCimriSearcherSubCategory(link) {
        return axios.get(link)
    },
    postCimriHeader() {
        return axios.get(addressCimri)
    },
}