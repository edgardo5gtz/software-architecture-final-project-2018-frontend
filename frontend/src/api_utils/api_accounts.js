import axios from 'axios'

// For normal docker 
const BASE_URL = 'http://192.168.99.100:8081/accounts';

// For docker toolbox
//const VM_IP = '192.168.99.100'
//const BASE_URL = `http://${VM_IP}:8081/accounts`;

export {registerAccount, findAccount};

function registerAccount(email){
    return axios.post(
            BASE_URL + '/register',
           email 
        ).then(
            response => { return response }
        ).catch(
            error => console.log(error)
        );
}

function findAccount(email){
    return axios.post(
        BASE_URL + '/login',
        {email}
    ).then(
        response => {return response}
    ).catch(error => console.log(error));
}
    

