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
      <div class="backdrop" />
      <img
        class="project__shape"
        :src="project.shapeUrl"
        :alt="project.name"
      >
      <div class="tagline tagline--top">
        {{ project.homeText1 }}
      </div>
      <div class="tagline tagline--bottom">
        {{ project.homeText2 }}
      </div>
    </div>
    <div class="cta">
      <div class="cta__text">
        {{ project.cta }}
      </div>
      <span v-if="project.layout === 'vertical'" class="cta__arrowRight">
        <img src="@/assets/icons/arrow-right.svg" alt="arrow left">
      </span>
      <span v-else class="cta__arrowUp">
        <img src="@/assets/icons/arrow-up.svg" alt="arrow up">
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
$projectPadding: 7rem;

.project {
  border: 1px solid #1D1D1B;
  border-top: 0;
  border-left: 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    .project__shape {
      display: none;
    }

    .backdrop {
      display: none;
    }

    .tagline {
      display: none;
    }
  }

  &--vertical {
    flex-direction: column;

    .cta {
      border-top: 1px solid #1D1D1B;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
  }

  &--horizontal {
    .cta {
      border-left: 1px solid #1D1D1B;
      padding: 10px;

      &__text {
        transform: rotate(-90deg);
        transform-origin: left top 0;
        white-space: nowrap;
        position: absolute;
        bottom: 0;
        left: 10px;
      }
    }
  }

  &__content {
    position: relative;
    padding: ($projectPadding - 2rem) $projectPadding;
  }

  &__shape {
    display: block;
    width: calc(100% - #{2 * $projectPadding});
    position: absolute;
    top: $projectPadding - 2rem;
    left: $projectPadding;
  }

  .backdrop {
    background-color: #fff;
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
  }

  &__hoverImage {
    display: block;
    width: 100%;
  }
}

.cta {
  position: relative;

  &:hover {
    background-color: #000;

    .cta__text {
      color: #fff;
    }

    img {

    }
  }

  &__arrowRight img {
    height: 15px;
  }

  &__arrowUp img {
    width: 15px;
  }
}

.tagline {
  position: absolute;
  z-index: 2;
  font-size: 4rem;

  &--top {
    top: 12rem;
    left: 5rem;
  }

  &--bottom {
    bottom: 12rem;
    right: 5rem;
  }
}
</style>
