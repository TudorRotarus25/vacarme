<template>
  <div
    :style="{ flexBasis: `${project.width}%` }"
    :class="{
      project: true,
      ['project--vertical']: project.layout === 'vertical',
      ['project--horizontal']: project.layout === 'horizontal',
    }"
    @click="onClick"
  >
    <div class="project__content">
      <img
        class="project__hoverImage"
        :src="project.hoverImageUrl"
        :alt="project.name"
      >
      <img
        class="project__shape"
        :src="project.shapeUrl"
        :alt="project.name"
      >
      <div
        class="tagline tagline--top"
        :style="`transform: rotate(${project.taglineAngle}deg)`"
      >
        {{ project.homeText1 }}
      </div>
      <div
        class="tagline tagline--bottom"
        :style="`transform: rotate(${0 - project.taglineAngle}deg)`"
      >
        {{ project.homeText2 }}
      </div>
    </div>
    <div class="cta">
      <div class="cta__text">
        {{ project.cta }}
      </div>
      <span v-if="project.layout === 'vertical'" class="cta__arrowRight">
        <svg viewBox="0 0 73.06 28.93" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m73.06 13.65c-11.36 0-26.88-5.74-36.89-13.65l-1 1.27a71.83 71.83 0 0 0 26 12.38h-61.17v1.62h61.14a71.85 71.85 0 0 0 -26 12.39l1 1.27c10-7.91 25.52-13.66 36.88-13.66zm-8.4.87v-.11l.29.05z"
            fill="#1d1d1b"
          />
        </svg>
      </span>
      <span v-else class="cta__arrowUp">
        <svg viewBox="0 0 28.99 73.21" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m29 37c-7.93-10-13.68-25.58-13.68-37h-1.64c0 11.39-5.75 26.93-13.68 37l1.27 1a71.86 71.86 0 0 0 12.42-26v61.21h1.62v-61.27a71.8 71.8 0 0 0 12.41 26.06zm-14.56-28.58c0-.1 0-.2.05-.29l.06.29z"
            fill="#1d1d1b"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
    },
  },
  methods: {
    onClick() {
      const { slug } = this.project;
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
$projectPadding: 5rem;

.project {
  border: 1px solid #1D1D1B;
  border-top: 0;
  border-left: 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  &:hover {
    .project__shape {
      transform: rotateY(180deg);
    }

    .project__hoverImage {
      transform: rotateY(0);
    }

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
      padding: 0.5rem;
    }
  }

  &--horizontal {
    .cta {
      border-left: 1px solid #1D1D1B;
      padding: 0.5rem;

      &__text {
        transform: rotate(-90deg);
        transform-origin: left top 0;
        white-space: nowrap;
        position: absolute;
        bottom: 0;
        left: 0.3rem;
      }
    }
  }

  &__content {
    position: relative;
    padding: ($projectPadding - 2rem) $projectPadding;
    perspective: 1500px;
  }

  &__shape,
  &__hoverImage {
    backface-visibility: hidden;
    transition: all .7s ease;
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
    transform: rotateY(180deg);
  }
}

.cta {
  position: relative;
  transition: all .3s;

  &:hover {
    background-color: #000;

    .cta__text {
      color: #fff;
    }

    path {
      fill: #fff;
    }
  }

  &__arrowRight svg {
    height: 1rem;
  }

  &__arrowUp svg {
    width: 1rem;
  }
}

.tagline {
  position: absolute;
  z-index: 2;
  font-size: 3rem;
  transition: all .3s;

  &--top {
    top: 7rem;
    left: 3rem;
  }

  &--bottom {
    bottom: 7rem;
    right: 3rem;
  }
}
</style>
