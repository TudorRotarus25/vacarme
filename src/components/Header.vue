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
      <router-link
        class="rightLink"
        to="/about"
      >
        <img
          v-if="isDarkMode"
          src="@/assets/icons/info-dark.svg"
          alt="about icon"
        >
        <img
          v-else
          src="@/assets/icons/info.svg"
          alt="about icon"
        >
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: mapState({
    isDarkMode: 'isDarkMode',
  }),
};
</script>

<style lang="scss" scoped>
@import "../styling/variables";
@import "../styling/mixins";

.header {
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    position: relative;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;

    @include media-breakpoint-up(md) {
      padding: 0 32px;
    }

    @include media-breakpoint-up(lg) {
      padding: 0 1.5rem;
    }

    .rightLink {
      position: absolute;
      bottom: 0;
      right: 20px;

      @include media-breakpoint-up(md) {
        right: 32px;
      }

      @include media-breakpoint-up(lg) {
        right: 1.5rem;
      }

      img {
        height: 26px;

        @include media-breakpoint-up(md) {
          height: 52px;
        }

        @include media-breakpoint-up(lg) {
          height: 2rem;
        }
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
