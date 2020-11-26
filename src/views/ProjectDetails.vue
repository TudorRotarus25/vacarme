<template>
  <div class="projectDetails">
    <ProjectDetails />
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  computed: {
    ...mapState({
      projectData: 'projectData',
    }),
  },
  created() {
    const { slug } = this.$route.params;
    this.$store.dispatch(ACTION_POPULATE_PROJECT_DETAILS, slug);
  },
  beforeDestroy() {
    this.$store.commit(MUTATION_SET_DARK_MODE, { isDarkMode: false });
  },
  metaInfo() {
    const {
      metaTitle, metaDescription, name, domain,
    } = this.projectData;

    const defaultTitle = `Studio Vacarme - ${name}`;
    const defaultDescription = `${name} - ${domain}`;

    return {
      title: metaTitle || defaultTitle,
      meta: [
        {
          name: 'description',
          content: metaDescription || defaultDescription,
        },
        {
          name: 'og:url',
          content: `https://studiovacarme.com/project/${encodeURI(name)}`,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://studiovacarme.com/project/${encodeURI(name)}`,
        },
      ],
    };
  },
};
</script>
