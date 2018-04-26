import axios from 'axios'

const BASE_URL = 'http://192.168.99.100:8082/habits'
// For docker toolbox
//const VM_IP = '192.168.99.100'
//const BASE_URL_VM = `http://${VM_IP}:8082/habits`;

export { postUserHabits, getUserHabits, deleteUserHabits, putUserHabits, doUserHabits};

function postUserHabits(habit) {
    return axios.post(
        BASE_URL, habit
    ).then(
        response => { return response }
    ).catch(error => console.log(error));
}

function getUserHabits(user) {
    return axios.get(
        BASE_URL,
        {account: user}
    ).then(
        response => { return response }
    ).catch(error => console.log(error));
}

function putUserHabits(id, habit){
    return axios.put(
        BASE_URL + '/' + id, 
        habit
    ).then(
        response => { return response }
    ).catch(error => console.log(error));
}

function doUserHabits(id, kind) {
    return axios.post(
        BASE_URL + '/' + id + '/do',
        kind
    ).then(
        response => { console.log(response); return response }
    ).catch(error => console.log(error));
}

function deleteUserHabits(id){
    return axios.delete(
        BASE_URL + '/' + id
    ).then(
        response => { console.log(response);return response }
    ).catch(
        error => console.log(error)
    );
}


