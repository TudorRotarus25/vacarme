import Vue from 'vue';
import checkView from 'vue-check-view';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

axios.defaults.baseURL = 'http://studio-vacarme-api-dev.eu-west-1.elasticbeanstalk.com';

Vue.config.productionTip = false;

Vue.use(checkView);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
