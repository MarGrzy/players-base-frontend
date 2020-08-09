import api from "@/services/api";

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async getPlayers({commit}, {playerName, position, team, perPage, page, sortBy, direction}) {
            const config = {
                url: 'player',
                method: 'post',
                data: JSON.stringify({playerName, position, team}),
                params: {perPage, page, sortBy, direction}
            }
            try {
                let response = await api()
                    .request(config);
                let players = response.data.content
                commit('LOAD_PLAYERS', players)
            } catch (error) {
                return {error}
            }
        },
        async addPlayer({commit}, {id, playerName, position, team}) {
            const config = {
                url: 'player/new',
                method: 'post',
                data: JSON.stringify({id, playerName, position, team}),
            }
            try {
                await api()
                    .request(config);
            } catch (error) {
                return {error}
            }
        },
        async deletePlayer({commit}, {id}) {
            const config = {
                url: 'player/' + id,
                method: 'delete',
            }
            try {
                await api()
                    .request(config);
            } catch (error) {
                return {error}
            }
        }
    }
};