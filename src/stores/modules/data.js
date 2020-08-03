
export default {
    state: {
        token: "",
        username: "",
        loggedUsername: "",
    },
    getters: {
    },
    mutations: {
        LOGOUT_USER(state) {
            state.loggedUsername = ""

            window.localStorage.clear()
        },
        AUTHORIZED_USER(state, {token, username}) {
            state.token = token
            state.loggedUsername = username

            window.localStorage.token = token;
            window.localStorage.username = username;
        },
    },
    actions: {
    }
};