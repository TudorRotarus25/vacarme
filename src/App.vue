<template>
  <div id="app">
    <Header />
    <LoadingSpinner v-if="isLoading" />
    <div class="appContent">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import '@/styling/main.scss';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    LoadingSpinner,
  },
  computed: mapState({
    isLoading: 'isLoading',
  }),
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
