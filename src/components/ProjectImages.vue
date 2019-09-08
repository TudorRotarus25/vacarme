<template>
  <div
    class="projectImages"
    :class="`preset${preset}`"
  >
    <LoadingSpinner v-if="!isUiLoaded" />
    <div
      :class="`imageContainer imageContainer-${index + 1}`"
      v-for="(image, index) in images"
      :key="index"
      v-view
    >
      <img
        :class="{image: true, 'image--dark': isDarkMode}"
        :src="image"
        :alt="`image-${index}`"
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
    preset: {
      type: Number,
      default: 0,
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
$imageDistance: 7rem;

.projectImages {
  margin-top: $imageDistance;
}

.imageContainer {
  margin-bottom: $imageDistance;
  transform: translateY(7rem);
  transition: transform .7s ease-out;

  &.view-in,
  &.view-out--above {
    transform: translate(0);
  }

  .image {
    border: 1px solid #000;
    width: 100%;

    &--dark {
      border-color: #fff;
    }
  }
}

@import "../styling/projectImagesLayouts/preset1";
@import "../styling/projectImagesLayouts/preset2";
@import "../styling/projectImagesLayouts/preset3";
@import "../styling/projectImagesLayouts/preset4";
@import "../styling/projectImagesLayouts/preset5";
@import "../styling/projectImagesLayouts/preset6";
</style>
