<template>
  <div class="burger-menu">
    <div class="header">
      <router-link to="/">
        <img
          class="logo"
          src="@/assets/icons/logo.svg"
          alt="studio vacarme logo"
        >
      </router-link>
      <button @click="onMenuClose">
        <img
          class="close-icon"
          src="@/assets/icons/close.svg"
          alt="close icon"
        >
      </button>
    </div>
    <nav class="menu">
      <div class="menu__top">
        <router-link
          class="about-link"
          to="/about"
        >
          <AboutMenuItem/>
        </router-link>
      </div>
      <div class="menu__bottom">
        <div
          class="menu-item"
          v-for="category in categories"
          :key="category"
        >
          <router-link
            class="menu-item__link"
            :to="{ name: 'category', params: { category: encodeURI(category) } }"
          >
            {{ category }}
          </router-link>
        </div>
      </div>
    </nav>
    <div class="footer">
      Copyright © 2021 studio vacarme, tous droits réservés.
    </div>
  </div>
</template>

<script>
import AboutMenuItem from '@/components/AboutMenuItem.vue';

export default {
  name: 'BurgerMenu',
  components: {
    AboutMenuItem,
  },
  props: {
    onMenuClose: Function,
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
  watch: {
    $route() {
      this.onMenuClose();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styling/variables";
@import "../styling/mixins";

.burger-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $black;
  color: $white;
}

.header {
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $white;

  @include media-breakpoint-up(md) {
    padding: 0 32px;
    height: 105px;
  }

  @include media-breakpoint-up(lg) {
    padding: 0 1.5rem;
    height: 4.5rem;
  }

  .logo {
    display: block;
    height: 20px;

    @include media-breakpoint-up(md) {
      height: 40px;
    }

    @include media-breakpoint-up(lg) {
      height: 1.5rem;
    }
  }

  .close-icon {
    height: 20px;

    @include media-breakpoint-up(md) {
      height: 40px;
    }

    @include media-breakpoint-up(lg) {
      height: 1.5rem;
    }
  }
}

.menu {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px - 36px);
  overflow: scroll;

  @include media-breakpoint-up(md) {
    height: calc(100vh - 105px - 41px);
    overflow: hidden;
  }

  @include media-breakpoint-up(lg) {
    height: calc(100vh - 4.5rem - 41px);
  }

  &__top {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.menu-item {
  border-top: 1px solid $white;

  &__link {
    color: $white;
    font-size: 25px;
    text-transform: uppercase;
    display: block;
    padding: 5px 20px;

    @include media-breakpoint-up(md) {
      font-size: 30px;
      padding: 8px 20px 8px 120px;
    }
  }
}

.about-link {
  width: 100%;
  display: block;
}

.footer {
  font-size: 12px;
  padding: 10px 20px;
  border-top: 1px solid $white;
  font-weight: lighter;

  @include media-breakpoint-up(md) {
    font-size: 16px;
  }
}
</style>
