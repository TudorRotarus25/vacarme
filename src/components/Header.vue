<template>
  <header class="header">
    <div class="header__leftLinks">
      <router-link to="/">
        <img
          src="@/assets/icons/logo.svg"
          alt="vacarme"
        >
      </router-link>
    </div>
    <div class="header__rightLinks">
      <router-link to="/about">
        <img
          src="@/assets/icons/info.svg"
          alt="vacarme"
        >
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  a {
    color: #fff;
  }

  img {
    display: block;
  }

  &__rightLinks {
    font-size: 2rem;
  }
}

img {
  height: 2rem;
}
</style>
