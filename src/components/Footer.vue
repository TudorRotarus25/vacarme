<template>
  <footer :class="`footer ${isDarkMode ? 'footer--dark' : ''}`">
    <div class="footer__left">
      studio de design graphique <br> et direction artistique basé à paris
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

  &__right {
    text-align: right;

    a {
      display: block;
    }
  }
}

.footerLink {
  color: #fff;

  @include media-breakpoint-up(lg) {
    margin: 0 1rem;
  }
}
</style>
