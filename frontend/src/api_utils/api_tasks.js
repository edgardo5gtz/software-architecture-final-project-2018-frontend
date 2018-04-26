import axios from 'axios'

const BASE_URL = 'http://192.168.99.100:8083/tasks'
// For docker toolbox
//const VM_IP = '192.168.99.100'
//const BASE_URL_VM = `http://${VM_IP}:8082/habits`;

export { postUserTasks, getUserTasks, deleteUserTasks, putUserTasks };

function postUserTasks(task) {
    console.log(task)
    return axios.post(
        BASE_URL, task
    ).then(
        response => { console.log(response);return response }
    ).catch(error => console.log(error));
}

function getUserTasks(user) {
    return axios.get(
        BASE_URL,
        user
    ).then(
        response => { return response }
    ).catch(error => console.log(error));
}

function putUserTasks(id, habit) {
    return axios.put(
        BASE_URL + '/' + id,
        habit
    ).then(
        response => { return response }
    ).catch(error => console.log(error));
}

function deleteUserTasks(id) {
    return axios.delete(
        BASE_URL + '/' + id
    ).then(
        response => { console.log(response); return response }
    ).catch(
        error => console.log(error)
    );
}
