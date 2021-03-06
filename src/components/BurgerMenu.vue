<template>
  <div class="burger-menu" :style="`height: ${realHeight}px`">
    <div class="header">
      <router-link
        to="/"
        @click.native.native="onMenuClose"
      >
        <img
          class="logo"
          src="@/assets/icons/logo.svg"
          alt="studio vacarme logo"
        >
      </router-link>
      <button @click="onMenuClose">
        <span class="close-icon" />
      </button>
    </div>
    <nav class="menu">
      <div class="menu__top">
        <router-link
          class="about-link"
          to="/about"
          @click.native="onMenuClose"
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
            @click.native="onMenuClose"
          >
            {{ category }}
          </router-link>
        </div>
        <div class="menu-item">
          <router-link
            class="menu-item__link"
            to="/"
            @click.native="onMenuClose"
          >
            ALL
          </router-link>
        </div>
      </div>
    </nav>
    <div class="footer">
      <div class="footer__links">
        <a
          class="footerLink"
          href="https://www.instagram.com/studiovacarme/"
          target="_blank"
        >
          instagram,
        </a>
        <a
          class="footerLink"
          href="https://www.behance.net/studiovacarme"
          target="_blank"
        >
          behance,
        </a>
        <router-link
          class="footerLink"
          to="/about"
        >
          contact
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AboutMenuItem from '@/components/AboutMenuItem.vue';

export default {
  name: 'BurgerMenu',
  components: {
    AboutMenuItem,
  },
  props: {
    onMenuClose: Function,
  },
  data() {
    return {
      realHeight: 0,
    };
  },
  created() {
    this.populateRealHeight();
    window.onresize = this.populateRealHeight;
  },
  computed: {
    ...mapState({
      categories: 'categories',
    }),
  },
  methods: {
    populateRealHeight() {
      this.realHeight = window.innerHeight;
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
  left: 0;
  right: 0;
  background-color: $black;
  color: $white;
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $white;

  @include media-breakpoint-up(md) {
    height: 105px;
  }

  @include media-breakpoint-up(lg) {
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
    width: 20px;
    position: relative;
    display: block;

    &::before,
    &::after {
      content: "";
      height: 1px;
      width: 100%;
      background-color: $white;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 1;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    @include media-breakpoint-up(md) {
      height: 40px;
      width: 40px;
    }

    @include media-breakpoint-up(lg) {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}

.menu {
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-grow: 1;

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
    font-weight: bold;
    text-transform: uppercase;
    display: block;
    padding: 10px 20px;

    @include media-breakpoint-up(md) {
      font-size: 30px;
      padding: 8px 20px 8px 120px;
    }

    &:hover {
      font-style: italic;
    }
  }
}

.about-link {
  display: inline-block;
}

.footer {
  font-size: 16px;
  padding: 10px 20px;
  border-top: 1px solid $white;
  font-weight: lighter;

  @include media-breakpoint-up(md) {
    text-align: right;
  }

  .footerLink {
    color: #fff;
    margin-right: 10px;

    @include media-breakpoint-up(lg) {
      margin-left: .5rem;
      margin-right: 0;
    }
  }
}
</style>
