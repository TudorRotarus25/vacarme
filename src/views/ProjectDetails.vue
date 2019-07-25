<template>
  <div class="projectDetails">
    <ProjectDetails />
  </div>
</template>

<script>
import ProjectDetails from '@/components/ProjectDetails.vue';
import {
  ACTION_POPULATE_PROJECT_DETAILS,
  MUTATION_SET_DARK_MODE,
} from '@/constants/storeConstants';

export default {
  name: 'projectDetails',
  components: {
    ProjectDetails,
  },
  created() {
    const { slug } = this.$route.params;
    this.$store.dispatch(ACTION_POPULATE_PROJECT_DETAILS, slug);
  },
  beforeDestroy() {
    this.$store.commit(MUTATION_SET_DARK_MODE, { isDarkMode: false });
  },
};
</script>
