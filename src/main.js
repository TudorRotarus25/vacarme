import Vue from 'vue';
import checkView from 'vue-check-view';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(checkView);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
