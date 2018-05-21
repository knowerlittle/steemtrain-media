<template>
  <header id="topnav" class="defaultscroll">
    <router-link to="/">Home</router-link>
    <router-link to="/start">How To Start</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped lang="scss">
#topnav {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1030;
  background-color: #ffffff;
  border: 0;
  // -webkit-transition: all .5s ease;
  // transition: all .5s ease;
  min-height: 62px;
}
</style>