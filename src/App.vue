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
  data() {
    return {
      isMouseVisible: true,
    };
  },
};
</script>

<style lang="scss">
  @import "./styling/variables";
  @import "./styling/mixins";

  .appContent {
    margin-top: 60px;

    @include media-breakpoint-up(md) {
      margin-top: 105px;
    }

    @include media-breakpoint-up(lg) {
      margin-top: 4.5rem;
    }
  }

  .cursorIcon {
    display: none;
    height: 100px;
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 11;

    @include media-breakpoint-up(lg) {
      display: block;
    }
  }
</style>
