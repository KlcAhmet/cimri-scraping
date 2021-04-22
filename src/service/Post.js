import axios from 'axios'
import './axiosInterceptors'


const addressCimri = "https://www.cimri.com/"
const adressGoogle = "https://www.google.com/"

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
    // Google
    postGoogleSearcher(link) {
        return axios.get(`${adressGoogle}${link}`)
    }
}