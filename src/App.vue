<template>
  <div id="app">
    <Header />
    <div class="appContent">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Roquefort";
  src: url("assets/fonts/Roquefort-Semi-Strong.otf");
  font-weight: 100;
}

@font-face {
  font-family: "Roquefort";
  src: url("assets/fonts/Roquefort-Standard.otf");
  font-weight: normal;
}

@font-face {
  font-family: "Roquefort";
  src: url("assets/fonts/Roquefort-Strong.otf");
  font-weight: bold;
}

@font-face {
  font-family: "St Latex";
  src: url("assets/fonts/stLatexBETA-Regular.ttf");
}

html {
  font-size: 85%;
  font-family: "St Latex", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  color: #1D1D1B;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Roquefort", Helvetica, Arial, sans-serif;
  margin-top: 0;
  margin-bottom: 1em;
}

h1, h2 {
  font-weight: bold;
}

h3, h4, h5 {
  font-weight: normal;
}

h6 {
  font-weight: 100;
}

h1, h3 {
  font-size: 2rem;
}

h2, h4 {
  font-size: 1.8rem;
}

h5, h6 {
  font-size: 1rem;
}

a {
  text-decoration: none;
  color: #1D1D1B;
}

.appContent {
  margin-top: 5rem;
}
</style>
