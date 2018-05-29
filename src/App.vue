<template>
    <div id="app">
        <div>
          <Navigation/> 
            <transition name="fade" mode="out-in">
              <router-view/>
            </transition>
          <Footer/>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Navigation,
    Footer,
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.section {
    padding-top: 30px;
    padding-bottom: 80px;
    position: relative;
}


</style>
