<template>
  <div class="projects">
    <Project
      v-for="project in projects"
      :key="project.name"
      :project="project"
      :always-active="category !== null"
    />
  </div>
</template>

<script>
import Project from './Project.vue';

export default {
  name: 'Projects',
  components: {
    Project,
  },
  props: {
    category: {
      type: String,
      default: null,
    },
  },
  computed: {
    projects() {
      if (!this.category) {
        return this.$store.state.projects;
      }

      return this.$store.state.projects
        .filter((project) => project.categories.includes(this.category));
    },
  },
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
