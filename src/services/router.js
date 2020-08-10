import Vue from "vue";
import Router from "vue-router";

import AddPlayer from "@/components/content/actionWindows/AddPlayer";
import EditPlayer from "@/components/content/actionWindows/EditPlayer";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/player/new',
            name: "add-player",
            components: {
                addition: AddPlayer
            }
        },
        {
            path: '/player/edit',
            name: 'edit-player',
            components: {
                edition: EditPlayer
            },
            params: true
        }
    ]
})

export default router;