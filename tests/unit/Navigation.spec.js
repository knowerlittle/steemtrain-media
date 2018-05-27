import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Navigation from '@/components/Navigation.vue';

const shallowComponent = () => { 
  const wrapper = shallowMount(Navigation, {
    stubs: ['router-link', 'router-view']
  });

  return wrapper.vm;
};

describe('Navigation.vue', () => {

  describe('general', () => {
    it('has a name property', () => {
      const wrapper = shallowComponent();
      expect(wrapper.$options.name).to.equal('Navigation');
    });
  });

  describe('data', () => {
    it('isOpen: is set to false', () => {
      const wrapper = shallowComponent();
      expect(wrapper.isOpen).to.equal(false);
    });
  });

  describe('methods', () => {
    it('toggleMenu: toggles isOpen to true', () => {
      const wrapper = shallowComponent();
      wrapper.toggleMenu();
      expect(wrapper.isOpen).to.equal(true);
    });

    it('toggleMenu: toggles isOpen to false', () => {
      const wrapper = shallowComponent();
      wrapper.isOpen = true;
      wrapper.toggleMenu();
      expect(wrapper.isOpen).to.equal(false);
    });

    it('closeMenu: sets isOpen to false', () => {
      const wrapper = shallowComponent();
      wrapper.isOpen = true;
      wrapper.closeMenu();
      expect(wrapper.isOpen).to.equal(false);
    });
  });

  describe('computed', () => {
    it('showMenu: returns false if isOpen is true', () => {
        const wrapper = shallowComponent();
        expect(wrapper.showMenu).to.equal(true);
    });

    it('showMenu: returns true if isOpen is false', () => {
        const wrapper = shallowComponent();
        wrapper.isOpen = false;
        expect(wrapper.showMenu).to.equal(true);
    });
  });

});