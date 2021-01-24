<template>
  <header :class="`header ${isDarkMode ? 'header--dark' : ''}`">
    <div class="header__links">
      <router-link to="/">
        <img
          v-if="isDarkMode"
          src="@/assets/icons/logo-dark.svg"
          alt="studio vacarme logo"
        >
        <img
          v-else
          src="@/assets/icons/logo.svg"
          alt="studio vacarme logo"
        >
      </router-link>
      <button
        :class="`rightLink secondary-font ${isDarkMode && 'dark'}`"
        @click="onMenuOpen"
      >
        menu
      </button>
    </div>
    <BurgerMenu
      v-if="isMenuOpen"
      :onMenuClose="onMenuClose"
    />
  </header>
</template>

<script>
import { mapState } from 'vuex';

import BurgerMenu from '@/components/BurgerMenu.vue';

export default {
  name: 'Header',
  components: {
    BurgerMenu,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: mapState({
    isDarkMode: 'isDarkMode',
  }),
  methods: {
    onMenuClose() {
      this.isMenuOpen = false;
    },
    onMenuOpen() {
      this.isMenuOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styling/variables";
@import "../styling/mixins";

.header {
  background-color: #000;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  @include media-breakpoint-up(md) {
    height: 105px;
  }

  @include media-breakpoint-up(lg) {
    height: 4.5rem;
  }

  &--dark {
    background-color: #fff;
  }

  &__links {
    padding: 0 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include media-breakpoint-up(md) {
      padding: 0 32px;
    }

    @include media-breakpoint-up(lg) {
      padding: 0 1.5rem;
    }

    .rightLink {
      font-size: 26px;
      line-height: 28px;
      color: $white;
      padding: 0;

      &.dark {
        color: $black;
      }

      @include media-breakpoint-up(md) {
        font-size: 52px;
        line-height: 54px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 2rem;
        line-height: 2.2rem;
      }
    }
  }

  a {
    color: #fff;
  }

  img {
    display: block;
  }
}

img {
  height: 20px;

  @include media-breakpoint-up(md) {
    height: 40px;
  }

  @include media-breakpoint-up(lg) {
    height: 1.5rem;
  }
}
</style>
