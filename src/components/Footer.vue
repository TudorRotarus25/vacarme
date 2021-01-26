<template>
  <footer :class="`footer ${isDarkMode ? 'footer--dark' : ''} secondary-font`">
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
    <div class="footer__copyright">
      Copyright © 2021 Studio Vacarme, tous droits réservés.
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
  background-color: #000;
  color: #fff;
  padding: 1rem 20px;

  @include media-breakpoint-up(lg) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  &--dark {
    border-top: 1px solid $white;
  }

  &__copyright {
    br {
      @include media-breakpoint-up(lg) {
        display: none;
      }
    }
  }

  &__links {
    margin-bottom: 40px;

    @include media-breakpoint-up(lg) {
      text-align: right;
      margin-bottom: 0;
    }

    a {
      display: inline-block;
    }
  }
}

.footerLink {
  color: #fff;
  margin-right: 10px;

  @include media-breakpoint-up(lg) {
    margin-left: .5rem;
    margin-right: 0;
  }
}
</style>
