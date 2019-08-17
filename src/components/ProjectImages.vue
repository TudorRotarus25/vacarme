<template>
  <div
    class="projectImages"
    :class="`preset${preset}`"
  >
    <div
      :class="`imageContainer imageContainer-${index + 1}`"
      v-for="(image, index) in images"
      :key="index"
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
  width: 100%;
  margin-bottom: $imageDistance;
}

@import "../styling/projectImagesLayouts/preset1";
@import "../styling/projectImagesLayouts/preset2";
@import "../styling/projectImagesLayouts/preset3";
@import "../styling/projectImagesLayouts/preset4";
@import "../styling/projectImagesLayouts/preset5";
@import "../styling/projectImagesLayouts/preset6";
</style>
