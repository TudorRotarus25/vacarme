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
  height: 100px;
  padding: 0 20px;

  a {
    color: #fff;
  }

  img {
    display: block;
  }

  &__rightLinks {
    font-size: 40px;
  }
}

img {
  height: 40px;
}
</style>
