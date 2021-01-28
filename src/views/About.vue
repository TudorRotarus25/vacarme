<template>
  <About />
</template>

<script>
import About from '@/components/About.vue';

export default {
  name: 'about',
  components: {
    About,
  },
  metaInfo: {
    title: 'Studio Vacarme — Studio design graphique Paris',
    meta: [
      {
        name: 'description',
        content: 'Identités Visuelles, Typographies, Edition, Webdesign (UI/UX), Signalétique etc.',
      },
      {
        name: 'og:url',
        content: 'https://studiovacarme.com/about',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://studiovacarme.com/about',
      },
    ],
  },
};
</script>
