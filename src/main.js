/* eslint-disable no-undef */
import Vue from 'vue';
import checkView from 'vue-check-view';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

axios.defaults.baseURL = 'https://api.rockarus.co.uk';

Vue.config.productionTip = false;

Vue.use(checkView);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

router.afterEach((to) => {
  gtag('config', window.GA_TRACKING_ID, {
    page_path: to.fullPath,
    app_name: 'Studio Vacarme',
    send_page_view: true,
  });
});
