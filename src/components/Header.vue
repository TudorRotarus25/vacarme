<template>
  <header :class="`header ${isDarkMode ? 'header--dark' : ''}`">
    <div class="header__links">
      <router-link to="/">
        <img
          src="@/assets/icons/logo.svg"
          alt="studio vacarme logo"
        >
      </router-link>
      <button
        class="rightLink secondary-font"
        @click="onMenuOpen"
      >
        <img
          src="@/assets/icons/menu.svg"
          alt="studio vacarme logo"
        >
      </button>
    </div>
    <transition name="drop">
      <BurgerMenu
        v-if="isMenuOpen"
        :onMenuClose="onMenuClose"
      />
    </transition>
  </header>
</template>

<script>
import { mapState } from 'vuex';

import BurgerMenu from '@/components/BurgerMenu.vue';
import { ACTION_POPULATE_CATEGORIES } from '@/constants/storeConstants';

const NO_SCROLL_CLASS_NAME = 'noscroll';

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
  created() {
    this.$store.dispatch(ACTION_POPULATE_CATEGORIES);
  },
  computed: mapState({
    isDarkMode: 'isDarkMode',
  }),
  methods: {
    onMenuClose() {
      document.body.classList.remove(NO_SCROLL_CLASS_NAME);
      this.isMenuOpen = false;
    },
    onMenuOpen() {
      document.body.classList.add(NO_SCROLL_CLASS_NAME);
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
  box-sizing: border-box;

  @include media-breakpoint-up(md) {
    height: 105px;
  }

  @include media-breakpoint-up(lg) {
    height: 4.5rem;
  }

  &--dark {
    border-bottom: 1px solid $white;
  }

  &__links {
    padding: 0 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .rightLink {
      padding: 0;
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

.drop-enter-active, .drop-leave-active {
  transition: transform .4s;
}

.drop-enter, .drop-leave-to {
  transform: translateY(-100vh);
}
</style>
