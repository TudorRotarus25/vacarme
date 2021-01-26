<template>
  <div class="about">
    <div class="info">
      <p>
        Vacarme est un studio de <span class="emphasis">conception graphique pluridisciplinaire</span>
        basé à Paris, co-fondé par Valentin Jabaud, Camille Roulant et Margaux Giron.
      </p>
      <p>
        Nos formations en Design Global, Publicité et Typographie à l’Ecole de Condé Paris, à L’UAL
        à Londres et à l’ECV Paris nous ont réunis vers une <span class="emphasis">approche globale
        de la communication.</span>
      </p>
      <p>
        Nous nous accordons singulièrement sur l’élaboration de: <span class="emphasis">direction
        artistique, identités visuelles, typographies, packaging, design éditorial, web design,
        motion design, signalétiques.</span>
      </p>
    </div>
    <div class="team">
      <div class="team__image-container">
        <img class="team__image" src="@/assets/images/about-image.png" alt="Studio Vacarme team">
      </div>
      <div>
        <div class="team__email">
          hello@studiovacarme.com
        </div>
        <div class="team__members">
          <div class="member" v-for="member in members" :key="member.email">
            <div class="member__left">
              <div class="member__name">
                {{member.name}}
              </div>
              <div class="member__email secondary-font">
                {{member.email}}
              </div>
            </div>
            <div class="member__right secondary-font">
              {{member.phoneNumber}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    const members = [
      {
        name: 'Camille Roulant',
        email: 'camille@studiovacarme.com',
        phoneNumber: '+33 6 87 39 10 92',
      },
      {
        name: 'Valentin Jabaud',
        email: 'valentin@studiovacarme.com',
        phoneNumber: '+33 6 74 48 74 03',
      },
      {
        name: 'Margaux Giron',
        email: 'margaux@studiovacarme.com',
        phoneNumber: '+33 6 77 06 51 83',
      },
    ];

    return {
      members,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styling/variables";
@import "../styling/mixins";

.about {
  font-size: 30px;
  line-height: 35px;

  @include media-breakpoint-up(lg) {
    display: flex;
  }
}

.info {
  padding: 20px 20px 0;

  @include media-breakpoint-up(lg) {
    flex-grow: 1;
  }

  p {
    max-width: 860px;
  }
}

.team {
  background-color: $color-accent;
  border-top: 1px solid $black;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);

  @include media-breakpoint-up(md) {
    min-height: calc(100vh - 105px);
  }

  @include media-breakpoint-up(lg) {
    flex-shrink: 0;
    flex-grow: 0;
    width: 400px;
    height: calc(100vh - 4.5rem - 3.1rem);
    border-top: 0;
    border-left: 1px solid $black;
  }

  &__image-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  &__image {
    display: block;
    width: 60%;
    margin: 0 auto;
    padding: 20px 0 20px;
  }

  &__email {
    font-size: calc(8.75vw - 3px);
    line-height: calc(8.75vw + 3px);
    font-weight: bold;
    text-align: center;
    margin-bottom: 12px;

    @include media-breakpoint-up(lg) {
      font-size: 32.5px;
      line-height: 35px;
    }
  }

  &__members {
    .member {
      font-size: 13px;
      line-height: 15px;
      display: flex;
      align-items: center;
      border-top: 1px solid $color-border;
      padding: 12px 19px;

      @include media-breakpoint-up(xs) {
        font-size: 16px;
        line-height: 18px;
      }

      &__right {
        margin-left: auto;
        text-align: right;
      }

      &__name {
        font-weight: bold;
      }
    }
  }
}

.emphasis {
  font-style: italic;
  font-weight: bold;
}
</style>
