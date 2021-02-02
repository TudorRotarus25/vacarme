<template>
  <div class="media-container">
    <LoadingSpinner v-if="!isUiLoaded" />
    <div
      v-for="item in mediaItems"
      :key="item.src"
    >
      <ProjectVideo
        v-if="item.type === 'video'"
        :orientation="item.orientation"
        :src="item.src"
      />
      <img
        v-else
        class="image"
        :src="item.src"
        :alt="`image-${index}`"
      >
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import ProjectVideo from '@/components/ProjectVideo.vue';

export default {
  name: 'ProjectMedia',
  components: {
    LoadingSpinner,
    ProjectVideo,
  },
  props: {
    mediaItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      imagesLoaded: {},
      numberOfImages: 0,
    };
  },
  mounted() {
    const images = document.querySelectorAll('.projectImages img');

    this.numberOfImages = images.length;

    images.forEach((image, index) => {
      if (image.complete) {
        this.imagesLoaded = {
          ...this.imagesLoaded,
          [index]: true,
        };
      }
      image.addEventListener('load', () => {
        this.imagesLoaded = {
          ...this.imagesLoaded,
          [index]: true,
        };
      });
    });
  },
  computed: {
    isUiLoaded() {
      for (let index = 0; index < Math.min(3, this.numberOfImages); index += 1) {
        if (!this.imagesLoaded[index]) {
          return false;
        }
      }
      return true;
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

.media-container {
  .image {
    display: block;
    width: 100%;
  }
}
</style>
