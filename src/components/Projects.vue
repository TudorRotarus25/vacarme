<template>
  <div class="projects">
    <Project
      v-for="project in projects"
      :key="project.name"
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
  @import "../styling/variables";
  @import "../styling/mixins";

  .projects {
    display: none;
    flex-wrap: wrap;

    @include media-breakpoint-up(lg) {
      display: flex;
    }
  }
</style>
