import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: false,
        headers: {
            "Content-Type": "application/json",
        }
    });
}