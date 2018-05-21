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
        <div class="menu-item">
          <!-- Mobile Toggle -->
          <a class="navbar-toggle">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- Mobile Toggle -->
        </div>
      </div>

      <div id="navigation">
        <ul class="navigation-menu">
          <li class="has-submenu">
            <router-link to="/">Home</router-link>
          </li>
          
          <li class="has-submenu">
            <router-link to="/start">How To Start</router-link>
          </li>

          <li class="has-submenu">
            <router-link to="/about">About</router-link>
          </li>
          
          <li class="has-submenu">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped lang="scss">
@import 'src/assets/variables';

a {
  color: #777777
}

#topnav {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1030;
  background-color: white;
  border: 0;
  // -webkit-transition: all .5s ease;
  transition: all .5s ease;
  min-height: 62px;

  .navigation-menu {
    float: right;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      float: left;
      display: block;
      position: relative;
      margin: 0 5px;

      a {
        display: block;
        font-size: 12px;
        color: #777777;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        line-height: 20px;
        padding-left: 10px;
        padding-right: 15px;
      }

      .submenu li a i {
        margin-right: 10px;
        font-size: 14px;
      }

    }
  }

  .logo {
    float: left;
    line-height: 70px;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    color: #333;
    font-weight: 700;
    font-size: 22px;
  }

  .menu-extras {
    float: right;
  }

  .has-submenu.active .submenu li.active > a {
    color: $primary;
  }

  .has-submenu.active a {
    color: $primary;
  }

  .has-submenu.active .menu-arrow {
    border-color: $primary;
  }

  .navbar-toggle {
    border: 0;
    position: relative;
    padding: 0;
    margin: 0;
    cursor: pointer;

    .lines {
      width: 25px;
      display: block;
      position: relative;
      margin: 28px auto;
      height: 15px;
    }

    span {
      height: 2px;
      width: 100%;
      background-color: white;
      display: block;
      margin-bottom: 5px;
      -webkit-transition: -webkit-transform .5s ease;
      transition: -webkit-transform .5s ease;
      transition: transform .5s ease, -webkit-transform .5s ease;

      :last-child {
        margin-bottom: 0;
      }
    }

  }

  .navbar-toggle.open span {
    position: absolute;

    :first-child {
      top: 6px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    :nth-child(2) {
      visibility: hidden;
    }

    :last-child {
      width: 100%;
      top: 6px;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    :hover {
      background-color: #19b798;
    }
  }


}

.has-submenu {
  position: relative;
}

@media (min-width: 992px) {
  #topnav #navigation {
    display: block !important;
  }
}

@media (max-width: 991px) {
  #navigation {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    display: none;
    height: auto;
    padding-bottom: 0;
    overflow: auto;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    background-color:white;

    .open {
      display: block;
      overflow-y: auto;
    }
  }
}
</style>