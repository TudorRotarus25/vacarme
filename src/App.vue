<template>
  <div id="app">
    <Header />
    <div class="appContent">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import '@/styling/main.scss';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
  @import "./styling/variables";
  @import "./styling/mixins";

  .appContent {
    margin-top: 50px;

    @include media-breakpoint-up(md) {
      margin-top: 75px;
    }

    @include media-breakpoint-up(lg) {
      margin-top: 3.5rem;
    }
  }
</style>
