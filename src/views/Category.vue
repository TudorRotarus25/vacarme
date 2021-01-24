<template>
  <div class="category">
    <Projects :category="category" />
    <ProjectsMobile :category="category" />
    <CategoryBar :category="category" />
  </div>
</template>

<script>
import Projects from '@/components/Projects.vue';
import ProjectsMobile from '@/components/ProjectsMobile.vue';
import CategoryBar from '@/components/CategoryBar.vue';
import { ACTION_POPULATE_PROJECTS } from '@/constants/storeConstants';

export default {
  name: 'category',
  components: {
    Projects,
    ProjectsMobile,
    CategoryBar,
  },
  created() {
    this.$store.dispatch(ACTION_POPULATE_PROJECTS);
  },
  computed: {
    category() {
      return decodeURI(this.$route.params.category);
    },
  },
  metaInfo: {
    title: 'Studio Vacarme - Design Graphique & Direction Artistique',
    meta: [
      {
        name: 'description',
        content: 'Vacarme est un studio de conception graphique pluridisciplinaire basé à Paris, co-fondé par Valentin Jabaud, Camille Roulant et Margaux Giron.',
      },
      {
        name: 'og:url',
        content: 'https://studiovacarme.com',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://studiovacarme.com',
      },
    ],
  },
};
</script>
