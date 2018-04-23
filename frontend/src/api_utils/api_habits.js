import axios from 'axios'

const BASE_URL = 'http://192.168.99.100:8082/habits'
// For docker toolbox
//const VM_IP = '192.168.99.100'
//const BASE_URL_VM = `http://${VM_IP}:8082/habits`;

export {postUserHabits, getUserHabits, deleteUserHabits, putUserHabits};

function postUserHabits(habit) {
    return axios.post(
        BASE_URL, habit
    ).then(
        response => console.log(response)
    ).catch(error => console.log(error));
}

function getUserHabits() {
    return axios.get(
        BASE_URL,
    ).then(
        response => console.log(response)
    ).catch(error => console.log(error));
}

function putUserHabits(habit){
    return axios.put(
        BASE_URL, habit
    ).then(
        response => console.log(response)
    ).catch(error => console.log(error));
}

function deleteUserHabits(id){
    return axios.delete(
        BASE_URL + '/' + id
    ).then(
        response => console.log(response)
    ).catch(
        error => console.log(error)
    );
}


