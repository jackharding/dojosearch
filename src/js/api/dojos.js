import request from '../utils/api';

export const fetchDojos = (params = null) => {
    return request({
        method: 'get',
        url: '/dojos',
        params
    });
}