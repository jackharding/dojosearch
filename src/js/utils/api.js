import axios from 'axios';

const apiUrl = 'http://localhost:25000/api';

export default (params) => {
    params.url = apiUrl + params.url;

    return axios(params)
        .then(({ data }) => data)
        .catch(e => console.log('NOOOOO', e));
}