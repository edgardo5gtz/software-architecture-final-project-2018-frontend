import axios from 'axios'

// For normal docker 
const BASE_URL = 'http://localhost:8081/accounts';

// For docker toolbox
const VM_IP = '192.168.99.100'
const BASE_URL_VM = `http://${VM_IP}:8081/accounts`;

function registerAccount(account){
    return axios.
        post(BASE_URL_VM + '/register',account).
        then(response => console.log(response.data)).
        catch(error => console.log(error));
}

function getUserAccount(account){
    return axios.
        get(BASE_URL_VM).
        then(response => console.log(response.data)).
        catch(error => console.log(error));
}
    

