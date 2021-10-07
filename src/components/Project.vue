<template>
  <router-link
    :to="{
      name: 'projectDetails',
      params: {
        slug: project.slug,
      },
    }"
    :class="`project project--vertical ${alwaysActive && 'always-active'} ${project.taglineDarkMode && 'dark-mode'}`"
    @click="onClick"
  >
    <div class="project__image-container">
      <div class="project__content secondary-font">
        <img
          class="project__hoverImage"
          :src="project.hoverImageUrl"
          :alt="project.slug"
          draggable="false"
        >
        <img
          class="project__shape"
          :src="project.shapeUrl"
          :alt="project.slug"
          draggable="false"
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
      <img
        v-if="alwaysActive && project.thirdOverlayImageUrl"
        class="third-overlay"
        :src="project.thirdOverlayImageUrl"
        alt=""
      >
    </div>
    <div :class="`backdrop ${project.color}`" />
    <div class="cta">
      <div class="cta__text">
        <div class="cta__title">
          {{ project.name }}
        </div>
        <div class="cta__subtitle secondary-font">
          {{ project.cta }}
        </div>
      </div>
      <span class="cta__arrowRight">
        <svg viewBox="0 0 73.06 28.93" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m73.06 13.65c-11.36 0-26.88-5.74-36.89-13.65l-1 1.27a71.83 71.83 0 0 0 26 12.38h-61.17v1.62h61.14a71.85 71.85 0 0 0 -26 12.39l1 1.27c10-7.91 25.52-13.66 36.88-13.66zm-8.4.87v-.11l.29.05z"
            fill="#1d1d1b"
          />
        </svg>
      </span>
    </div>
  </router-link>
</template>

<script>
import { ACTION_SET_LOADING_COLOR } from '../constants/storeConstants';

export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
    },
    alwaysActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      const { color } = this.project;
      if (color) {
        this.$store.dispatch(ACTION_SET_LOADING_COLOR, color);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styling/variables";
$projectPadding: 5rem;

.project {
  border: 1px solid #1D1D1B;
  border-top: 0;
  border-left: 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  user-select: none;
  flex-basis: 33.33%;

  &:hover,
  &.always-active {
    .project__shape {
      transform: rotateY(180deg);
    }

    .project__hoverImage {
      opacity: 1;
    }

    .backdrop {
      opacity: 1;
    }
  }

  &:hover:not(.always-active) {
    .tagline {
      opacity: 0;
    }
  }

  &:hover {
    .cta {
      background-color: #000;

      .cta__text {
        color: #fff;
      }

      .cta__arrowRight {
        transform: translateX(-10px);
      }

      path {
        fill: #fff;
      }
    }

    .third-overlay {
      opacity: 1;
    }
  }

  &.always-active {
    .tagline {
      opacity: 0;
    }
  }

  &--vertical {
    flex-direction: column;

    .cta {
      border-top: 1px solid #1D1D1B;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
    }
  }

  .backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0;

    &.yellow {
      background-color: $yellow;
    }

    &.red {
      background-color: $red;
    }

    &.pink {
      background-color: $pink;
    }

    &.purple {
      background-color: $purple;
    }

    &.blue {
      background-color: $blue;
    }

    &.green {
      background-color: $green;
    }
  }

  &__image-container {
    position: relative;
    flex-grow: 1;
  }

  &__content {
    position: relative;
    padding: ($projectPadding - 2rem) $projectPadding;
    min-height: 25rem;
  }

  &__shape,
  &__hoverImage {
    backface-visibility: hidden;
  }

  &__shape {
    display: block;
    width: calc(100% - #{2 * $projectPadding});
    position: absolute;
    top: $projectPadding - 2rem;
    left: $projectPadding;
  }

  &__hoverImage {
    display: block;
    width: 100%;
    opacity: 0;
  }
}

.cta {
  position: relative;
  background-color: #fff;

  &__arrowRight {
    transition: transform .3s ease-out;

    svg {
      height: 1rem;
    }
  }

  &__text {
    overflow: hidden;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
  }

  &__subtitle {
    font-size: 15px;
    line-height: 19px;
    white-space: nowrap;
    overflow: hidden;
  }
}

.tagline {
  position: absolute;
  z-index: 2;
  font-size: 3rem;

  &--top {
    top: 7rem;
    left: 3rem;
  }

  &--bottom {
    bottom: 7rem;
    right: 3rem;
  }
}

.third-overlay {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  opacity: 0;
}
</style>
