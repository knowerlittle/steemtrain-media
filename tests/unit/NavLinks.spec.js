import chai, { expect, should } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { shallowComponent } from './helpers';
import NavLinks from '@/components/NavLinks.vue';

chai.use(sinonChai);

describe('NavLinks.vue', () => {

  describe('general', () => {
    it('has a name property', () => {
      const wrapper = shallowComponent(NavLinks);
      expect(wrapper.$options.name).to.equal('NavLinks');
    });
  });

  describe('data', () => {
    it('navLinks: has "Home" link', () => {
      const wrapper = shallowComponent(NavLinks);

      expect(wrapper.navLinks[0].id).to.equal(1);
      expect(wrapper.navLinks[0].name).to.equal('Home');
      expect(wrapper.navLinks[0].to).to.equal('/');
    });
    it('navLinks: has "How To Start" link', () => {
      const wrapper = shallowComponent(NavLinks);

      expect(wrapper.navLinks[1].id).to.equal(2);
      expect(wrapper.navLinks[1].name).to.equal('How To Start');
      expect(wrapper.navLinks[1].to).to.equal('/start');
    });
    it('navLinks: has "About" link', () => {
      const wrapper = shallowComponent(NavLinks);

      expect(wrapper.navLinks[2].id).to.equal(3);
      expect(wrapper.navLinks[2].name).to.equal('About');
      expect(wrapper.navLinks[2].to).to.equal('/about');
    });
    it('navLinks: has "Contact" link', () => {
      const wrapper = shallowComponent(NavLinks);

      expect(wrapper.navLinks[3].id).to.equal(4);
      expect(wrapper.navLinks[3].name).to.equal('Contact');
      expect(wrapper.navLinks[3].to).to.equal('/contact');
    });
  });

  describe('methods', () => {
    it('closeMenu', () => {
      const wrapper = shallowComponent(NavLinks);
      sinon.spy(wrapper, '$emit');
      wrapper.closeMenu();
      expect(wrapper.$emit).to.have.been.calledWith('close');
    });
  });
});