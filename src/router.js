import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Start from '@/views/Start';
import About from '@/views/About';
import Contact from '@/views/Contact';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/start',
      name: 'start',
      component: Start,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
