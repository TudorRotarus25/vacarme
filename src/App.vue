<template>
  <div id="app" :class="{ 'bottom-spacing': isBottomBarVisible }">
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
      isBottomBarVisible: false,
    };
  },
  watch: {
    $route(to) {
      this.isBottomBarVisible = to.name === 'category';
    },
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

  .bottom-spacing {
    margin-bottom: 46px;

    @include media-breakpoint-up(md) {
      margin-bottom: 70px;
    }
  }
</style>
