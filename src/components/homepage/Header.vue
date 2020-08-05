<template>
  <div>
    <v-app-bar
        app
        color="yellow darken-4"
        dark
    >
      <v-app-bar-nav-icon>
        <v-icon large>mdi-basketball</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title> NBA Players Application</v-toolbar-title>
      <v-spacer/>
      <v-switch
          v-model="$vuetify.theme.dark"
          hide-details
          inset
          color="grey lighten-1"
          label="Light/Dark Theme"
      ></v-switch>
    </v-app-bar>
    <v-content>
      <div v-if="loggedUsername">
        <v-toolbar class="elevation-0"
                   dense>
          <v-icon>mdi-account</v-icon>
          <v-toolbar-title class="text-h6 grey--text text--darken-2">Welcome {{ loggedUsername }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              @click="logout"
          >Log Out
          </v-btn>
        </v-toolbar>
      </div>
      <div v-else>
        <v-tabs v-model="tab" centered optional
        >
          <v-tab
              v-for="item in items"
              :key="item.tab"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
              v-for="item in items"
              :key="item.tab"
          >
            <component v-bind:is="item.item"></component>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-content>
  </div>
</template>

<script>
import Registration from "@/components/auth/Registration";
import Login from "@/components/auth/Login";
import {mapState} from "vuex";

export default {
  name: "Header",
  components: {
    Registration,
    Login
  },
  created() {
    this.$store.dispatch("loadCurrentUser")
  },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
    ...mapState({
      loggedUsername: state => state.data.loggedUsername
    })
  },
  data: () => ({
    tab: null,
    items: [
      {tab: 'Log in', item: 'Login'},
      {tab: 'Sign up', item: 'Registration'}
    ],
  }),
  methods: {
    logout() {
      this.$store.dispatch("logout")
    }
  },
}
</script>

<style scoped>

</style>