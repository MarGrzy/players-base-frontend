import Vue from "vue";
import Router from "vue-router";

import AddPlayer from "@/components/content/AddPlayer";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/player/new',
            name: "add-player",
            component: AddPlayer
        }
    ]
})

export default router;