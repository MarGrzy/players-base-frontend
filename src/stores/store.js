import Vue from "vue";
import Vuex from "vuex";

import User from "./modules/user";
import Data from "./modules/data";
import Players from "./modules/players";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        data: Data,
        user: User,
        players: Players,
    }
});