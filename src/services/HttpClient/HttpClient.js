import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.common['Authorization'] = 555

toast.configure();
export function  get(url, config = {}) {
    const notify = (e) => {
        toast(e)
    }
    return axios.get(url, config)
        .then(response => {
            console.log(response.data);
            notify('successfully sent get request');
        })
        .catch(function (error) {
            if(error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                notify('Response Error');
            } else if(error.request) {
                console.log(error.request);
                notify('Request Error');
            } else {
                console.log('Error', error.message);
                notify('Error');
            }
        })
}

export function post(url, data, config = {}) {
    const notify = (e) => {
        toast(e)
    }
    return axios.post(url, data, config)
        .then(response => {
            console.log(response.data);
            notify('successfully sent post request');
        })
        .catch(function (error) {
        if(error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            notify('Response Error');
        } else if(error.request) {
            console.log(error.request);
            notify('Request Error');
        } else {
            console.log('Error', error.message);
            notify('Error');
        }
        })
}


export function Delete(url, config={}) {
    const notify = (e) => {
        toast(e)
    }
    return axios.delete(url, config)
        .then(response => {
            if(response.data != null) {
                notify('Request Error');
            }
        } )
        .catch(error => error.message);
}

