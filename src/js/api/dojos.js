import request from '../utils/api';

export const fetchDojos = () => {
    return request({
        method: 'get',
        url: '/dojos'
    });
}