<template>
  <div>
    <ul class="navigation-menu">
      <li class="has-submenu" 
          v-for="link of navLinks"
          @click="closeMenu"
          v-bind:key="link.id">
        <router-link :to=link.to exact>{{link.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',

  data() {
    return {
      navLinks: [
        { id: 1, name: 'Home', to: '/' },
        { id: 2, name: 'How To Start', to: '/start' },
        { id: 3, name: 'About', to: '/about' },
        { id: 4, name: 'Contact', to: '/contact' },
      ],
    }
  },

  methods: {
    closeMenu() {
      this.$emit('close');
    }
  }
}
</script>