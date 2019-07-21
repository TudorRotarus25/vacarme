<template>
  <div class="projects">
    <Project
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Project from './Project.vue';

export default {
  name: 'Projects',
  components: {
    Project,
  },
  computed: mapState({
    projects: 'projects',
  }),
};
</script>

<style lang="scss" scoped>
  .projects {
    display: flex;
    flex-wrap: wrap;
  }
</style>
