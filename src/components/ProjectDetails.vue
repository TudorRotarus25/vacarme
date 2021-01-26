<template>
  <div :class="`project ${isDarkMode ? 'project--dark' : ''}`">
    <div class="projectContent">
      <div class="projectDescription">
        <p
          v-for="(paragraph, index) in projectData.paragraphs"
          :key="index"
          v-html="paragraph"
        />
        <p v-if="projectData.url">
          <a
            class="projectLink"
            target="_blank"
            :href="`https://${projectData.url}`"
          >
            {{ projectData.url }} →
          </a>
        </p>
      </div>
      <div class="projectInfo">
        <h1 class="title">{{ projectData.name }}</h1>
        <div class="projectDetails">
          <div class="projectDetails__item">
            <h2 class="projectDetails__key">
              Domaine
            </h2>
            <div class="projectDetails__label secondary-font">
              {{ projectData.domain }}
            </div>
          </div>
          <div class="projectDetails__item">
            <h2 class="projectDetails__key">
              Année
            </h2>
            <div class="projectDetails__label secondary-font">
              {{ projectData.year }}
            </div>
          </div>
          <div class="projectDetails__item">
            <h2 class="projectDetails__key">
              Client
            </h2>
            <div class="projectDetails__label secondary-font">
              {{ projectData.client }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="projectMedia">
      <ProjectVideos
        v-if="!isLoading && projectData.projectVideos && projectData.projectVideos.length"
        :videos="projectData.projectVideos"
      />
      <ProjectImages
        v-if="!isLoading"
        :images="projectImages"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProjectImages from './ProjectImages.vue';
import ProjectVideos from './ProjectVideos.vue';

export default {
  name: 'ProjectDetails',
  components: {
    ProjectImages,
    ProjectVideos,
  },
  computed: {
    ...mapState({
      isDarkMode: 'isDarkMode',
      isLoading: 'isLoading',
      projectData: 'projectData',
    }),
    projectImages() {
      if (window.innerWidth < 992) {
        return this.projectData.projectMobileImages;
      }
      return this.projectData.projectDesktopImages;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../styling/variables";
  @import "../styling/mixins";

  .project {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;

    @include media-breakpoint-up(lg) {
      display: flex;
    }

    &--dark {
      background-color: #000;
      color: #fff;

      .projectDetails {
        border-bottom: 1px solid $white;

        @include media-breakpoint-up(lg) {
          border-bottom: 0;
        }

        &__item {
          border-top: 1px solid $white;
        }
      }

      .projectContent {
        @include media-breakpoint-up(lg) {
          border-right: 1px solid $white;
        }
      }
    }
  }

  .projectDescription {
    padding: 15px 20px 10px;
  }

  .projectLink {
    text-decoration: underline;
    font-style: italic;
  }

  .title {
    font-size: 40px;
    line-height: 43px;
    text-transform: uppercase;
    margin: 30px 20px 10px;
  }

  .projectContent {
    @include media-breakpoint-up(lg) {
      position: sticky;
      top: 4.5rem;
      border-right: 1px solid $black;
      flex-basis: 400px;
      flex-shrink: 0;
      flex-grow: 0;
      display: flex;
      flex-direction: column;
      height: calc(100vh - 4.5rem);
      overflow: auto;
      justify-content: space-between;
    }
  }

  .projectMedia {
    flex-grow: 1;
  }

  .projectDetails {
    border-bottom: 1px solid $black;

    @include media-breakpoint-up(lg) {
      border-bottom: 0;
    }

    &__item {
      padding: 10px 20px;
      border-top: 1px solid $black;
    }

    &__key {
      font-size: 16px;
      line-height: 21px;
      margin: 0;
    }

    &__label  {
      letter-spacing: 0;
    }
  }
</style>
