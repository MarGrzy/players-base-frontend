import Vue from "vue";
import Router from "vue-router";

import AddPlayer from "@/components/content/actionWindows/AddPlayer";
import EditPlayer from "@/components/content/actionWindows/EditPlayer";
import PlayersTable from "@/components/content/PlayersTable";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            component: PlayersTable,
            children: [
                {
                    path: '/player/new',
                    name: "add-player",
                    component: AddPlayer

                },
                {
                    path: '/player/edit',
                    name: 'edit-player',
                    component: EditPlayer,
                    params: true
                }
            ]
        }
    ]
})

export default router;