<template>
  <div class="projectVideos">
    <div
      v-for="video in videos"
      :key="video.src"
      :class="`projectVideo projectVideo--${video.orientation}`"
      v-view
    >
      <div :class="`videoContainer videoContainer--${video.orientation}`">
        <iframe
          class="videoContainer__iframe"
          :src="video.src"
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
    videos: {
      type: Array,
      default() {
        return [];
      },
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
    margin: 0 -20px 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @include media-breakpoint-up(lg) {
      margin: 0 0 7rem;
    }
  }

  .projectVideo {
    flex-basis: 100%;
    transform: translateY(50px);
    transition: transform .7s ease-out;

    @include media-breakpoint-up(lg) {
      transform: translateY(7rem);
    }

    &.view-in,
    &.view-out--above {
      transform: translate(0);
    }

    &--portrait {
      @include media-breakpoint-up(lg) {
        flex-basis: 50%;
      }
    }
  }

  .videoContainer {
    position: relative;
    padding-bottom: 50%;
    margin-top: 50px;

    @include media-breakpoint-up(lg) {
      margin-top: 7rem;
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
