export default {
    state: {
        token: "",
        username: "",
        loggedUsername: "",

        players: [],
        player: {
            playerName: "",
            position: "",
            team: {
                teamName: ""
            }
        },
        sortParams: {
            perPage: 5,
            page: 0,
            sortBy: "teamName",
            direction: "asc"
        },
    },
    getters: {},
    mutations: {
        //AUTH
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
        //PLAYERS
        LOAD_PLAYERS(state, players) {
            state.players = players
        }
    },
    actions: {}
};