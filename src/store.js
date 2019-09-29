import Vue from 'vue';
import Vuex from 'vuex';
import {
  MUTATION_SET_PROJECTS,
  MUTATION_SET_PROJECT_DETAILS,
  MUTATION_SET_DARK_MODE,
  MUTATION_SET_LOADING_COLOR,
  ACTION_POPULATE_PROJECTS,
  ACTION_POPULATE_PROJECT_DETAILS,
  ACTION_SET_LOADING_COLOR,
} from '@/constants/storeConstants';
import projectsData from './data/projects';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
    loadingColor: null,
    isDarkMode: false,
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
    [MUTATION_SET_DARK_MODE]: (state, { isDarkMode }) => {
      state.isDarkMode = isDarkMode;
    },
    [MUTATION_SET_LOADING_COLOR]: (state, { color }) => {
      state.loadingColor = color;
    },
  },
  actions: {
    [ACTION_POPULATE_PROJECTS]: ({ commit }) => {
      const projects = projectsData;
      commit(MUTATION_SET_PROJECTS, { projects });
    },
    [ACTION_POPULATE_PROJECT_DETAILS]: ({ commit }, slug) => {
      const projectData = projectsData.find(project => project.slug === slug);

      if (projectData.darkMode) {
        commit(MUTATION_SET_DARK_MODE, { isDarkMode: true });
      }
      commit(MUTATION_SET_PROJECT_DETAILS, { projectData });
    },
    [ACTION_SET_LOADING_COLOR]: ({ commit }, color) => {
      commit(MUTATION_SET_LOADING_COLOR, { color });
    },
  },
});

export default store;
