<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
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
      <v-text-field v-if="displayLoggedUser"
      single-line
      solo
      v-bind:label="displayLoggedUser"
      >
      </v-text-field>
      <v-tabs v-else
              v-model="tab" centered optional
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
    </v-content>
  </v-app>
</template>

<script>

import Login from './components/auth/Login.vue'
import Registration from "@/components/auth/Registration";
import {mapState} from 'vuex';

export default {
  name: 'app',
  components: {
    Registration,
    Login
  },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
    displayLoggedUser: function () {
      let loggedName = this.$store.state.data.currentUser.name
      return "Welcome " + loggedName
    }
    // ...mapState({
    //   currentUser: state => state.data.currentUser
  // })
  },
  data: () => ({
    tab: null,
    items: [
      {tab: 'Log in', item: 'Login'},
      {tab: 'Sign up', item: 'Registration'}
    ],
  }),
};
</script>