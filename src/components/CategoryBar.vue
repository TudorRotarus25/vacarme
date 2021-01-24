<template>
  <div class="bar">
    <div class="bar__left">
      {{category}}
    </div>
    <div class="bar__right">
      <router-link to="/">
        <img class="arrow-icon" src="@/assets/icons/arrow-right.svg" alt="arrow right">
        ALL
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryBar',
  props: {
    category: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../styling/variables";
@import "../styling/mixins";

.bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $white;
  border-top: 1px solid $black;
  border-bottom: 1px solid $black;
  padding: 10px 20px;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @include media-breakpoint-up(md) {
    font-size: 40px;
    line-height: 48px;
  }

  &__left {
    text-decoration: underline;
    text-transform: uppercase;
  }
}

.arrow-icon {
  height: 14px;

  @include media-breakpoint-up(md) {
    height: 28px;
  }
}
</style>
