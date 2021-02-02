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
      <ProjectMedia
        v-if="!isLoading"
        :media-items="projectMedia"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProjectMedia from '@/components/ProjectMedia.vue';

export default {
  name: 'ProjectDetails',
  components: {
    ProjectMedia,
  },
  computed: {
    ...mapState({
      isDarkMode: 'isDarkMode',
      isLoading: 'isLoading',
      projectData: 'projectData',
    }),
    projectMedia() {
      if (window.innerWidth < 992) {
        return this.projectData.projectMobileMedia;
      }
      return this.projectData.projectDesktopMedia;
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

      a {
        color: $white ;
      }
    }
  }

  .projectDescription {
    padding: 15px 20px 10px;

    @include media-breakpoint-up(lg) {
      height: calc(100vh - 4.5rem - 269px);
      overflow: auto;
    }

    p {
      @include media-breakpoint-up(lg) {
        max-width: 270px;
      }
    }
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
