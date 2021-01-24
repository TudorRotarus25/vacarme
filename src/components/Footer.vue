<template>
  <footer :class="`footer ${isDarkMode ? 'footer--dark' : ''} secondary-font`">
    <div class="footer__left">
      Copyright © 2021 Studio Vacarme, tous droits réservés.
    </div>
    <div class="footer__right">
      <a
        class="footerLink"
        href="https://www.instagram.com/studiovacarme/"
        target="_blank"
      >
        instagram
      </a>
      <a
        class="footerLink"
        href="https://www.behance.net/studiovacarme"
        target="_blank"
      >
        behance
      </a>
      <router-link
        class="footerLink"
        to="/about"
      >
        contact
      </router-link>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Footer',
  computed: mapState({
    isDarkMode: 'isDarkMode',
  }),
};
</script>

<style lang="scss" scoped>
@import "../styling/variables";
@import "../styling/mixins";

.footer {
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 1rem 20px;

  @include media-breakpoint-up(lg) {
    padding: 1rem 2em;
  }

  &--dark {
    background-color: #fff;
    color: #000;

    .footerLink {
      color: #000;
    }
  }

  &__left {
    br {
      @include media-breakpoint-up(lg) {
        display: none;
      }
    }
  }

  &__right {
    text-align: right;

    a {
      display: block;

      @include media-breakpoint-up(lg) {
        display: inline-block;
      }
    }
  }
}

.footerLink {
  color: #fff;

  @include media-breakpoint-up(lg) {
    margin-left: 2rem;
  }
}
</style>
