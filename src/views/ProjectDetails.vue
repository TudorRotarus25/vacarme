<template>
  <div class="projectDetails">
    <ProjectDetails />
  </div>
</template>

<script>
import ProjectDetails from '@/components/ProjectDetails.vue';
import { ACTION_POPULATE_PROJECT_DETAILS } from '@/constants/storeConstants';

export default {
  name: 'projectDetails',
  components: {
    ProjectDetails,
  },
  created() {
    const { slug } = this.$route.params;
    this.$store.dispatch(ACTION_POPULATE_PROJECT_DETAILS, slug);
  },
};
</script>
