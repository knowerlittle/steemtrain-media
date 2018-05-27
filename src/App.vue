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
@import 'src/assets/variables';

#app {
  font-family: 'Roboto Mono', monospace;
  ::selection {
    background: $secondary;
    color: #ffffff;
  }
  ::-moz-selection {
      background: $secondary;
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
