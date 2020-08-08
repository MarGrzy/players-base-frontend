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

        findBy: [
            "Name",
            "Team"
        ],

        newPlayer: {
            id: 1,
            playerName: "",
            position: "",
            team: {
                id: 1,
                teamName: ""
            }
        },

        positions: [
            "PG (Point Guard)",
            "PG / SG",
            "SG (Shooting Guard)",
            "SG / SF",
            "SF (Small Forward)",
            "SF / PF",
            "PF (Power Forward)",
            "PF / C",
            "C (Center)"
        ],

        teams: [
            {
                id: Number(1),
                teamName: "Los Angeles Lakers",
                abbr: "LAL"
            },
            {
                id: Number(2),
                teamName: "Boston Celtics",
                abbr: "BOS"
            },
        ]
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
        },
    },
    actions: {}
};