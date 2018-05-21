<template>
  <div id="app">
    <Navigation/> 
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation,
  },
};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500');

#app {
  font-family: 'Roboto Mono', monospace;
  ::selection {
    background: rgba(255, 88, 88, 0.7);
    color: #ffffff;
  }
  ::-moz-selection {
      background: rgba(255, 88, 88, 0.7);
      color: #ffffff;
  }

  a {
      text-decoration: none !important;
  }

  p {
      font-size: 15px;
  }
}

</style>
