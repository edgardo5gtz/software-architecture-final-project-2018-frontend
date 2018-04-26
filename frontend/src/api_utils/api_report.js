import axios from 'axios'

const BASE_URL = 'http://192.168.99.100:8084/reports'

export { getReport }

function getReport() {
    return axios.get(
        BASE_URL
    ).then(
        response => { console.log(response);return response }
    ).catch(error => console.log(error));
}
