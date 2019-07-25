<template>
  <header :class="`header ${isDarkMode ? 'header--dark' : ''}`">
    <div class="header__leftLinks">
      <router-link to="/">
        <img
          v-if="isDarkMode"
          src="@/assets/icons/logo-dark.svg"
          alt="vacarme"
        >
        <img
          v-else
          src="@/assets/icons/logo.svg"
          alt="vacarme"
        >
      </router-link>
    </div>
    <div class="header__rightLinks">
      <router-link to="/about">
        <img
          v-if="isDarkMode"
          src="@/assets/icons/info-dark.svg"
          alt="vacarme"
        >
        <img
          v-else
          src="@/assets/icons/info.svg"
          alt="vacarme"
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
.header {
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

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
  height: 1.3rem;
}
</style>
