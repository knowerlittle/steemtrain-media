import { expect } from 'chai';
import { shallowComponent } from './helpers';
import Navigation from '@/components/Navigation';

describe('Navigation.vue', () => {

  describe('general', () => {
    it('has a name property', () => {
      const wrapper = shallowComponent(Navigation);
      expect(wrapper.$options.name).to.equal('Navigation');
    });
  });

  describe('data', () => {
    it('isOpen: is set to false', () => {
      const wrapper = shallowComponent(Navigation);
      expect(wrapper.isOpen).to.equal(false);
    });
  });

  describe('methods', () => {
    it('toggleMenu: toggles isOpen to true', () => {
      const wrapper = shallowComponent(Navigation);
      wrapper.toggleMenu();
      expect(wrapper.isOpen).to.equal(true);
    });

    it('toggleMenu: toggles isOpen to false', () => {
      const wrapper = shallowComponent(Navigation);
      wrapper.isOpen = true;
      wrapper.toggleMenu();
      expect(wrapper.isOpen).to.equal(false);
    });

    it('closeMenu: sets isOpen to false', () => {
      const wrapper = shallowComponent(Navigation);
      wrapper.isOpen = true;
      wrapper.closeMenu();
      expect(wrapper.isOpen).to.equal(false);
    });
  });

  describe('computed', () => {
    it('showMenu: returns false if isOpen && isMobile are false', () => {
        const wrapper = shallowComponent(Navigation);
        expect(wrapper.showMenu).to.equal(false);
    });

    it('showMenu: returns true if isOpen && isMobile are true', () => {
        const wrapper = shallowComponent(Navigation);
        wrapper.isOpen = true;
        wrapper.isMobile = true;
        expect(wrapper.showMenu).to.equal(true);
    });
  });

});