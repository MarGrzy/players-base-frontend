
export default {
    state: {
        loggedIn: false,
        token: "",
        username: "",
        currentUser: {name: "test"},
    },
    getters: {
    },
    mutations: {
        LOGOUT_USER(state) {
            state.loggedIn = false
            state.token = ""
        },
        AUTHORIZED_USER(state, token, username) {
            state.token = token
            state.username = username
            state.loggedIn = true
        },
        // SET_CURRENT_USER(state, username) {
        //     state.currentUser = username;
        //     window.localStorage.currentUser = JSON.stringify(username);
        // },
    },
    actions: {
        // async loadCurrent({commit}) {
        //     let user = JSON.parse(window.localStorage.currentUser);
        //     commit('SET_CURRENT_USER', user);
        // },
    }
};