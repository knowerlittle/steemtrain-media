<template>
  <header id="topnav" class="defaultscroll">
    <div class="container">

      <!-- Logo -->
      <div>
        <router-link to="/" class="logo">
          <img class="train-logo" v-bind:src="steemtrainLogo"><span class="media-text">.Media</span>
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
import steemtrainLogo from '@/assets/img/steemtrainLogo.gif';

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
      steemtrainLogo,
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

header {
  max-height: 10%;
}

.media-text {
  position: relative;
  top: 5px;
}

a {
  color: #777777
}

.train-logo {
  width: 65px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}


</style>