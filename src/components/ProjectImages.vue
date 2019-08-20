<template>
  <div
    class="projectImages"
    :class="`preset${preset}`"
  >
    <div
      :class="`imageContainer imageContainer-${index + 1}`"
      v-for="(image, index) in images"
      :key="index"
      v-view
    >
      <img
        class="image"
        :src="image"
        :alt="`image-${index}`"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectImages',
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
    preset: {
      type: Number,
      default: 1,
    },
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
}

@import "../styling/projectImagesLayouts/preset1";
@import "../styling/projectImagesLayouts/preset2";
@import "../styling/projectImagesLayouts/preset3";
@import "../styling/projectImagesLayouts/preset4";
@import "../styling/projectImagesLayouts/preset5";
@import "../styling/projectImagesLayouts/preset6";
</style>
