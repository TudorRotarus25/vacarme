<template>
  <div class="projectsMobile">
    <router-link
      :to="{
        name: 'projectDetails',
        params: {
          slug: project.slug,
        },
      }"
      class="project"
      v-for="project in projects"
      :key="project.name"
    >
      <div :class="`projectsMobile__content ${project.taglineDarkMode ? 'white' : ''}`">
        <img
          class="projectsMobile__image"
          :src="project.mobileImageUrl"
          alt="project.slug"
        >
        <div
          class="tagline tagline--top"
          :style="`transform: rotate(${project.taglineAngle}deg)`"
        >
          {{ project.taglineTop }}
        </div>
        <div
          class="tagline tagline--bottom"
          :style="`transform: rotate(${0 - project.taglineAngle}deg)`"
        >
          {{ project.taglineBottom }}
        </div>
      </div>
      <div class="cta">
        <div>
          <div class="cta__title">
            {{ project.name }}
          </div>
          <div class="cta__subtitle secondary-font">
            {{ project.cta }}
          </div>
        </div>
        <img
          class="cta__image"
          src="@/assets/icons/arrow-right.svg"
          alt="arrow left"
        >
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectsMobile',
  props: {
    category: String,
  },
  computed: {
    projects() {
      if (!this.category) {
        return this.$store.state.projects;
      }

      return this.$store.state.projects
        .filter((project) => project.categories.includes(this.category));
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../styling/variables";
  @import "../styling/mixins";

  .projectsMobile {
    @include media-breakpoint-up(lg) {
      display: none;
    }

    &__image {
      display: block;
      width: 100%;
    }

    &__content {
      position: relative;
      min-height: 120vw;

      &.white {
        color: #fff;
      }
    }
  }

  .cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    border-top: 1px solid $text-primary;
    border-bottom: 1px solid $text-primary;

    &__image {
      height: 1rem;
    }

    &__title {
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
    }

    &__subtitle {
      font-size: 15px;
      line-height: 19px;
    }
  }

  .tagline {
    position: absolute;
    font-size: 3rem;

    &--top {
      top: 14vw;
      left: 20px;
    }

    &--bottom {
      bottom: 14vw;
      right: 20px;
    }
  }
</style>
