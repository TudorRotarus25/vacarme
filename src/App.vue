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
  font-weight: 600;
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
  font-size: 20px;
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

h5 {
  font-weight: 600;
}

h1, h3 {
  font-size: 2rem;
}

h2, h4 {
  font-size: 1.8rem;
}

h5, h6 {
  font-size: 1rem;
  margin: 0;
}

a {
  text-decoration: none;
  color: #1D1D1B;
}

p {
  margin: 0 0 1.5em 0;
}

.appContent {
  margin-top: 3.5rem;
}
</style>
