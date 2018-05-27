<template>
  <header id="topnav" class="defaultscroll">
    <div class="container">

      <!-- Logo -->
      <div>
        <router-link to="/" class="logo">
          Steemtrain.Media        
        </router-link>
      </div>
      <!-- Logo -->

      <div class="menu-extras">
        <div class="menu-item" @click="toggleMenu">
          <!-- Mobile Toggle -->
          <a class="navbar-toggle"
            v-bind:class="{ 'open': isOpen }">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- Mobile Toggle -->
        </div>
      </div>

      <div id="navigation" v-bind:class="{open: isOpen}">
        <transition name="slide-fade">
        <ul class="navigation-menu">
          <li class="has-submenu" @click="closeMenu">
            <router-link to="/" exact>Home</router-link>
          </li>
          
          <li class="has-submenu" @click="closeMenu">
            <router-link to="/start" exact>How To Start</router-link>
          </li>

          <li class="has-submenu" @click="closeMenu">
            <router-link to="/about" exact>About</router-link>
          </li>
          
          <li class="has-submenu" @click="closeMenu">
            <router-link to="/contact" exact>Contact</router-link>
          </li>
        </ul>
        </transition>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },

  computed: {
    showMenu() {
      return !this.isOpen; 
    }
  }


};
</script>

<style scoped lang="scss">
@import 'src/assets/navigation';

a {
  color: #777777
}



</style>