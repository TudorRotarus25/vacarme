<template>
  <footer :class="`footer ${isDarkMode ? 'footer--dark' : ''}`">
    <div class="footer__left">
      studio de design graphique et direction artistique basé à paris
    </div>
    <div class="footer_right">
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
.footer {
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 1rem 2em;

  &--dark {
    background-color: #fff;
    color: #000;

    .footerLink {
      color: #000;
    }
  }
}

.footerLink {
  color: #fff;
  margin: 0 1rem;
}
</style>
