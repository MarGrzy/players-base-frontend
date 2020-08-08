<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <Header/>
    <PlayersTable/>
    <router-view></router-view>
  </v-app>
</template>

<script>

import Header from "@/components/homepage/Header";
import PlayersTable from "@/components/content/PlayersTable";

export default {
  name: 'app',
  components: {
    PlayersTable,
    Header
  },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
  }
};
</script>