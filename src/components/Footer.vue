<template>
  <footer class="footer">
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
        href=""
        target="_blank"
      >
        behance
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 1rem 2em;
}

.footerLink {
  color: #fff;
  margin: 0 1rem;
}
</style>
