import axios from 'axios';

const apiUrl = 'http://localhost:25000/api';

export default (params) => {
    params.url = apiUrl + params.url;

    console.log('pz', params)
    return axios(params)
        .then(d => {
            console.log('brhu', d); return d
        })
        .catch(e => console.log('NOOOOO', e));
}