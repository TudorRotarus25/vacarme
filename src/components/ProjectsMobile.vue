<template>
  <div class="projectsMobile">
    <div
      class="project"
      v-for="project in projects"
      :key="project.name"
      @click="() => onClick(project.slug)"
    >
      <div :class="`projectsMobile__content ${project.whiteTagline ? 'white' : ''}`">
        <img
          class="projectsMobile__image"
          :src="project.mobileImageUrl"
          alt="project.name"
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
        <div>{{ project.cta }}</div>
        <img
          class="cta__image"
          src="@/assets/icons/arrow-right.svg"
          alt="arrow left"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProjectsMobile',
  computed: mapState({
    projects: 'projects',
  }),
  methods: {
    onClick(slug) {
      this.$router.push({
        name: 'projectDetails',
        params: {
          slug,
        },
      });
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

      &.white {
        color: #fff;
      }
    }
  }

  .cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    border-top: 1px solid $text-primary;
    border-bottom: 1px solid $text-primary;

    &__image {
      height: 1rem;
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
