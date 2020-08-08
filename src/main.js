import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './stores/store';
import router from "@/services/router";

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

