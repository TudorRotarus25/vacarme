<template>
  <div class="projectImages">
    <LoadingSpinner v-if="!isUiLoaded" />
    <div
      :class="`imageContainer imageContainer-${index + 1}`"
      v-for="image in images"
      :key="image"
    >
      <img
        class="image"
        :src="image"
        :alt="`image-${index}`"
        draggable="false"
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoadingSpinner from './LoadingSpinner.vue';

export default {
  name: 'ProjectImages',
  components: { LoadingSpinner },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
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
    ...mapState({
      isDarkMode: 'isDarkMode',
    }),
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
};
</script>

<style
  lang="scss"
  scoped
>
@import "../styling/variables";
@import "../styling/mixins";

.imageContainer {
  .image {
    display: block;
    width: 100%;
  }
}
</style>
