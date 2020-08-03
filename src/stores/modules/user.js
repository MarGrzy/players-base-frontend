import api from "@/services/api";
import axios from "axios"

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async login({commit}, {username, password}) {
            const config = {
                url: 'user/login',
                method: 'post',
                data: JSON.stringify({username, password}),
            };
            try {
                let response = await api()
                    .request(config);
                let username = JSON.parse(config.data.valueOf()).username;
                let token = response.data.valueOf().token;
                localStorage.setItem('token', token)
                localStorage.setItem('user', username)
                commit('AUTHORIZED_USER', token, username);
                return username;
            } catch {
                return {error: "The username or the password are incorrect."}
            }
        },

        // logout({commit}) {
        //     commit('LOGOUT_USER')
        // },
        // register: ({commit}, payload) => {
        //     return new Promise((resolve, reject) => {
        //         api()
        //             .post(`register`, {})
        //             .then(({data, status}) => {
        //                 if (status === 201) {
        //                     resolve(true);
        //                 }
        //             })
        //             .catch(error => {
        //                 reject(error);
        //             });
        //     });
        // }
    }
};