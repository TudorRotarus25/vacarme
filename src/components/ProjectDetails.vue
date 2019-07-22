<template>
  <div>
    <h1>{{ projectData.name }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProjectDetails',
  computed: mapState({
    projectData: 'projectData',
  }),
};
</script>
