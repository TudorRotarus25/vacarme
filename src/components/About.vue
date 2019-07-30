<template>
  <div class="about">
    <div class="about__left">
      <h1>studio vacarme</h1>
      <div class="body">
        <p>
          Vacarme est un studio de conception graphique pluridisciplinaire
          <i class="icon-6 purple" /> basé à Paris <i class="icon-2 yellow" />, co-fondé par
          Valentin Jabaud, Camille Roulant et Margaux Giron.
        </p>
        <p>
          Nos formations en Design Globale, Publicité et Typographie à l’Ecole de Condé Paris, à
          L’UAL <i class="icon-2 red" /> à Londres et à l’ECV Paris nous ont réuni vers une
          <i class="icon-8 green" /> approche globale de la communication.
        </p>
        <p>
          Nous nous accordons singulièrement sur l’élaboration d’identités visuelles, de
          typographies, de projets éditoriaux, de Webdesign, <i class="icon-4 pink" /> et de
          signalétiques.
        </p>
      </div>
    </div>
    <div class="about__right">
      <div class="details">
        <p>
          Studio Vacarme a été co-fondé avec Valentin Jabaud, Camille Roulant et Margaux Giron.
        </p>
        <p>
          Ce site a été dessiné par nos soins et développé par
          Tudor Rotarus. Merci à Damien Bauza pour la typographie.
        </p>
        <p>
          Copyright © 2019 Studio Vacarme, tous droits réservés. Toute reproduction, totale ou
          partielle, du contenu présent sur ce site est interdite sans l’accord écrit de Studio
          Vacarme.
        </p>
      </div>
      <hr>
      <div class="contact">
        <p>
          hello@studiovacarme.com
        </p>
      </div>
      <div class="members">
        <div>
          <div>Camille Roulant</div>
          <div>06 87 39 10 92</div>
        </div>
        <div>
          <div>Margaux Giron</div>
          <div>06 77 06 51 83</div>
        </div>
        <div>
          <div>Valentin Jabaud</div>
          <div>06 74 48 74 03</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
@import "../styling/variables";
@import "../styling/mixins";

.about {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 20px 60px;
  min-height: calc(100vh - 12.5rem);

  @include media-breakpoint-up(lg) {
    padding: 4rem 0 2rem;
  }

  &__left {
    flex-basis: 100%;
    font-size: 1.5rem;

    @include media-breakpoint-up(lg) {
      flex-basis: 50%;
      margin-right: 4%;
    }
  }

  &__right {
    font-size: 1rem;
    flex-basis: 100%;

    @include media-breakpoint-up(lg) {
      flex-basis: 34%;
    }
  }
}

.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    margin: 0 5px 10px;
  }
}

hr {
  margin: 30px 0;

  @include media-breakpoint-up(lg) {
    margin: 2rem 0;
  }
}
</style>
