<template>
  <div :class="`project ${isDarkMode ? 'project--dark' : ''}`">
    <h1>{{ projectData.name }}</h1>
    <div>
      <p
        v-for="(paragraph, index) in projectData.paragraphs"
        :key="index"
        v-html="paragraph"
      />
    </div>
    <hr class="spacer">
    <div class="projectInfo">
      <div class="projectInfo__left">
        <div>
          <h5>Projet</h5>
          <div>{{ projectData.project }}</div>
        </div>
        <div>
          <h5>Domaine</h5>
          <div>{{ projectData.domain }}</div>
        </div>
        <div>
          <h5>Année</h5>
          <div>{{ projectData.year }}</div>
        </div>
      </div>
      <div class="projectInfo__right">
        <div>
          <h5>Client</h5>
          <div>{{ projectData.client }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProjectDetails',
  computed: mapState({
    isDarkMode: 'isDarkMode',
    projectData: 'projectData',
  }),
};
</script>

<style lang="scss" scoped>
  @import "../styling/variables";
  @import "../styling/mixins";

  .project {
    padding: 40px 20px 60px;

    @include media-breakpoint-up(lg) {
      padding: 4rem 6%;
    }

    &--dark {
      background-color: #000;
      color: #fff;

      hr {
        background-color: #fff;
      }
    }
  }

  .spacer {
    margin: 20px 0;

    @include media-breakpoint-up(lg) {
      margin: 3em 0 2em;
    }
  }

  .projectInfo {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;

    h5 {
      font-size: 0.7rem;
    }

    &__left {
      display: flex;

      > div {
        margin-right: 20px;

        @include media-breakpoint-up(lg) {
          margin-right: 50px;
        }
      }
    }

    &__right {
      text-align: right;
    }
  }
</style>
