import { shallowMount } from '@vue/test-utils';

export const shallowComponent = (component) => { 
  const wrapper = shallowMount(component, {
    stubs: ['router-link', 'router-view']
  });

  return wrapper.vm;
};