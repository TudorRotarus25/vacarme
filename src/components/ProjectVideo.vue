<template>
  <div class="projectVideos">
    <div
      :class="`projectVideo projectVideo--${orientation}`"
    >
      <div :class="`videoContainer videoContainer--${orientation}`">
        <iframe
          class="videoContainer__iframe"
          :src="src"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectImages',
  props: {
    src: {
      type: String,
      default: '',
    },
    orientation: {
      type: String,
      default: 'landscape',
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
  @import "../styling/variables";
  @import "../styling/mixins";

  .projectVideos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .projectVideo {
    flex-basis: 100%;

    &--portrait {
      @include media-breakpoint-up(lg) {
        flex-basis: 50%;
      }
    }
  }

  .videoContainer {
    position: relative;
    padding-bottom: 50%;
    margin: 10px;

    @include media-breakpoint-up(lg) {
      margin: 20px;
    }

    &--portrait {
      padding-bottom: 200%;

      @include media-breakpoint-up(lg) {
        padding-bottom: 85vh;
      }
    }

    &__iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
