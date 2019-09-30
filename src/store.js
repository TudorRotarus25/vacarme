import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {
  MUTATION_SET_PROJECTS,
  MUTATION_SET_PROJECT_DETAILS,
  MUTATION_SET_DARK_MODE,
  MUTATION_SET_IS_LOADING,
  MUTATION_SET_LOADING_COLOR,
  ACTION_POPULATE_PROJECTS,
  ACTION_POPULATE_PROJECT_DETAILS,
  ACTION_SET_LOADING_COLOR,
} from '@/constants/storeConstants';

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
    [MUTATION_SET_IS_LOADING]: (state, { isLoading }) => {
      state.isLoading = isLoading;
    },
    [MUTATION_SET_LOADING_COLOR]: (state, { color }) => {
      state.loadingColor = color;
    },
  },
  actions: {
    [ACTION_POPULATE_PROJECTS]: async ({ commit }) => {
      try {
        commit(MUTATION_SET_IS_LOADING, { isLoading: true });
        const response = await axios.get('/projects');
        commit(MUTATION_SET_IS_LOADING, { isLoading: false });
        const projects = response.data;
        commit(MUTATION_SET_PROJECTS, { projects });
      } catch (e) {
        console.error(e);
        commit(MUTATION_SET_IS_LOADING, { isLoading: false });
      }
    },
    [ACTION_POPULATE_PROJECT_DETAILS]: async ({ commit }, slug) => {
      try {
        commit(MUTATION_SET_IS_LOADING, { isLoading: true });
        const response = await axios.get(`projects/${slug}`);
        commit(MUTATION_SET_IS_LOADING, { isLoading: false });
        const projectData = response.data;

        if (projectData.darkMode) {
          commit(MUTATION_SET_DARK_MODE, { isDarkMode: true });
        }
        commit(MUTATION_SET_PROJECT_DETAILS, { projectData });
      } catch (e) {
        console.error(e);
        commit(MUTATION_SET_IS_LOADING, { isLoading: false });
      }
    },
    [ACTION_SET_LOADING_COLOR]: ({ commit }, color) => {
      commit(MUTATION_SET_LOADING_COLOR, { color });
    },
  },
});

export default store;
