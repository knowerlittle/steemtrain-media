import { expect } from 'chai';

import Navigation from '@/components/Navigation.vue';

import { shallowMount } from '@vue/test-utils';
const shallowComponent = () => { 
  const wrapper = shallowMount(Navigation, {
    stubs: ['router-link', 'router-view']
  });

  return wrapper.vm;
};