import Vue from 'vue';
import VueMeta from 'vue-meta';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(VueMeta);
Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/category/:category',
      name: 'category',
      component: () => import(/* webpackChunkName: "about" */ './views/Category.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/project/:slug',
      name: 'projectDetails',
      component: () => import(/* webpackChunkName: "project" */ './views/ProjectDetails.vue'),
    },
  ],
});
