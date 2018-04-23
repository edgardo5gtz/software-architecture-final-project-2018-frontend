import axios from 'axios'

// For docker toolbox
const VM_IP = '192.168.99.100'
const BASE_URL_VM = `http://${VM_IP}:8081/habits`;

export {postUserHabits, getUserHabits, deleteUserHabits, putUserHabits};

function postUserHabits(habit) {
    return axios.post(
        BASE_URL_VM, habit
    ).then(
        response => console.log(response)
    ).catch(error => console.log(error));
}

function getUserHabits() {
    return axios.get(
        BASE_URL_VM
    ).then(
        response => console.log(response)
    ).catch(error => console.log(error));
}

function putUserHabits(habit){
    return axios.put(
        BASE_URL_VM, habit
    ).then(
        response => console.log(response)
    ).catch(error => console.log(error));
}

function deleteUserHabits(id){
    return axios.delete(
        BASE_URL_VM + '/' + id
    ).then(
        response => console.log(response)
    ).catch(
        error => console.log(error)
    );
}


