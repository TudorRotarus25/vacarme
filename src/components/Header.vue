<template>
  <header :class="`header ${isDarkMode ? 'header--dark' : ''}`">
    <div class="header__leftLinks">
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
    </div>
    <div class="header__rightLinks">
      <router-link to="/about">
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
  height: 50px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  @include media-breakpoint-up(md) {
    height: 75px;
  }

  @include media-breakpoint-up(lg) {
    height: 3.5rem;
    padding: 0 2rem;
  }

  &--dark {
    background-color: #fff;
  }

  a {
    color: #fff;
  }

  img {
    display: block;
  }

  &__rightLinks {
    font-size: 2rem;
  }
}

img {
  height: 20px;

  @include media-breakpoint-up(md) {
    height: 30px;
  }

  @include media-breakpoint-up(lg) {
    height: 1.3rem;
  }
}
</style>
