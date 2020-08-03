import Vue from "vue";
import Vuex from "vuex";

import User from "./modules/user";
import Data from "./modules/data";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: User,
        data: Data,
    }
});