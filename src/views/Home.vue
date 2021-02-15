<template>
  <div class="home">
    <Projects />
    <ProjectsMobile />
  </div>
</template>

<script>
import Projects from '@/components/Projects.vue';
import ProjectsMobile from '@/components/ProjectsMobile.vue';
import { ACTION_POPULATE_PROJECTS } from '@/constants/storeConstants';

export default {
  name: 'home',
  components: {
    Projects,
    ProjectsMobile,
  },
  created() {
    this.$store.dispatch(ACTION_POPULATE_PROJECTS);
  },
  metaInfo: {
    title: 'Studio Vacarme - Design Graphique & Direction Artistique',
    meta: [
      {
        name: 'description',
        content: 'Vacarme est un studio de conception graphique pluridisciplinaire basé à Paris, co-fondé par Valentin Jabaud, Camille Roulant et Margaux Giron.',
      },
      {
        property: 'og:description',
        content: 'Vacarme est un studio de conception graphique pluridisciplinaire basé à Paris, co-fondé par Valentin Jabaud, Camille Roulant et Margaux Giron.',
      },
      {
        property: 'og:url',
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
