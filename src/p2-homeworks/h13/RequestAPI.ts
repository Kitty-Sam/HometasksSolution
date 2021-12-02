import axios from 'axios';

const instance = axios.create({
    baseURL:'https://neko-cafe-back.herokuapp.com',
});
export type bodyType = {
    success: boolean
}


// api
export const requestAPI = {
    postRequest(body: bodyType) {
        return instance.post<any>('/auth/test', body);
    }
}
