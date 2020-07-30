<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
        app
        color="yellow darken-4"
        dark
    >
      <v-toolbar-title>Vuetify From Validator</v-toolbar-title>
      <v-spacer/>
      <v-switch
          v-model="$vuetify.theme.dark"
          hide-details
          inset
          color="grey lighten-1"
          label="Dark/Light Theme"
      ></v-switch>
    </v-app-bar>
    <v-content>
      <v-tabs v-model="tab" centered>
        <v-tab>Login</v-tab>
        <v-tab>Signup</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <Login/>
        </v-tab-item>
        <v-tab-item>
          <Registration/>
        </v-tab-item>
      </v-tabs-items>
    </v-content>
  </v-app>
</template>

<script>

import Login from './components/auth/Login.vue'
import Registration from "@/components/auth/Registration";

export default {
  name: 'app',
  components: {
    Registration,
    Login
  },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
  data: () => ({
    tab: null
  }),
};
</script>