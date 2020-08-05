import api from "@/services/api";

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
                if (response.status === 200) {
                    let username = response.data.valueOf().username;
                    let token = response.data.valueOf().token;
                    commit('AUTHORIZED_USER', {token, username});
                    return username;
                }
            } catch {
                return {error: "The username/password combination is incorrect. Try again."}
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
                let response = await api()
                    .request(config);
                if (response.status === 201) {
                    return {success: "You account has been created! You may now log in."}
                } else if (response.status === 226) {
                    return {error: "This username is already used. Please try with another one."}
                }
            } catch {
                return {error: "There was an error. Please try again."}
            }
        },
        async loadCurrentUser({commit}) {
            let username = window.localStorage.username;
            let token = window.localStorage.token
            commit('AUTHORIZED_USER', {token, username});
        }
    }
};