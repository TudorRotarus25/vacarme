import Vue from 'vue';
import Vuex from 'vuex';
import {
  MUTATION_SET_PROJECTS,
  ACTION_POPULATE_PROJECTS,
} from '@/constants/storeConstants';
import projectsData from './data/projects';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    projects: [],
    projectData: {},
  },
  mutations: {
    [MUTATION_SET_PROJECTS]: (state, { projects }) => {
      state.projects = projects;
    },
  },
  actions: {
    [ACTION_POPULATE_PROJECTS]: ({ commit }) => {
      const projects = projectsData;
      commit(MUTATION_SET_PROJECTS, { projects });
    },
  },
});
