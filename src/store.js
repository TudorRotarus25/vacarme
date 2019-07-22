import Vue from 'vue';
import Vuex from 'vuex';
import {
  MUTATION_SET_PROJECTS,
  MUTATION_SET_PROJECT_DETAILS,
  ACTION_POPULATE_PROJECTS,
  ACTION_POPULATE_PROJECT_DETAILS,
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
    [MUTATION_SET_PROJECT_DETAILS]: (state, { projectData }) => {
      state.projectData = projectData;
    },
  },
  actions: {
    [ACTION_POPULATE_PROJECTS]: ({ commit }) => {
      const projects = projectsData;
      commit(MUTATION_SET_PROJECTS, { projects });
    },
    [ACTION_POPULATE_PROJECT_DETAILS]: ({ commit }, slug) => {
      const projectData = projectsData.find(project => project.slug === slug);
      commit(MUTATION_SET_PROJECT_DETAILS, { projectData });
    },
  },
});
