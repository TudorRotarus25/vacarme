<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Roquefort Semi-Strong";
  src: url("assets/fonts/Roquefort-Semi-Strong.otf");
}

@font-face {
  font-family: "Roquefort Standard";
  src: url("assets/fonts/Roquefort-Standard.otf");
}

@font-face {
  font-family: "Roquefort Strong";
  src: url("assets/fonts/Roquefort-Strong.otf");
}

@font-face {
  font-family: "stLatex";
  src: url("/assets/fonts/stLatexBETA-Regular.ttf")
}

html {
  font-size: 14px;
  font-family: "St Latex", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  color: #1D1D1B;
}

h1, h2 {
  font-family: "Roquefort Strong", Helvetica, Arial, sans-serif;
}

h3, h4, h5 {
  font-family: "Roquefort Standard", Helvetica, Arial, sans-serif;
}

h6 {
  font-family: "Roquefort Semi-Strong", Helvetica, Arial, sans-serif;
}

a {
  text-decoration: none;
  color: #1D1D1B;
}

.stLatex {
  font-family: "St Latex", Helvetica, Arial, sans-serif;
}
</style>
