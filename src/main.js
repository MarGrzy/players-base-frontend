import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './stores/store';

import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

