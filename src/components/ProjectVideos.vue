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
  .projectVideos {
    margin-top: 7rem;
    margin-bottom: -7rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .projectVideo {
    flex-basis: 100%;
    transform: translateY(7rem);
    transition: transform .7s ease-out;

    &.view-in,
    &.view-out--above {
      transform: translate(0);
    }

    &--portrait {
      flex-basis: 50%;
    }
  }

  .videoContainer {
    position: relative;
    padding-bottom: 50%;
    margin-bottom: 7rem;

    &--portrait {
      padding-bottom: 85vh;
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
