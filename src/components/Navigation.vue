<template>
  <header id="topnav" class="defaultscroll">
    <div class="container">

      <!-- Logo -->
      <div>
        <router-link to="/" class="logo">
          <img class="train-logo" src="http://www.animatedimages.org/data/media/75/animated-train-image-0018.gif">.Media
             
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

        <div v-if="isMobile" > 
          <transition name="slide-fade">
            <div v-if="isOpen" id="navigation" v-bind:class="{open: isOpen}">
              <NavLink @close="closeMenu"/>
            </div>
          </transition>
        </div>
        <div v-else>
          <div id="navigation">
             <NavLink @close="closeMenu"/>
          </div>
        </div>

    </div>
  </header>
</template>

<script>
import NavLink from '@/components/NavLinks';

export default {
  name: 'Navigation',

  components: {
    NavLink,
  },

  mounted() {
    this.windowWidth = window.innerWidth;
    let that = this;
    this.$nextTick(function() {
      window.addEventListener('resize', function(e) {
        that.windowWidth = window.innerWidth
      });
    })
  },

  data() {
    return {
      isOpen: false,
      windowWidth: 0,
      txt: '',
      isMobile: false,
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
      return this.isOpen && this.isMobile; 
    }
  },

  watch: {
    windowWidth(newHeight, oldHeight) {
      if(newHeight < '991') {
        return this.isMobile = true;  
      } else {
        return this.isMobile = false;
      }
    }
  }
};
</script>

<style lang="scss">
@import 'src/assets/navigation';

a {
  color: #777777
}

.train-logo {
  width: 75px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}


</style>