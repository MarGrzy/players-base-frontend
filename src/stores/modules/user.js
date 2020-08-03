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
                let username = response.data.valueOf().username;
                let token = response.data.valueOf().token;
                return commit('AUTHORIZED_USER', {token, username});
            } catch (error) {
                return { error: "The username/password combination is incorrect. Try again." }
            }
        },
        logout({commit}) {
            commit('LOGOUT_USER')
        },
        async register({commit}, {username, password}) {
            const config = {
                url: 'user/register',
                method: 'post',
                data: JSON.stringify({username, password}),
            };
            try {
                await api()
                    .request(config);
            } catch {
                return {error: "This username is already used. Try with another one."}
            }
        }
    }
};