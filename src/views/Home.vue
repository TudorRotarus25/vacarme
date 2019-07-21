<template>
  <div class="home">
    <Projects />
  </div>
</template>

<script>
import Projects from '@/components/Projects';
import { ACTION_POPULATE_PROJECTS } from '@/constants/storeConstants';

export default {
  name: 'home',
  components: {
    Projects,
  },
  created() {
    this.$store.dispatch(ACTION_POPULATE_PROJECTS);
  },
};
</script>
