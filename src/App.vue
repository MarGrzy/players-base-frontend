<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <Header/>
    <router-view></router-view>
  </v-app>
</template>

<script>

import Header from "@/components/homepage/Header";

export default {
  name: 'app',
  components: {
    Header
  },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
  }
};
</script>